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
  formatAddress,
  hasNotes,
  usesXeroQuoteTable,
  type HouseMoveQuote,
} from "@/lib/house-move-quote";
import {
  retirementAboutParagraphs,
  retirementContactLead,
  retirementContacts,
  retirementCredentials,
  retirementHealthSafetyPoints,
  retirementInclusions,
  retirementProcessSteps,
  retirementServices,
  retirementStats,
} from "@/lib/retirement-deck";
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

  if (quote.moveDate) rows.push({ label: "Overview", value: quote.moveDate });
  if (quote.dates?.pack) rows.push({ label: "Pack date", value: quote.dates.pack });
  if (quote.dates?.uplift) rows.push({ label: "Uplift date", value: quote.dates.uplift });
  if (quote.dates?.delivery) rows.push({ label: "Delivery date", value: quote.dates.delivery });
  if (quote.pickup.suburb) rows.push({ label: "From", value: formatPickupDelivery(quote.pickup) });
  if (quote.delivery.suburb) rows.push({ label: "To", value: formatPickupDelivery(quote.delivery) });

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

type Props = {
  quote: HouseMoveQuote;
};

export function RetirementMoveDeck({ quote }: Props) {
  const projectTitle =
    quote.projectTitle ??
    (quote.clientName ? `${quote.clientName} — moving & packing` : "Moving & packing services");
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
          {quote.clientName && quote.contactName !== quote.clientName ? (
            <p className="mt-2 text-sm text-white/70">{quote.clientName}</p>
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
        <DeckTitle className="mt-4">Careful moves for retirement villages</DeckTitle>
        <DeckRule />
        <HeroVisual
          photoSrc={sitePhotos.houseMove}
          photoAlt="Specialist Movers crew wrapping furniture with care"
          aspectClassName="aspect-[16/9] min-h-[12rem] sm:aspect-[16/9] sm:min-h-[16rem]"
          imageObjectPosition="center 35%"
          className="mt-8 w-full"
        />
        <div className="deck-stack-tight mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          {retirementAboutParagraphs.map((para) => (
            <DeckLead key={para.slice(0, 24)}>{para}</DeckLead>
          ))}
        </div>
      </DeckSlide>

      {/* 3 - Experience */}
      <DeckSlide id="experience" tone="light" scrollable>
        <DeckEyebrow>Experience</DeckEyebrow>
        <DeckTitle className="mt-4">Trusted for sensitive moves</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {retirementStats.map((s) => (
            <li key={s.label} className="border-t border-brand-purple/15 pt-6">
              <p className="font-heading text-3xl font-bold text-brand-purple sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-purple/65">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.packing}
          alt="Specialist Movers packing team in a kitchen"
          aspect="wide"
          className="deck-experience-photo"
          overlay={false}
        />
      </DeckSlide>

      {/* 4 - Services */}
      <DeckSlide id="services" tone="purple" scrollable>
        <DeckEyebrow tone="purple">What we offer</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Moving and packing for villages
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">
          One crew, one plan. Downsizing, room moves, packing, and set-up tailored to your village and
          residents.
        </DeckLead>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {retirementServices.map((service) => (
            <li
              key={service.title}
              className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5"
            >
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base">{service.body}</p>
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 5 - Process */}
      <DeckSlide id="process" tone="light" scrollable>
        <DeckEyebrow>How it works</DeckEyebrow>
        <DeckTitle className="mt-4">From viewing to handover</DeckTitle>
        <DeckRule />
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {retirementProcessSteps.map((item) => (
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

      {/* 6 - Scope */}
      <DeckSlide id="scope" tone="purple" scrollable>
        <DeckEyebrow tone="purple">This move</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Scope and access
        </DeckTitle>
        <DeckRule tone="purple" />
        {quote.moveDate ? <DeckLead tone="purple">{quote.moveDate}</DeckLead> : null}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {quote.pickup.suburb ? (
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">From</p>
              <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base">
                {formatSiteAccess(quote, "pickup")}
              </p>
            </div>
          ) : null}
          {quote.delivery.suburb ? (
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">To</p>
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

      {/* 7 - What's included */}
      <DeckSlide id="included" tone="light" scrollable>
        <DeckEyebrow>Standards</DeckEyebrow>
        <DeckTitle className="mt-4">What&apos;s included</DeckTitle>
        <DeckRule />
        <ul className="mt-4 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {retirementInclusions.map((item) => (
            <li key={item.title} className="border-t border-brand-purple/15 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-purple/80 sm:text-base">{item.body}</p>
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 8 - Health & safety */}
      <DeckSlide id="health-safety" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Health &amp; safety</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Built for occupied buildings
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">
          Villages are busy, lived-in places. We plan access, protect common areas, and work at a pace that
          suits residents and staff.
        </DeckLead>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {retirementHealthSafetyPoints.map((p) => (
            <li key={p.title} className="border-t border-white/20 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/88 sm:text-base">{p.body}</p>
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 9 - Quote */}
      <DeckSlide id="pricing" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Your quote</DeckEyebrow>
        <DeckTitle className="mt-3">Pricing</DeckTitle>
        <DeckRule />
        <div id="quote" className="proposal-quote-block mt-6 text-sm font-normal text-brand-purple">
          <QuoteMoveDetails quote={quote} />
          {quote.lineItems.length > 0 ? (
            <>
              <h3 className="sr-only">
                {usesXeroQuoteTable(quote) ? "Price estimate" : "Cost of your move"}
              </h3>
              <QuoteTable quote={quote} />
            </>
          ) : null}
          {quote.pricingNotes?.map((note) => (
            <p key={note} className="mt-3 text-brand-purple/75">
              {note}
            </p>
          ))}
          {quote.validFor ? (
            <p className="mt-4 text-brand-purple/75">Valid for {quote.validFor} from the quote date above.</p>
          ) : null}
        </div>
      </DeckSlide>

      {/* 10 - Credentials */}
      <DeckSlide id="credentials" tone="light" scrollable>
        <DeckEyebrow>Credentials</DeckEyebrow>
        <DeckTitle className="mt-4">Insurance and trust</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {retirementCredentials.map((p) => (
            <li key={p.title} className="border-t border-brand-purple/15 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-purple/80 sm:text-base">{p.body}</p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.aboutTeam}
          alt="Specialist Movers team in uniform with company trucks"
          aspect="wide"
          className="mt-8 w-full"
          overlay={false}
        />
      </DeckSlide>

      {/* 11 - Contact */}
      <DeckSlide id="contact" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Contact</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Lock in your dates
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">{retirementContactLead}</DeckLead>
        <div className="deck-contact-grid mt-6 lg:grid lg:grid-cols-2 lg:gap-10">
          <SitePhoto
            src={sitePhotos.premiumService}
            alt="Specialist Movers service"
            aspect="wide"
            className="deck-contact-photo border-white/15"
            overlay={false}
          />
          <div className="deck-contact-list mt-6 flex flex-col gap-5 sm:gap-6 lg:mt-0">
            {retirementContacts.map((c) => (
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
