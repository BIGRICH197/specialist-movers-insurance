/** Static copy for Simon James bespoke furniture delivery proposal */

export const simonJamesProposalDate = "May 2026";

export const simonJamesCover = {
  title: "Bespoke furniture delivery",
  client: "Simon James",
  preparedBy: "Richard Boote, Director",
} as const;

export const simonJamesAboutParagraphs = [
  "We're Auckland's premium furniture and piano moving company. Three years operating, twenty staff, five trucks, one depot in Glenfield.",
  "We're not the cheapest. We're the careful ones. Trusted by Steinway and every major Auckland music store for piano moves. Hundreds of 5-star reviews from house moves, exit cleans, and commercial deliveries.",
  "When something matters, bespoke furniture, a grand piano, a family heirloom, we're who Aucklanders call.",
] as const;

export const simonJamesPillars = [
  {
    title: "Care",
    body: "We handle every piece like it's our own. Blanket-wrapped. Dust-covered. Placed exactly where you want it.",
  },
  {
    title: "Reliability",
    body: "Confirmed windows within two hours. The team turns up, on time, prepared. No \"between 9 and 5\" wait.",
  },
  {
    title: "Simplicity",
    body: "One price covers collection, careful handling, delivery, placement, and rubbish removal. No surprise add-ons.",
  },
] as const;

export const simonJamesPillarsFootnote = "Not the cheapest. The best." as const;

export const simonJamesStats = [
  { value: "100+", label: "piano moves monthly" },
  { value: "80+", label: "house moves monthly" },
  { value: "20+", label: "commercial weekly" },
  { value: "3 years", label: "trusted by Steinway" },
] as const;

export const simonJamesExperienceLead =
  "Our team has handled everything from Steinway grand pianos to bespoke 9-foot dining tables. We know how to wrap, lift, walk, and place high-value furniture without damage.";

export const simonJamesZonesLead =
  "Five zones radiating out from your Eden Terrace warehouse.";

export const simonJamesZonesFootnote =
  "Zones defined by drive time and access from your Eden Terrace warehouse. Full zone definitions on the rate card.";

export const simonJamesDeliveryPricingIntro =
  "Every delivery includes collection, careful handling, delivery, placement, and rubbish removal.";

export const simonJamesDeliveryRates = [
  {
    zone: "A — Inner Auckland",
    base: "$210",
    perM3: "+$40",
    over8: "No cap",
  },
  {
    zone: "B — Wider Metro",
    base: "$280",
    perM3: "+$40",
    over8: "No cap",
  },
  {
    zone: "C — Outer Auckland",
    base: "$420",
    perM3: "+$40",
    over8: "Quote per job",
  },
  {
    zone: "D — Mangawhai / Waikato",
    base: "$700",
    perM3: "+$40",
    over8: "Quote per job",
  },
  {
    zone: "E — Far Afield",
    base: "Quote per job",
    perM3: "—",
    over8: "—",
  },
] as const;

export const simonJamesDeliveryFootnote =
  "Prices exclude GST. Two-mover crew included. Base covers up to 2 m³ or 1 oversize item. Multi-stop runs priced as separate deliveries.";

export const simonJamesWarehouseIntro =
  "For stock transfers between your Rosebank Road warehouse and Eden Terrace, we charge hourly. Same-day freight, no install or rubbish, just careful, fast movement between sites.";

export const simonJamesWarehouseRates = [
  { label: "Call-out (2 movers)", value: "$60 + GST" },
  { label: "Hourly rate (2 movers)", value: "$140 per hour + GST" },
  { label: "Minimum charge", value: "1 hour" },
] as const;

export const simonJamesWarehouseFootnote =
  "Two-mover crew included. Auckland local only.";

export const simonJamesContacts = [
  {
    role: "Bookings & quotes",
    name: "Danielle Maritz",
    phone: "021 228 2728",
    email: "danielle@specialistmovers.co.nz",
  },
  {
    role: "Operations & on-the-day",
    name: "Matthew Kitney",
    phone: null,
    email: "matthew@specialistmovers.co.nz",
  },
  {
    role: "Anything else / account",
    name: "Richard Boote",
    phone: "021 228 2279",
    email: "richard@specialistmovers.co.nz",
  },
] as const;
