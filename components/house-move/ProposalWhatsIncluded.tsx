import { BrandLogomarkWatermark } from "@/components/BrandLogomarkWatermark";
import {
  moveInclusionCategories,
  whatsIncludedCopy,
} from "@/lib/house-move-inclusions";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
      <path
        d="M2 6.5 4.5 9 10 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Static "what's included" panel — matches website copy, all sections open for print/PDF. */
export function ProposalWhatsIncluded() {
  return (
    <div className="proposal-included-panel relative overflow-hidden rounded-3xl border border-brand-purple/20 bg-brand-purple px-6 py-8 text-white shadow-[0_20px_50px_-24px_rgba(151,57,176,0.55)] sm:px-8 sm:py-10">
      <BrandLogomarkWatermark mark="yellow" position="top-left" size={240} opacity={0.09} />
      <BrandLogomarkWatermark mark="yellow" position="bottom-right" size={180} opacity={0.05} />

      <div className="relative z-[1] grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow/90">
            {whatsIncludedCopy.eyebrow}
          </p>
          <h2 className="mt-2 font-heading text-2xl leading-tight text-white sm:text-3xl">
            {whatsIncludedCopy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/88">{whatsIncludedCopy.lead}</p>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
            <h3 className="font-heading text-lg text-brand-yellow">{whatsIncludedCopy.asideTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/88">{whatsIncludedCopy.asideBody}</p>
          </div>
        </div>

        <div className="proposal-inclusion-accordion divide-y divide-white/15 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
          {moveInclusionCategories.map((cat) => (
            <div key={cat.id} className="proposal-inclusion-item px-5 py-4 sm:px-6 sm:py-5">
              <h3 className="font-heading text-lg text-white sm:text-xl">{cat.title}</h3>
              <div className="proposal-inclusion-body mt-3">
                {cat.intro ? (
                  <p className="mb-3 text-sm leading-relaxed text-white/85">{cat.intro}</p>
                ) : null}
                <ul className="space-y-2.5">
                  {cat.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-purple">
                        <CheckIcon />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
