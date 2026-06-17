import { HeroVisual } from "@/components/HeroVisual";
import { SitePhoto } from "@/components/SitePhoto";
import { DeckBrandLogo } from "@/components/deck/DeckBrandLogo";
import { DeckSlide } from "@/components/deck/DeckSlide";
import {
  DeckEyebrow,
  DeckLead,
  DeckRule,
  DeckTitle,
} from "@/components/deck/DeckTypography";
import { deckHero } from "@/lib/deck-hero";
import {
  formatAddress,
  formatNzd,
  formatQuoteQuantity,
  hasNotes,
  quoteGstAmount,
  quoteSectionTotals,
  quoteSubtotalExclGst,
  quoteTimelineSteps,
  quoteTotalInclGst,
  type HouseMoveQuote,
} from "@/lib/house-move-quote";
import {
  officeAboutParagraphs,
  officeAssumptionPoints,
  officeContacts,
  officeCredentials,
  officeHealthSafetyPoints,
  officeStats,
} from "@/lib/office-move-deck";
import { sitePhotos } from "@/lib/site-photos";

function PricingTable({
  headers,
  rows,
  compact,
}: {
  headers: string[];
  rows: string[][];
  compact?: boolean;
}) {
  return (
    <div className="deck-pricing-table-wrap mt-4 rounded-xl border border-brand-purple/15 bg-white shadow-sm sm:mt-6">
      <table
        className={`deck-pricing-table w-full ${compact ? "text-xs sm:text-sm" : "text-sm"}`}
      >
        <thead>
          <tr className="border-b border-brand-purple/10 bg-brand-surface">
            {headers.map((h) => (
              <th
                key={h}
                className={`text-left font-heading font-bold uppercase tracking-wide text-brand-purple ${
                  compact ? "px-2 py-2 text-[10px] sm:px-3 sm:py-2.5 sm:text-xs" : "px-4 py-3 text-xs"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-brand-purple/8 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={`${row[0]}-${j}`}
                  className={`${compact ? "px-2 py-2 sm:px-3 sm:py-2.5" : "px-4 py-3"} ${
                    j === 0 ? "font-medium text-brand-purple" : "text-brand-purple/80"
                  } ${j > 0 ? "text-right tabular-nums" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PriceCard({ rows }: { rows: readonly { label: string; value: string }[] }) {
  return (
    <div className="deck-price-card mt-6 overflow-hidden rounded-xl border border-brand-purple/15 bg-white shadow-sm sm:mt-8">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex items-baseline justify-between gap-4 px-5 py-4 ${
            i > 0 ? "border-t border-brand-purple/10" : ""
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-purple/70">
            {row.label}
          </span>
          <span className="font-heading text-base text-brand-purple sm:text-lg">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function formatSiteAccess(quote: HouseMoveQuote, kind: "pickup" | "delivery"): string {
  const addr = kind === "pickup" ? quote.pickup : quote.delivery;
  const parts = [formatAddress(addr)];
  if (addr.access) parts.push(addr.access);
  return parts.join(" · ");
}

type Props = {
  quote: HouseMoveQuote;
};

export function OfficeMoveDeck({ quote }: Props) {
  const projectTitle =
    quote.projectTitle ?? (quote.clientName ? `${quote.clientName} office relocation` : "Office relocation");
  const sections = quoteSectionTotals(quote);
  const timeline = quoteTimelineSteps(quote);
  const subtotal = quoteSubtotalExclGst(quote);
  const gst = quoteGstAmount(quote);
  const total = quoteTotalInclGst(quote);
  const scopeNotes = quote.notes?.filter((n) => n.trim()) ?? [];
  const showScopeNotes = hasNotes(quote);

  const summaryRows = [
    { label: "Trucks (callout)", value: `${formatNzd(sections.trucks)} excl. GST` },
    { label: "Labour (fixed, 5 days)", value: `${formatNzd(sections.labour)} excl. GST` },
    { label: "Materials", value: `${formatNzd(sections.materials)} excl. GST` },
    { label: "Subtotal", value: `${formatNzd(subtotal)} excl. GST` },
    { label: "GST (15%)", value: formatNzd(gst) },
    { label: "Fixed price total", value: `${formatNzd(total)} incl. GST` },
  ] as const;

  const lineRows = quote.lineItems.map((item) => {
    const qty = item.quantity ?? item.hours ?? 1;
    const unit = item.unitPriceExclGst ?? item.hourlyRateExclGst ?? item.amountExclGst;
    return [item.description, formatQuoteQuantity(qty), formatNzd(unit), formatNzd(item.amountExclGst)];
  });

  return (
    <div className="deck-root bg-brand-canvas font-sans">
      {/* 1 - Cover */}
      <DeckSlide id="cover" tone="purple" innerClassName="justify-center gap-8">
        <div className="deck-cover-copy">
          <DeckBrandLogo onPurple />
          <div className="deck-eyebrow-wrap mt-6">
            <DeckEyebrow tone="purple">
              Proposal{quote.quoteDate ? ` · ${quote.quoteDate}` : ""}
            </DeckEyebrow>
          </div>
          <DeckTitle tone="purple" as="h1" className="deck-cover-title mt-5">
            {projectTitle}
          </DeckTitle>
          {quote.contactName ? (
            <p className="mt-3 font-heading text-base font-bold uppercase tracking-[0.2em] text-brand-yellow sm:text-lg">
              Prepared for {quote.contactName}
            </p>
          ) : null}
          <p className="mt-4 text-base text-white/75 sm:mt-6 sm:text-lg">
            {quote.preparedBy ?? "Danielle Maritz, Office Manager"}
          </p>
          {quote.quoteNumber ? (
            <p className="mt-2 text-sm text-white/60">Quote {quote.quoteNumber}</p>
          ) : null}
        </div>
        <HeroVisual
          photoSrc={sitePhotos.homeHero}
          photoAlt="Careful furniture move with Specialist Movers"
          overlayCaption={deckHero.photoTagline}
          imageObjectPosition="center 38%"
          priority
          className="deck-cover-photo hero-photo-ambient w-full"
        />
      </DeckSlide>

      {/* 2 - Who we are */}
      <DeckSlide id="about" tone="light" scrollable>
        <DeckEyebrow>Who we are</DeckEyebrow>
        <DeckTitle className="mt-4">Auckland&apos;s premium moving company</DeckTitle>
        <DeckRule />
        <HeroVisual
          photoSrc={sitePhotos.commercialFitOut}
          photoAlt="Specialist Movers crew on a commercial fit-out"
          aspectClassName="aspect-[16/9] min-h-[12rem] sm:aspect-[16/9] sm:min-h-[16rem]"
          imageObjectPosition="center 35%"
          className="mt-8 w-full"
        />
        <div className="deck-stack-tight mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          {officeAboutParagraphs.map((para) => (
            <DeckLead key={para.slice(0, 24)}>{para}</DeckLead>
          ))}
        </div>
      </DeckSlide>

      {/* 3 - Experience */}
      <DeckSlide id="experience" tone="light" scrollable>
        <DeckEyebrow>Experience</DeckEyebrow>
        <DeckTitle className="mt-4">Commercial moves, every week</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {officeStats.map((s) => (
            <li key={s.label} className="border-t border-brand-purple/15 pt-6">
              <p className="font-heading text-3xl font-bold text-brand-purple sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-purple/65">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.officeMove}
          alt="Office relocation with crew carrying boxes"
          aspect="wide"
          className="deck-experience-photo"
          overlay={false}
        />
      </DeckSlide>

      {/* 4 - Scope & sites */}
      <DeckSlide id="scope" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Your project</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Scope &amp; site access
        </DeckTitle>
        <DeckRule tone="purple" />
        {quote.moveDate ? (
          <DeckLead tone="purple">{quote.moveDate}</DeckLead>
        ) : null}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {quote.pickup.suburb ? (
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">Pickup</p>
              <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base">
                {formatSiteAccess(quote, "pickup")}
              </p>
            </div>
          ) : null}
          {quote.delivery.suburb ? (
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">Drop off</p>
              <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base">
                {formatSiteAccess(quote, "delivery")}
              </p>
            </div>
          ) : null}
        </div>
        {showScopeNotes ? (
          <ul className="mt-6 space-y-3">
            {scopeNotes.map((note) => (
              <li
                key={note}
                className="flex gap-3 rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/88 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
        ) : null}
      </DeckSlide>

      {/* 5 - Timeline */}
      {timeline.length > 0 ? (
        <DeckSlide id="timeline" tone="light" scrollable>
          <DeckEyebrow>The plan</DeckEyebrow>
          <DeckTitle className="mt-4">5-day relocation timeline</DeckTitle>
          <DeckRule />
          <DeckLead>
            Fixed-price labour is spread across five days so items and the facility are handled with care,
            without rushing or damage.
          </DeckLead>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {timeline.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-xl border border-brand-purple/12 bg-white/90 p-4 shadow-sm sm:p-5"
              >
                <span className="font-heading text-2xl font-bold leading-none text-brand-yellow sm:text-3xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-purple/80 sm:text-base">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </DeckSlide>
      ) : null}

      {/* 6 - Health & safety */}
      <DeckSlide id="health-safety" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Health &amp; safety</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Built for commercial sites
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">
          Occupied offices, tight lift access, and acoustic pods all need a crew that knows the rules and
          sticks to them.
        </DeckLead>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {officeHealthSafetyPoints.map((p) => (
            <li key={p.title} className="border-t border-white/20 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/88 sm:text-base">{p.body}</p>
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 7 - Fixed price summary */}
      <DeckSlide id="pricing-summary" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Your quote</DeckEyebrow>
        <DeckTitle className="mt-3">Fixed price summary</DeckTitle>
        <DeckRule />
        <DeckLead>
          This is a fixed-price quote for the scope, access, and timeline described in this proposal. It is
          not charged by the hour.
        </DeckLead>
        <PriceCard rows={summaryRows} />
        {quote.validFor ? (
          <p className="deck-footnote mt-4 text-sm leading-relaxed text-brand-purple/65 sm:mt-6">
            Valid for {quote.validFor} from the quote date above.
          </p>
        ) : null}
      </DeckSlide>

      {/* 8 - Line detail */}
      <DeckSlide id="pricing-detail" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Breakdown</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Trucks, labour &amp; materials
        </DeckTitle>
        <DeckRule tone="purple" />
        <PricingTable
          compact
          headers={["Description", "Qty", "Unit (excl. GST)", "Amount (excl. GST)"]}
          rows={lineRows}
        />
        <p className="deck-tagline mt-8 font-heading text-sm font-bold uppercase tracking-[0.15em] text-brand-yellow sm:text-base">
          Fixed price total {formatNzd(total)} incl. GST
        </p>
      </DeckSlide>

      {/* 9 - Credentials */}
      <DeckSlide id="credentials" tone="light" scrollable>
        <DeckEyebrow>Credentials</DeckEyebrow>
        <DeckTitle className="mt-4">Insurance &amp; your cover</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {officeCredentials.map((p) => (
            <li key={p.title} className="border-t border-brand-purple/15 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-purple/80 sm:text-base">{p.body}</p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.commercialOnSite}
          alt="Specialist Movers truck on a commercial site"
          aspect="wide"
          className="mt-8 w-full"
          overlay={false}
        />
      </DeckSlide>

      {/* 10 - Assumptions */}
      <DeckSlide id="assumptions" tone="light" scrollable>
        <DeckEyebrow>Terms</DeckEyebrow>
        <DeckTitle className="mt-4">Fixed price &amp; assumptions</DeckTitle>
        <DeckRule />
        <ul className="deck-checklist mt-6 grid gap-3 sm:mt-8 sm:gap-4">
          {officeAssumptionPoints.map((point) => (
            <li
              key={point.slice(0, 32)}
              className="flex items-start gap-3 rounded-lg border border-brand-purple/12 bg-white/95 px-4 py-3 text-sm leading-relaxed text-brand-purple shadow-sm sm:text-base"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 11 - Contact */}
      <DeckSlide id="contact" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Contact</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Lock in your dates
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">
          Reply to confirm and we will lock in your dates. Acceptance is subject to our commercial relocation
          terms and conditions.
        </DeckLead>
        <div className="deck-contact-grid mt-6 lg:grid lg:grid-cols-2 lg:gap-10">
          <SitePhoto
            src={sitePhotos.premiumService}
            alt="Specialist Movers service"
            aspect="wide"
            className="deck-contact-photo border-white/15"
            overlay={false}
          />
          <div className="deck-contact-list mt-6 flex flex-col gap-5 sm:gap-6 lg:mt-0">
            {officeContacts.map((c) => (
              <div key={c.role} className="border-t border-white/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">{c.role}</p>
                <p className="mt-2 font-heading text-xl text-white">{c.name}</p>
                {c.phone ? <p className="mt-1 text-sm text-white/80">{c.phone}</p> : null}
                <a
                  href={`mailto:${c.email}`}
                  className="mt-1 block text-sm text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="deck-address mt-6 text-sm text-white/65 sm:mt-8">
          186 Target Road, Glenfield · specialistmovers.co.nz
        </p>
      </DeckSlide>
    </div>
  );
}
