import { HeroVisual } from "@/components/HeroVisual";
import { QuoteTable } from "@/components/house-move/QuoteTable";
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
  fixedLabourAndTrucksExclGst,
  formatAddress,
  formatNzd,
  hasNotes,
  quoteTimelineSteps,
  type HouseMoveQuote,
} from "@/lib/house-move-quote";
import {
  officeAboutParagraphs,
  officeContacts,
  officeCredentials,
  officeHealthSafetyPoints,
  officeStats,
  officeTermsClauseGroups,
  officeTermsIntro,
  type OfficeTermsClause,
} from "@/lib/office-move-deck";
import { sitePhotos } from "@/lib/site-photos";

function formatSiteAccess(quote: HouseMoveQuote, kind: "pickup" | "delivery"): string {
  const addr = kind === "pickup" ? quote.pickup : quote.delivery;
  const parts = [formatAddress(addr)];
  if (addr.access) parts.push(addr.access);
  return parts.join(" · ");
}

function formatPickupDelivery(addr: HouseMoveQuote["pickup"]): string {
  return addr.access ? `${formatAddress(addr)} (${addr.access})` : formatAddress(addr);
}

function QuoteMoveDetails({ quote }: { quote: HouseMoveQuote }) {
  const rows: { label: string; value: string }[] = [];

  if (quote.moveDate) rows.push({ label: "Timeline", value: quote.moveDate });
  if (quote.pickup.suburb) rows.push({ label: "Pickup", value: formatPickupDelivery(quote.pickup) });
  if (quote.delivery.suburb) rows.push({ label: "Drop off", value: formatPickupDelivery(quote.delivery) });

  if (rows.length === 0) return null;

  return (
    <dl className="proposal-details proposal-card proposal-quote-move-details divide-y divide-brand-purple/10 text-sm font-normal text-brand-purple">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:justify-between sm:gap-6">
          <dt className="text-brand-purple/75">{row.label}</dt>
          <dd className="sm:text-right">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TermsClauseList({
  clauses,
  showIntro = false,
}: {
  clauses: readonly OfficeTermsClause[];
  showIntro?: boolean;
}) {
  return (
    <div className="mt-6 space-y-5 sm:space-y-6">
      {showIntro ? (
        <p className="text-sm leading-relaxed text-brand-purple/80 sm:text-base">{officeTermsIntro}</p>
      ) : null}
      <ol className="space-y-5 sm:space-y-6">
        {clauses.map((clause) => (
          <li
            key={clause.number}
            className="border-t border-brand-purple/12 pt-5 first:border-t-0 first:pt-0"
          >
            <h3 className="font-heading text-sm font-bold text-brand-purple sm:text-base">
              {clause.number}. {clause.title}
            </h3>
            <div className="mt-2 space-y-2">
              {clause.paragraphs[0] ? (
                <p className="text-sm leading-relaxed text-brand-purple/80 sm:text-base">
                  {clause.paragraphs[0]}
                </p>
              ) : null}
              {clause.bullets ? (
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-brand-purple/80 sm:text-base">
                  {clause.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {clause.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-brand-purple/80 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

type Props = {
  quote: HouseMoveQuote;
};

export function OfficeMoveDeck({ quote }: Props) {
  const projectTitle =
    quote.projectTitle ?? (quote.clientName ? `${quote.clientName} office relocation` : "Office relocation");
  const timeline = quoteTimelineSteps(quote);
  const scopeNotes = quote.notes?.filter((n) => n.trim()) ?? [];
  const showScopeNotes = hasNotes(quote);

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
          Fixed-price labour across five days. Crew size steps up for pack-out and set-down, then scales back
          for final handover.
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
          Occupied offices, tight lift access, and silent pods all need a crew that knows the rules and
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

      {/* 7 - Fixed price quote */}
      <DeckSlide id="pricing" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Your quote</DeckEyebrow>
        <DeckTitle className="mt-3">Fixed price labour</DeckTitle>
        <DeckRule />
        <DeckLead>
          Labour for days 1 to 4 and truck callouts are a fixed price for the scope, access, and timeline
          described in this proposal. Day 5 is charged only if needed. Materials are charged for what is
          actually used at the unit rates shown.
        </DeckLead>
        <div className="proposal-card mt-6 px-5 py-4 text-sm text-brand-purple sm:text-base">
          <p className="font-heading text-xs font-bold uppercase tracking-wide text-brand-purple/70">
            Fixed price (labour days 1 to 4 + trucks)
          </p>
          <p className="mt-2 font-heading text-xl text-brand-purple sm:text-2xl">
            {formatNzd(fixedLabourAndTrucksExclGst(quote))} excl. GST ·{" "}
            {formatNzd(fixedLabourAndTrucksExclGst(quote) * 1.15)} incl. GST
          </p>
        </div>
        <div id="quote" className="proposal-quote-block mt-6 text-sm font-normal text-brand-purple">
          <QuoteMoveDetails quote={quote} />
          <QuoteTable quote={quote} />
          {quote.pricingNotes?.filter((n) => n.trim()).map((note) => (
            <p key={note} className="mt-3 text-sm leading-relaxed text-brand-purple/75">
              {note}
            </p>
          ))}
          {quote.validFor ? (
            <p className="mt-3 text-brand-purple/75">Valid for {quote.validFor} from the quote date above.</p>
          ) : null}
        </div>
      </DeckSlide>

      {/* 8 - Credentials */}
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

      {/* 9 - Contact */}
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

      {/* 10 - Terms (1 to 5) */}
      <DeckSlide id="terms-1" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Terms &amp; conditions</DeckEyebrow>
        <DeckTitle className="mt-4">Commercial relocation terms</DeckTitle>
        <DeckRule />
        <TermsClauseList clauses={officeTermsClauseGroups[0]} showIntro />
      </DeckSlide>

      {/* 11 - Terms (6 to 10) */}
      <DeckSlide id="terms-2" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Terms &amp; conditions</DeckEyebrow>
        <DeckTitle className="mt-4">Commercial relocation terms (continued)</DeckTitle>
        <DeckRule />
        <TermsClauseList clauses={officeTermsClauseGroups[1]} />
      </DeckSlide>

      {/* 12 - Terms (11 to 15) */}
      <DeckSlide id="terms-3" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Terms &amp; conditions</DeckEyebrow>
        <DeckTitle className="mt-4">Commercial relocation terms (continued)</DeckTitle>
        <DeckRule />
        <TermsClauseList clauses={officeTermsClauseGroups[2]} />
      </DeckSlide>
    </div>
  );
}
