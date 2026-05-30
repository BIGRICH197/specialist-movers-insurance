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
  aboutParagraphs,
  contacts,
  estimatesFootnote,
  fridgeMoveNote,
  healthSafetyPoints,
  hourlyRatesIntro,
  hourlyRatesTwoMovers,
  insurancePartners,
  insuranceProcessSteps,
  offSitePricing,
  packingFootnote,
  packingOffSitePricing,
  packingStorageIntro,
  pianoPricing,
  samePropertyPricing,
  siteCleaningIntro,
  siteCleaningPricing,
  stats,
  storagePricing,
} from "@/lib/insurance-deck";
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
                  }`}
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

export function InsuranceDeck() {
  return (
    <div className="deck-root bg-brand-canvas font-sans">
      {/* 1 - Cover */}
      <DeckSlide id="cover" tone="purple" innerClassName="justify-center gap-8">
        <div className="deck-cover-copy">
          <DeckBrandLogo onPurple />
          <div className="deck-eyebrow-wrap mt-6">
            <DeckEyebrow tone="purple">Proposal · May 2026</DeckEyebrow>
          </div>
          <DeckTitle tone="purple" as="h1" className="deck-cover-title mt-5">
            Insurance claims &amp; contents moves
          </DeckTitle>
          <p className="mt-3 font-heading text-base font-bold uppercase tracking-[0.2em] text-brand-yellow sm:text-lg">
            Prepared for insurance partners
          </p>
          <p className="mt-4 text-base text-white/75 sm:mt-6 sm:text-lg">Richard Boote, Director</p>
        </div>
        <HeroVisual
          photoSrc={sitePhotos.homeHero}
          photoAlt="Careful furniture move on an insurance claim"
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
          photoSrc={sitePhotos.aboutTeam}
          photoAlt="Specialist Movers team in uniform with company trucks"
          aspectClassName="aspect-[16/9] min-h-[12rem] sm:aspect-[16/9] sm:min-h-[16rem]"
          imageObjectPosition="center 35%"
          className="mt-8 w-full"
        />
        <div className="deck-stack-tight mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          {aboutParagraphs.map((para) => (
            <DeckLead key={para.slice(0, 24)}>{para}</DeckLead>
          ))}
        </div>
      </DeckSlide>

      {/* 3 - Experience */}
      <DeckSlide id="experience" tone="light" scrollable>
        <DeckEyebrow>Experience</DeckEyebrow>
        <DeckTitle className="mt-4">What we move every week</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <li key={s.label} className="border-t border-brand-purple/15 pt-6">
              <p className="font-heading text-3xl font-bold text-brand-purple sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-purple/65">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.houseMove}
          alt="Careful furniture move with wrapped items"
          aspect="wide"
          className="deck-experience-photo"
          overlay={false}
        />
      </DeckSlide>

      {/* 4 - Health & safety */}
      <DeckSlide id="health-safety" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Health &amp; safety</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          We understand claim sites
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">
          Active building sites, occupied homes, and time-sensitive claims all need the same thing: a crew
          that knows the rules and sticks to them.
        </DeckLead>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {healthSafetyPoints.map((p) => (
            <li key={p.title} className="border-t border-white/20 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/88 sm:text-base">{p.body}</p>
            </li>
          ))}
        </ul>
      </DeckSlide>

      {/* 5 - Insurance process */}
      <DeckSlide id="process" tone="light" scrollable>
        <DeckEyebrow>The process</DeckEyebrow>
        <DeckTitle className="mt-4">How we work on your claims</DeckTitle>
        <DeckRule />
        <DeckLead>
          Every job follows the same steps. You get consistency across adjusters, sites, and policyholders.
        </DeckLead>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {insuranceProcessSteps.map((item) => (
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

      {/* 6 - Partners */}
      <DeckSlide id="partners" tone="light" scrollable>
        <DeckEyebrow>Who we work with</DeckEyebrow>
        <DeckTitle className="mt-4">Trusted by leading insurers and assessors</DeckTitle>
        <DeckRule />
        <DeckLead>
          We already support a wide range of insurance and property partners across Auckland. We would
          welcome the chance to add your name to this list.
        </DeckLead>
        <ul className="deck-checklist mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {insurancePartners.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-lg border border-brand-purple/12 bg-white/95 px-4 py-3 text-base font-medium text-brand-purple shadow-sm"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
              {name}
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.commercialFitOut}
          alt="Specialist Movers crew on a commercial job site"
          aspect="wide"
          className="mt-8 w-full"
          overlay={false}
        />
      </DeckSlide>

      {/* 7 - Hourly & same property rates */}
      <DeckSlide id="pricing-hourly" tone="purple" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow tone="purple">Rates</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-3">
          Hourly charges &amp; same-property moves
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple" className="!text-sm sm:!text-base">
          {hourlyRatesIntro}
        </DeckLead>
        <PriceCard rows={hourlyRatesTwoMovers} />
        <p className="deck-footnote mt-4 text-sm leading-relaxed text-white/75 sm:mt-6">{fridgeMoveNote}</p>

        <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow sm:mt-10">
          Moving furniture · same property
        </h3>
        <PricingTable
          compact
          headers={["Scenario", "Estimate (+GST)"]}
          rows={samePropertyPricing.map((r) => [r.scenario, r.price])}
        />
        <p className="deck-footnote mt-3 text-xs leading-relaxed text-white/70 sm:mt-4 sm:text-sm">
          {estimatesFootnote}
        </p>
      </DeckSlide>

      {/* 8 - Off site, packing & storage */}
      <DeckSlide id="pricing-offsite" tone="light" scrollable>
        <DeckEyebrow>Packing &amp; storage</DeckEyebrow>
        <DeckTitle className="mt-4">Off site moves and full pack-outs</DeckTitle>
        <DeckRule />
        <DeckLead>{packingStorageIntro}</DeckLead>

        <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Moving furniture · off site &amp; return
        </h3>
        <PricingTable
          compact
          headers={["Property", "Estimate (+GST)"]}
          rows={offSitePricing.map((r) => [r.scenario, r.price])}
        />

        <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Packing, materials &amp; moving off site + return
        </h3>
        <PricingTable
          compact
          headers={["Property", "Estimate (+GST)"]}
          rows={packingOffSitePricing.map((r) => [r.scenario, r.price])}
        />
        <p className="deck-footnote mt-3 text-sm leading-relaxed text-brand-purple/65 sm:mt-4">
          {packingFootnote}
        </p>

        <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Storage · per week (cubic meterage)
        </h3>
        <PricingTable
          compact
          headers={["Property size", "Rate (+GST)"]}
          rows={storagePricing.map((r) => [r.size, r.rate])}
        />

        <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Site cleaning
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-purple/75">{siteCleaningIntro}</p>
        <PricingTable
          compact
          headers={["Property", "Estimate (+GST)"]}
          rows={siteCleaningPricing.map((r) => [r.size, r.rate])}
        />
        <p className="deck-footnote mt-4 text-sm leading-relaxed text-brand-purple/65 sm:mt-6">
          {estimatesFootnote}
        </p>
      </DeckSlide>

      {/* 9 - Pianos */}
      <DeckSlide id="pricing-specialist" tone="light" scrollable>
        <DeckEyebrow>Specialist items</DeckEyebrow>
        <DeckTitle className="mt-4">Pianos</DeckTitle>
        <DeckRule />
        <DeckLead>
          We move more pianos than anyone else in Auckland. Same care on claim sites as on concert hall
          deliveries.
        </DeckLead>

        <PricingTable
          headers={["Service", "Rate (+GST)"]}
          rows={pianoPricing.map((r) => [r.service, r.rate])}
        />

        <p className="deck-tagline mt-8 font-heading text-sm font-bold uppercase tracking-[0.15em] text-brand-purple sm:text-base">
          All rates excl. GST unless noted.
        </p>
      </DeckSlide>

      {/* 10 - Contact */}
      <DeckSlide id="contact" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Contact</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Talk to us
        </DeckTitle>
        <DeckRule tone="purple" />
        <div className="deck-contact-grid mt-6 lg:grid lg:grid-cols-2 lg:gap-10">
          <SitePhoto
            src={sitePhotos.premiumService}
            alt="Specialist Movers service"
            aspect="wide"
            className="deck-contact-photo border-white/15"
            overlay={false}
          />
          <div className="deck-contact-list mt-6 flex flex-col gap-5 sm:gap-6 lg:mt-0">
            {contacts.map((c) => (
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
