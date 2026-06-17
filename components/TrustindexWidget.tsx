"use client";

import { useEffect, useRef, useState } from "react";
import { trustindexProposalWidgetId } from "@/lib/trustindex-config";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  widgetId?: string;
  layout?: "badge-square" | "carousel" | "full";
};

const layoutClass: Record<NonNullable<Props["layout"]>, string> = {
  "badge-square":
    "flex aspect-square w-[10.5rem] items-center justify-center sm:w-[11rem] [&_.ti-widget]:!m-0 [&_.ti-widget]:!h-full [&_.ti-widget]:!w-full [&_.ti-widget]:!max-w-none",
  carousel:
    "w-full [&_.ti-widget]:relative [&_.ti-widget]:mx-auto [&_.ti-widget]:max-w-full [&_.ti-widget]:!mb-0",
  full: "min-h-[20rem] w-full [&_.ti-widget]:relative [&_.ti-widget]:mx-auto [&_.ti-widget]:max-w-full",
};

/** Trustindex often injects a clone on document.body — keep one copy inside our host. */
function reconcileTrustindexWidgets(host: HTMLElement) {
  const slot = host.querySelector<HTMLElement>("[data-trustindex-slot]") ?? host;
  const widgets = Array.from(document.querySelectorAll<HTMLElement>(".ti-widget"));

  for (const widget of widgets) {
    if (host.contains(widget)) continue;
    slot.appendChild(widget);
  }

  const inHost = host.querySelectorAll(".ti-widget");
  for (let i = 1; i < inHost.length; i++) {
    inHost[i]?.remove();
  }

  document.body.querySelectorAll(":scope > div").forEach((el) => {
    if (host.contains(el)) return;
    if (el.querySelector(".ti-widget") && !el.classList.contains("trustindex-host")) {
      el.remove();
    }
  });
}

/**
 * Trustindex loader must live inside this host — Next.js Script at document
 * end puts the widget at the bottom of the page.
 */
export function TrustindexWidget({
  className = "",
  widgetId,
  layout = "badge-square",
}: Props) {
  const id = widgetId ?? trustindexProposalWidgetId;
  const hostRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    setLoadError(false);
    const slot = host.querySelector<HTMLElement>("[data-trustindex-slot]");
    slot?.replaceChildren();
    reconcileTrustindexWidgets(host);

    const script = document.createElement("script");
    script.src = `https://cdn.trustindex.io/loader.js?${id}`;
    script.defer = true;
    script.async = true;
    script.onerror = () => setLoadError(true);
    (slot ?? host).appendChild(script);

    const hostObserver = new MutationObserver(() => {
      reconcileTrustindexWidgets(host);
      const widget = host.querySelector(".ti-widget");
      if (widget?.textContent?.includes("Widget not found")) {
        setLoadError(true);
      }
    });
    hostObserver.observe(host, { childList: true, subtree: true });

    const bodyObserver = new MutationObserver(() => {
      reconcileTrustindexWidgets(host);
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });

    const sweeps = [200, 600, 1500, 3000, 6000, 10000].map((ms) =>
      window.setTimeout(() => reconcileTrustindexWidgets(host), ms),
    );

    return () => {
      hostObserver.disconnect();
      bodyObserver.disconnect();
      sweeps.forEach((t) => window.clearTimeout(t));
      slot?.replaceChildren();
      reconcileTrustindexWidgets(host);
    };
  }, [id]);

  return (
    <div
      ref={hostRef}
      className={cn("trustindex-host relative isolate z-[2]", className)}
      aria-label="Google reviews"
      data-trustindex-widget-id={id}
      data-layout={layout}
    >
      <div data-trustindex-slot className={cn(layoutClass[layout])} />
      {loadError ? (
        <div className="proposal-reviews-fallback flex aspect-square w-[10.5rem] flex-col items-center justify-center rounded-2xl border border-brand-purple/15 bg-white p-4 text-center shadow-sm sm:w-[11rem]">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-purple/60">Google reviews</p>
          <p className="mt-1 font-heading text-3xl font-bold text-brand-purple">4.9</p>
          <p className="mt-1 text-xs text-brand-purple/70">Hundreds of 5-star reviews</p>
        </div>
      ) : null}
    </div>
  );
}
