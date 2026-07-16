/** Copy for Concept Interiors commercial / fit-out proposal deck */

export const conceptInteriorsProposalDate = "July 2026";

export const conceptInteriorsCover = {
  title: "Commercial interiors & contents moves",
  client: "Concept Interiors",
  preparedBy: "Richard Boote, Director",
} as const;

export const aboutParagraphs = [
  "We're Auckland's premium moving company. Twenty staff, five trucks, one depot in Glenfield. We handle house moves, piano moves, packing, storage, and commercial interiors work every week.",
  "We're not the cheapest. We're the careful ones. On your sites we represent Concept Interiors and the end client. We turn up in uniform, on time, with the right gear and the right attitude.",
  "Interiors teams call us when furniture and contents need to clear a room for works, shift within a property, go off site, or come back again. We already support builders, fit-out crews, and property managers across Auckland. We'd like to work with you too.",
] as const;

export const stats = [
  { value: "30+", label: "pianos per week" },
  { value: "20+", label: "house moves per week" },
  { value: "15+", label: "commercial jobs per week" },
  { value: "5 stars", label: "on Google" },
] as const;

export const healthSafetyPoints = [
  {
    title: "Site rules",
    body: "We follow your sign-in process, PPE requirements, and any site manager or client instructions. No shortcuts.",
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

export const processSteps = [
  { step: "01", title: "Sign in", body: "We complete your site register or check-in before any work starts." },
  { step: "02", title: "Pre-start / risk report", body: "Hazards noted, approach agreed, and any site-specific rules confirmed." },
  { step: "03", title: "Pre-photos", body: "Condition recorded before items are touched or moved." },
  { step: "04", title: "Wrap belongings", body: "Blankets, shrink wrap, and edge protection as needed for the item and the route." },
  { step: "05", title: "Move items", body: "Careful handling to the new room, garage, truck, or storage." },
  { step: "06", title: "Post-photos", body: "Final placement and condition documented for your project file." },
  { step: "07", title: "Sign out", body: "Site register completed and handover to your site contact if required." },
] as const;

export const commercialPartners = [
  "IAG",
  "Homehub",
  "Streamline",
  "Johns Lyng",
  "Scott Commercial",
  "TRSL",
  "Grayburn Property Services",
] as const;

export const hourlyRatesIntro =
  "Crew size sets the call-out and the hourly rate. All rates below exclude GST. A second truck is an extra $40 per hour on top of the crew rate.";

export const hourlyCrewRates = [
  { crew: "2 movers", callOut: "$60 + GST", hourly: "$140 per hour + GST" },
  { crew: "3 movers", callOut: "$80 + GST", hourly: "$200 per hour + GST" },
  { crew: "4 movers", callOut: "$100 + GST", hourly: "$260 per hour + GST" },
] as const;

export const secondTruckNote = "Second truck: +$40 per hour + GST.";

export const fridgeMoveNote =
  "Fridge-only moves are $220 + GST. Double-door fridges with stairs need a third person for health and safety reasons.";

export const estimatesFootnote =
  "Estimates only. Final quotes confirmed prior to any job by free site visit or emailed job card and photos.";

export const packingStorageIntro =
  "We also offer packing, storage, and site cleaning, usually quoted per job. Below are typical estimates.";

export const siteCleaningIntro =
  "Fixed-price site cleans. Estimates below (+GST).";

export const siteCleaningPricing = [
  { size: "1 bedroom", rate: "$200" },
  { size: "2 bedroom", rate: "$300" },
  { size: "3 bedroom", rate: "$400" },
  { size: "4 bedroom", rate: "$500" },
] as const;

export const samePropertyPricing = [
  {
    scenario: "Standard (2 movers, 2 visits · 2-hour minimum each)",
    price: "$680 + GST",
  },
  {
    scenario: "With double-door fridge (3 movers, 2 visits · 2-hour minimum each)",
    price: "$960 + GST",
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
