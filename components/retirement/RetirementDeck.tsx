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
  retirementAboutParagraphs,
  retirementContactLead,
  retirementContacts,
  retirementCover,
  retirementCredentials,
  retirementEstimatesFootnote,
  retirementHealthSafetyPoints,
  retirementHourlyRates,
  retirementInclusions,
  retirementPackingNote,
  retirementPackingRates,
  retirementProcessSteps,
  retirementProposalDate,
  retirementServices,
  retirementStats,
} from "@/lib/retirement-deck";
import { sitePhotos } from "@/lib/site-photos";

function PricingTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="deck-pricing-table-wrap mt-4 rounded-xl border border-brand-purple/15 bg-white shadow-sm sm:mt-6">
      <table className="deck-pricing-table w-full text-sm">
        <thead>
          <tr className="border-b border-brand-purple/10 bg-brand-surface">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-heading text-xs font-bold uppercase tracking-wide text-brand-purple"
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
                  className={`px-4 py-3 ${j === 0 ? "font-medium text-brand-purple" : "text-brand-purple/80"}`}
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

export function RetirementDeck() {
  return (
    <div className="deck-root bg-brand-canvas font-sans">
      {/* 1 - Cover */}
      <DeckSlide id="cover" tone="purple" innerClassName="justify-center gap-8">
        <div className="deck-cover-copy">
          <DeckBrandLogo onPurple />
          <div className="deck-eyebrow-wrap mt-6">
            <DeckEyebrow tone="purple">Proposal · {retirementProposalDate}</DeckEyebrow>
          </div>
          <DeckTitle tone="purple" as="h1" className="deck-cover-title mt-5">
            {retirementCover.title}
          </DeckTitle>
          <p className="mt-4 text-base text-white/75 sm:mt-6 sm:text-lg">{retirementCover.preparedBy}</p>
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

      {/* 6 - What's included */}
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

      {/* 7 - Health & safety */}
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

      {/* 8 - Pricing */}
      <DeckSlide id="pricing" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Pricing guide</DeckEyebrow>
        <DeckTitle className="mt-3">Moving and packing rates</DeckTitle>
        <DeckRule />
        <DeckLead>All prices exclude GST. Resident moves are quoted after a viewing or from photos and a job card.</DeckLead>
        <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Hourly moving (2 movers + truck)
        </h3>
        <PriceCard rows={retirementHourlyRates} />
        <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-brand-purple">
          Full packing (estimates by home size)
        </h3>
        <PricingTable
          headers={["Home size", "Estimate"]}
          rows={retirementPackingRates.map((r) => [r.size, r.rate])}
        />
        <p className="mt-4 text-sm leading-relaxed text-brand-purple/75">{retirementPackingNote}</p>
        <p className="mt-4 text-sm leading-relaxed text-brand-purple/75">{retirementEstimatesFootnote}</p>
      </DeckSlide>

      {/* 9 - Credentials */}
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

      {/* 10 - Contact */}
      <DeckSlide id="contact" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Contact</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Get in touch
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
