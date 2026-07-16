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
import { SimonJamesZoneMap } from "@/components/simon-james/SimonJamesZoneMap";
import { deckHero } from "@/lib/deck-hero";
import {
  simonJamesAboutParagraphs,
  simonJamesContacts,
  simonJamesCover,
  simonJamesDeliveryFootnote,
  simonJamesDeliveryPricingIntro,
  simonJamesDeliveryRates,
  simonJamesExperienceLead,
  simonJamesPillars,
  simonJamesPillarsFootnote,
  simonJamesProposalDate,
  simonJamesStats,
  simonJamesWarehouseFootnote,
  simonJamesWarehouseIntro,
  simonJamesWarehouseRates,
  simonJamesZonesFootnote,
  simonJamesZonesLead,
} from "@/lib/simon-james-deck";
import { sitePhotos } from "@/lib/site-photos";

function PricingTable({
  headers,
  rows,
  tone = "light",
}: {
  headers: string[];
  rows: string[][];
  tone?: "light" | "purple";
}) {
  const isPurple = tone === "purple";
  return (
    <div
      className={`deck-pricing-table-wrap mt-4 overflow-visible rounded-xl border shadow-sm sm:mt-6 ${
        isPurple ? "border-white/15 bg-white/10" : "border-brand-purple/15 bg-white"
      }`}
    >
      <table className="deck-pricing-table w-full border-collapse text-sm">
        <thead>
          <tr className={isPurple ? "border-b border-white/15 bg-white/5" : "border-b border-brand-purple/10 bg-brand-surface"}>
            {headers.map((h) => (
              <th
                key={h}
                className={`px-3 py-3 text-left font-heading text-[10px] font-bold uppercase tracking-wide sm:px-4 sm:text-xs ${
                  isPurple ? "text-brand-yellow" : "text-brand-purple"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className={isPurple ? "border-b border-white/10 last:border-0" : "border-b border-brand-purple/8 last:border-0"}>
              {row.map((cell, j) => (
                <td
                  key={`${row[0]}-${j}`}
                  className={`px-3 py-3 sm:px-4 ${
                    isPurple
                      ? j === 0
                        ? "font-medium text-white"
                        : "text-white/90"
                      : j === 0
                        ? "font-medium text-brand-purple"
                        : "text-brand-purple/80"
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

export function SimonJamesDeck() {
  return (
    <div className="deck-root bg-brand-canvas font-sans">
      {/* 1 — Cover */}
      <DeckSlide id="cover" tone="purple" innerClassName="justify-center gap-8">
        <div className="deck-cover-copy">
          <DeckBrandLogo onPurple />
          <div className="deck-eyebrow-wrap mt-6">
            <DeckEyebrow tone="purple">Proposal · {simonJamesProposalDate}</DeckEyebrow>
          </div>
          <DeckTitle tone="purple" as="h1" className="deck-cover-title mt-5">
            {simonJamesCover.title}
          </DeckTitle>
          <p className="mt-3 font-heading text-base font-bold uppercase tracking-[0.2em] text-brand-yellow sm:text-lg">
            Prepared for {simonJamesCover.client}
          </p>
          <p className="mt-4 text-base text-white/75 sm:mt-6 sm:text-lg">{simonJamesCover.preparedBy}</p>
        </div>
        <HeroVisual
          photoSrc={sitePhotos.aboutTeam}
          photoAlt="Specialist Movers team with branded trucks"
          overlayCaption={deckHero.photoTagline}
          imageObjectPosition="center 38%"
          priority
          className="deck-cover-photo hero-photo-ambient w-full"
        />
      </DeckSlide>

      {/* 2 — Who we are */}
      <DeckSlide id="about" tone="light" scrollable>
        <DeckEyebrow>Who we are</DeckEyebrow>
        <DeckTitle className="mt-4">Auckland&apos;s premium moving company</DeckTitle>
        <DeckRule />
        <HeroVisual
          photoSrc={sitePhotos.homeHero}
          photoAlt="Specialist Movers crew carrying a sofa while the client relaxes"
          aspectClassName="aspect-[16/9] min-h-[12rem] sm:aspect-[16/9] sm:min-h-[16rem]"
          imageObjectPosition="center 38%"
          className="mt-8 w-full"
        />
        <div className="deck-stack-tight mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          {simonJamesAboutParagraphs.map((para) => (
            <DeckLead key={para.slice(0, 24)}>{para}</DeckLead>
          ))}
        </div>
      </DeckSlide>

      {/* 3 — What we stand for */}
      <DeckSlide id="standards" tone="purple" scrollable>
        <DeckEyebrow tone="purple">What we stand for</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Three things every delivery gets
        </DeckTitle>
        <DeckRule tone="purple" />
        <ul className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {simonJamesPillars.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5"
            >
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-base">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold italic text-white/70 sm:mt-8">{simonJamesPillarsFootnote}</p>
      </DeckSlide>

      {/* 4 — Experience */}
      <DeckSlide id="experience" tone="light" scrollable>
        <DeckEyebrow>Experience</DeckEyebrow>
        <DeckTitle className="mt-4">What we move every month</DeckTitle>
        <DeckRule />
        <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 lg:grid-cols-4 lg:gap-8">
          {simonJamesStats.map((s) => (
            <li key={s.label} className="border-t border-brand-purple/15 pt-6">
              <p className="font-heading text-2xl font-bold leading-tight text-brand-purple sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase leading-snug tracking-wide text-brand-purple/65 sm:text-xs">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
        <SitePhoto
          src={sitePhotos.houseMove}
          alt="Specialist Movers crew carrying wrapped furniture with care"
          aspect="wide"
          className="deck-experience-photo"
          overlay={false}
        />
        <DeckLead className="mt-6 sm:mt-8">{simonJamesExperienceLead}</DeckLead>
      </DeckSlide>

      {/* 5 — Zones */}
      <DeckSlide id="zones" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Coverage</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Delivery zones, mapped for Simon James
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">{simonJamesZonesLead}</DeckLead>
        <SimonJamesZoneMap />
        <p className="mt-4 text-sm leading-relaxed text-white/70">{simonJamesZonesFootnote}</p>
      </DeckSlide>

      {/* 6 — Delivery pricing */}
      <DeckSlide id="pricing-delivery" tone="light" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow>Pricing</DeckEyebrow>
        <DeckTitle className="mt-3">Delivery, install, and rubbish</DeckTitle>
        <DeckRule />
        <DeckLead>{simonJamesDeliveryPricingIntro}</DeckLead>
        <PricingTable
          headers={["Zone", "Base (to 2 m³)", "Each m³ above 2", "Over 8 m³"]}
          rows={simonJamesDeliveryRates.map((r) => [r.zone, r.base, r.perM3, r.over8])}
        />
        <p className="mt-4 text-sm leading-relaxed text-brand-purple/75">{simonJamesDeliveryFootnote}</p>
      </DeckSlide>

      {/* 7 — Warehouse transfers */}
      <DeckSlide id="pricing-warehouse" tone="purple" scrollable innerClassName="!py-10 sm:!py-12">
        <DeckEyebrow tone="purple">Pricing</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-3">
          Warehouse to warehouse
        </DeckTitle>
        <DeckRule tone="purple" />
        <DeckLead tone="purple">{simonJamesWarehouseIntro}</DeckLead>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-sm">
          {simonJamesWarehouseRates.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-baseline justify-between gap-4 px-5 py-4 ${
                i > 0 ? "border-t border-white/15" : ""
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-white/75">
                {row.label}
              </span>
              <span className="font-heading text-base text-white sm:text-lg">{row.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/70">{simonJamesWarehouseFootnote}</p>
      </DeckSlide>

      {/* 8 — Contact */}
      <DeckSlide id="contact" tone="purple" scrollable>
        <DeckEyebrow tone="purple">Contact</DeckEyebrow>
        <DeckTitle tone="purple" className="mt-4">
          Let&apos;s get started
        </DeckTitle>
        <DeckRule tone="purple" />
        <div className="deck-contact-grid mt-6 lg:grid lg:grid-cols-2 lg:gap-10">
          <SitePhoto
            src={sitePhotos.premiumService}
            alt="Specialist Movers premium service"
            aspect="wide"
            className="deck-contact-photo border-white/15"
            overlay={false}
          />
          <div className="deck-contact-list mt-6 flex flex-col gap-5 sm:gap-6 lg:mt-0">
            {simonJamesContacts.map((c) => (
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
