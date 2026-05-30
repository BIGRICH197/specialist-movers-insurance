/** Copy for /insurance presentation deck */

export const aboutParagraphs = [
  "We're Auckland's premium moving company. Twenty staff, five trucks, one depot in Glenfield. We handle house moves, piano moves, packing, storage, and insurance claim work every week.",
  "We're not the cheapest. We're the careful ones. On claim sites we represent you and the policyholder. We turn up in uniform, on time, with the right gear and the right attitude.",
  "Insurance adjusters and builders call us when contents need to move within a home, off site for repairs, or back again. We already work with most of the major players in Auckland. We'd like to work with you too.",
] as const;

export const stats = [
  { value: "30+", label: "pianos per week" },
  { value: "20+", label: "house moves per week" },
  { value: "15+", label: "insurance jobs per week" },
  { value: "5 stars", label: "on Google" },
] as const;

export const healthSafetyPoints = [
  {
    title: "Site rules",
    body: "We follow your sign-in process, PPE requirements, and any builder or adjuster instructions. No shortcuts.",
  },
  {
    title: "Risk aware",
    body: "Pre-start checks, hazard identification, and safe lifting on every job. Stairs, tight access, and heavy items get the crew they need.",
  },
  {
    title: "Documented",
    body: "Pre- and post-move photos, sign-in and sign-out records, and clear notes for your file. You can see what we did and when.",
  },
] as const;

export const insuranceProcessSteps = [
  { step: "01", title: "Sign in", body: "We complete your site register or portal check-in before any work starts." },
  { step: "02", title: "Pre-start / risk report", body: "Hazards noted, approach agreed, and any site-specific rules confirmed." },
  { step: "03", title: "Pre-photos", body: "Condition recorded before items are touched or moved." },
  { step: "04", title: "Wrap belongings", body: "Blankets, shrink wrap, and edge protection as needed for the item and the route." },
  { step: "05", title: "Move items", body: "Careful handling to the new room, garage, truck, or storage." },
  { step: "06", title: "Post-photos", body: "Final placement and condition documented for your claim file." },
  { step: "07", title: "Sign out", body: "Site register completed and handover to adjuster or builder if required." },
] as const;

export const insurancePartners = [
  "IAG",
  "Homehub",
  "Streamline",
  "Johns Lyng",
  "Scott Commercial",
  "TRSL",
  "Grayburn Property Services",
] as const;

export const hourlyRatesIntro =
  "For items moved within the same property, we charge hourly. Most jobs need two visits, each with a two-hour minimum.";

export const hourlyRatesTwoMovers = [
  { label: "Call-out (2 movers)", value: "$80 + GST" },
  { label: "Hourly rate (2 movers)", value: "$160 per hour + GST" },
  { label: "Minimum", value: "2 hours per visit" },
] as const;

export const fridgeMoveNote =
  "Fridge-only moves are $220 + GST. Double-door fridges with stairs need a third person for health and safety reasons.";

export const estimatesFootnote =
  "Estimates only. Final quotes confirmed prior to any job by free site visit or emailed job card and photos.";

export const packingStorageIntro =
  "We also offer packing, storage, and site cleaning, usually quoted per job. Below are typical estimates.";

export const siteCleaningIntro =
  "Fixed-price site cleans for claim properties. Estimates below (+GST).";

export const siteCleaningPricing = [
  { size: "1 bedroom", rate: "$200" },
  { size: "2 bedroom", rate: "$300" },
  { size: "3 bedroom", rate: "$400" },
  { size: "4 bedroom", rate: "$500" },
] as const;

export const samePropertyPricing = [
  {
    scenario: "Standard (2 movers, 2 visits · 2-hour minimum each)",
    price: "$800 + GST",
  },
  {
    scenario: "With double-door fridge (3 movers, 2 visits · 2-hour minimum each)",
    price: "$1,080 + GST",
  },
] as const;

export const offSitePricing = [
  { scenario: "1–2 bedroom", price: "$1,440 + GST + storage" },
  { scenario: "3–4 bedroom", price: "$2,400 + GST + storage" },
] as const;

export const packingOffSitePricing = [
  { scenario: "1–2 bedroom", price: "$2,880 + GST + storage" },
  { scenario: "3–4 bedroom", price: "$4,280 + GST + storage" },
] as const;

export const packingFootnote =
  "Contents vary massively from property to property. A site visit is preferred before we confirm a packing quote.";

export const pianoPricing = [
  { service: "Upright (same house)", rate: "$200" },
  { service: "Upright (off site)", rate: "$290 each way" },
  { service: "Grand piano (same house)", rate: "$400" },
  { service: "Grand piano (up to 6 ft, off site)", rate: "$550 each way" },
  { service: "Piano stair charge", rate: "$100" },
] as const;

export const storagePricing = [
  { size: "1–2 bedroom", rate: "$100" },
  { size: "3 bedroom", rate: "$150" },
  { size: "4 bedroom", rate: "$200" },
] as const;

export const contacts = [
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
