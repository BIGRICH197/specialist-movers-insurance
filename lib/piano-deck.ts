/** Static copy for Specialist Piano Movers proposals */

export const pianoProposalDate = "June 2026";

export const pianoCover = {
  title: "Piano moving",
  preparedBy: "Richard Boote, Director",
} as const;

export const pianoAboutParagraphs = [
  "We're Auckland's dedicated piano moving team. Part of Specialist Movers, with our own piano truck and crew who move uprights and grands every day.",
  "We're not the cheapest. We're the ones Steinway and every major Auckland music store trust. Hundreds of 5-star reviews. Care, skill, and the right equipment on every job.",
  "From a single room reposition to a full house move with a grand piano, your quote sets out the price upfront. Two movers as standard. Extra crew and gear when stairs or tight access need it.",
] as const;

export const pianoStats = [
  { value: "100+", label: "pianos monthly" },
  { value: "5 stars", label: "on Google" },
  { value: "Steinway", label: "approved mover" },
  { value: "SiteWise Gold", label: "certified" },
] as const;

export const pianoServices = [
  {
    title: "Upright pianos",
    body: "Standard uprights moved door to door. We wrap, skid, and secure for transport. Ground floor or stairs quoted upfront.",
  },
  {
    title: "Grand pianos",
    body: "Grands up to 6 ft dismantled, wrapped, and moved on our piano truck. Legs and lyre removed and reattached with care.",
  },
  {
    title: "Room to room",
    body: "Same property repositioning. We protect floors and doorways and place the piano where you need it.",
  },
  {
    title: "House moves with piano",
    body: "Piano as part of a residential move. We coordinate with the house crew so the piano is handled by our piano specialists.",
  },
  {
    title: "Music stores and venues",
    body: "Deliveries for retailers, schools, churches, and concert venues. We work to your timing and access rules.",
  },
  {
    title: "Storage handovers",
    body: "Move in or out of storage. We can coordinate with your storage provider and confirm access before the day.",
  },
] as const;

export const pianoProcessSteps = [
  {
    step: "01",
    title: "Quote",
    body: "We confirm piano type, pickup and delivery addresses, stairs, and access from your details or a quick site check.",
  },
  {
    step: "02",
    title: "Book",
    body: "You get a written quote with the move date locked in. We schedule our dedicated piano crew and truck.",
  },
  {
    step: "03",
    title: "Move day",
    body: "Crew arrive in uniform with blankets, skids, and straps. Grands are dismantled safely, wrapped, and secured for transport.",
  },
  {
    step: "04",
    title: "Placement",
    body: "We set the piano in position, reassemble grands, polish your piano, and walk through with you before we leave.",
  },
] as const;

export const pianoInclusions = [
  {
    title: "Wrapping and protection",
    body: "Moving blankets and wrap for the piano. Keyboard cover and padding on grands. Floor and wall protection where needed. We polish your piano after delivery so it looks its best in the new spot.",
  },
  {
    title: "Equipment",
    body: "Piano skids, straps, and our dedicated piano truck. Grand leg and lyre removal and reassembly included on quoted grands.",
  },
  {
    title: "Trained crew",
    body: "Two movers as standard on every piano job. Patrick, Manaia, and Poetolu are our dedicated piano truck crew.",
  },
  {
    title: "Clear pricing",
    body: "Fixed price per piano type for standard access. Stairs and difficult access quoted as add-ons before you book.",
  },
] as const;

export const pianoHealthSafetyPoints = [
  {
    title: "Weight and balance",
    body: "Pianos are heavy and top-heavy. We use proper lifting technique, enough crew for stairs, and never rush a carry.",
  },
  {
    title: "Access checks",
    body: "Stairs, turns, and door widths are confirmed at quote stage. We bring extra gear or crew when the job needs it.",
  },
  {
    title: "SiteWise Gold",
    body: "Health and safety prequalification in place. Uniformed crews, documented procedures, and respect for your home or venue.",
  },
] as const;

export const pianoCredentials = [
  {
    title: "Trusted locally",
    body: "Hundreds of 5-star Google reviews. Preferred mover for Steinway and Auckland's major music retailers.",
  },
  {
    title: "Public liability",
    body: "$2,000,000 public liability insurance in place. This covers third-party injury or property damage caused by us.",
  },
  {
    title: "Goods in transit",
    body: "Transit cover for your piano is available through our insurance broker. Ask us for a quote before move day if you want cover.",
  },
] as const;

export const pianoContacts = [
  {
    role: "Quotes & viewings",
    name: "Richard Boote",
    phone: "021 228 2279",
    email: "richard@specialistmovers.co.nz",
  },
  {
    role: "Bookings & scheduling",
    name: "Danielle Maritz",
    phone: "021 228 2728",
    email: "danielle@specialistmovers.co.nz",
  },
] as const;

export const pianoContactLead =
  "Call or email for a fixed-price quote. We confirm piano type, access, and stairs before anything is booked.";

export const pianoEstimatesFootnote =
  "All prices exclude GST unless noted. Final quotes confirmed from your job details or a free access check. Stairs and tight access may add crew or equipment.";

/** Standard off-site piano moves (2 movers, excl. GST) */
export const pianoMoveRates = [
  { service: "Upright piano (local move)", rate: "$290" },
  { service: "Grand piano up to 6 ft (local move)", rate: "$550" },
  { service: "Stair charge (per set of stairs)", rate: "+$80" },
] as const;

/** Same-property repositioning (2 movers, excl. GST) */
export const pianoSameHouseRates = [
  { service: "Upright (same house)", rate: "$200" },
  { service: "Grand piano (same house)", rate: "$400" },
] as const;

export const pianoPricingNote =
  "Local move = pickup and delivery within the Auckland region. Each way is quoted separately for storage or multi-leg jobs. Grands over 6 ft need a site check before we confirm price.";
