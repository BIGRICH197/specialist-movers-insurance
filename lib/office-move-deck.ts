/** Static copy for office / commercial relocation proposals */

export const officeAboutParagraphs = [
  "We're Auckland's premium moving company. Twenty staff, five trucks, one depot in Glenfield. We handle office relocations, commercial fit-outs, house moves, and piano moves every week.",
  "We're not the cheapest. We're the careful ones. On office jobs we protect workstations, pods, and IT gear, and we pace the work to your building rules.",
  "We dismantle, wrap, transport, and reassemble on site. Your team gets a clear timeline, a fixed price, and a crew that turns up in uniform with the right materials.",
] as const;

export const officeStats = [
  { value: "80+", label: "moves per month" },
  { value: "100+", label: "piano moves per month" },
  { value: "20", label: "staff" },
  { value: "5 stars", label: "on Google" },
] as const;

export const officeHealthSafetyPoints = [
  {
    title: "SiteWise Gold",
    body: "Health and safety prequalification in place. We follow your induction, sign-in, and PPE rules on every commercial site.",
  },
  {
    title: "Building access",
    body: "Lift bookings, parking, and truck staging are built into the plan. We work with building managers and your facilities team.",
  },
  {
    title: "Careful handling",
    body: "Silent pods are dismantled and reassembled by the silent pod company. We move them only. Workstations, modular furniture, and fragile equipment are wrapped, protected, and handled with care. Nothing rushed.",
  },
] as const;

export const officeCredentials = [
  {
    title: "Public liability",
    body: "$2,000,000 public liability insurance in place. This covers third-party injury or property damage caused by us. It is not cover for your goods in transit.",
  },
  {
    title: "Your goods",
    body: "All goods are moved at the owner's risk under the Contract and Commercial Law Act 2017. As a commercial client, arrange goods-in-transit or contents cover before the move proceeds.",
  },
  {
    title: "Health & safety",
    body: "SiteWise Gold certified. We refuse to handle items that are unsafe or insufficiently packaged, and we plan extra resources for heavy items when needed.",
  },
] as const;

export const officeContacts = [
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
] as const;

export type OfficeTermsClause = {
  number: number;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export const officeTermsIntro =
  "These terms apply to commercial and business relocations carried out by Specialist Movers (KB Logistics Limited) and form part of the quote to which they are attached. They differ from, and prevail over, our residential moving terms for this engagement.";

export const officeTermsClauses: readonly OfficeTermsClause[] = [
  {
    number: 1,
    title: "Application & business use",
    paragraphs: [
      "The Client is acquiring these services for the purposes of a business. To the extent permitted by law, and in accordance with section 43 of the Consumer Guarantees Act 1993, the parties agree that the Consumer Guarantees Act 1993 does not apply to this engagement. Nothing in these terms is intended to contract out of any rights that cannot lawfully be excluded.",
    ],
  },
  {
    number: 2,
    title: "Fixed price & scope",
    paragraphs: [
      "The price quoted is a fixed price for labour on days 1 to 4, truck callouts, access conditions and the timeline set out in the quote, based on information supplied by the Client. Day 5 labour is charged only if required for finish and handover, at the rate shown. Materials are charged at the unit rates listed for quantities actually used.",
    ],
  },
  {
    number: 3,
    title: "Variations & additional work",
    paragraphs: [
      "Where actual conditions differ materially from those described, including greater volume, additional items or services, access, parking or lift availability not as described, or work outside the listed scope, Specialist Movers may adjust the price. Additional labour beyond the quoted days is charged at $480 + GST per hour for the crew of 8, pro-rata. Variations will be agreed in writing where practicable before the additional work is undertaken.",
    ],
  },
  {
    number: 4,
    title: "Delays outside our control",
    paragraphs: [
      "All work is carried out on a best-endeavours basis. Specialist Movers is not liable for any loss (direct or indirect, including business interruption) arising from delays caused by factors outside our reasonable control, including but not limited to:",
      "Where such factors extend the job, additional time may be charged in accordance with clause 3.",
    ],
    bullets: [
      "Traffic, weather, or road conditions",
      "Building, landlord or body-corporate access restrictions and approvals",
      "Lift availability, booking limits, or breakdown",
      "Security, induction or sign-in procedures",
      "Parking restrictions or unavailability",
      "Acts or omissions of third-party contractors, or the Client's site not being ready",
    ],
  },
  {
    number: 5,
    title: "Client responsibilities",
    paragraphs: [
      "The Client is responsible for arranging and confirming site access, parking, lift bookings, building permits and any certificates of insurance required by the building; for backing up all data before the move; and for disconnecting and reconnecting IT, AV and network equipment unless this is expressly contracted to Specialist Movers. Items that cannot be safely lifted or carried by two movers (recommended maximum 80 kg) must be disclosed before the move so additional resources can be arranged, which may incur an additional charge.",
    ],
  },
  {
    number: 6,
    title: "Goods at owner's risk, insurance & public liability",
    paragraphs: [
      "All goods are transported at the owner's risk in accordance with the Contract and Commercial Law Act 2017. The price does not include any insurance or transit cover for the goods. Specialist Movers will pay no compensation if goods are lost or damaged unless we intentionally lose or damage them.",
      "Accordingly, the Client is required to arrange adequate goods-in-transit or contents insurance for the move, or to request a quote through our insurance broker, before the move proceeds. By proceeding without such cover, the Client acknowledges and accepts that the move is carried out entirely at the owner's risk.",
      "Specialist Movers holds $2,000,000 public liability insurance. This covers liability for third-party bodily injury or property damage caused by our operations; it does not insure the Client's goods while in transit, which remain at the owner's risk as set out above.",
    ],
  },
  {
    number: 7,
    title: "Electronics, IT & whiteware",
    paragraphs: [
      "While reasonable care is taken, Specialist Movers cannot be held responsible for electronic or IT equipment that ceases to work following a move. We recommend the Client back up all data and arrange the handling of servers and other critical or high-value electronics. We are not plumbing or electrical specialists; where requested to connect or disconnect appliances we do so without responsibility for subsequent leaks, faults or failures.",
    ],
  },
  {
    number: 8,
    title: "Furniture, pods & reassembly",
    paragraphs: [
      "Workstations and modular furniture are dismantled and reassembled on a best-endeavours basis. Silent pods are dismantled and reassembled by the silent pod company; Specialist Movers move them only.",
      "Specialist Movers is not liable for failure of fixings or fittings, for pre-existing wear or weakness, or for items not designed to be repeatedly dismantled and reassembled.",
    ],
  },
  {
    number: 9,
    title: "Fragile, pre-packed & client-packed items",
    paragraphs: [
      "Packing is undertaken on a best-endeavours basis and does not guarantee against damage or loss. Specialist Movers accepts no liability for breakage, cracking, chipping or internal damage to fragile or delicate items, nor for the contents of sealed cartons or concealed damage not visible at delivery. Items with pre-existing damage, and any items packed by the Client, are transported entirely at the Client's risk.",
    ],
  },
  {
    number: 10,
    title: "Excluded items",
    paragraphs: [
      "Cash, important documents, high-value, irreplaceable or sentimental items, and perishable, flammable, hazardous or dangerous goods must not be transported by Specialist Movers and remain the sole responsibility of the Client. If carried at the Client's request, this is done entirely at the Client's risk.",
    ],
  },
  {
    number: 11,
    title: "Health & safety",
    paragraphs: [
      "Specialist Movers is SiteWise Gold certified and works to strict health and safety practice. Specialist Movers reserves the right to refuse to handle any item that is unsafe to transport or insufficiently packaged, or to require additional resources for heavy items.",
    ],
  },
  {
    number: 12,
    title: "Notification of damage",
    paragraphs: [
      "Any claim that Specialist Movers is responsible for damage must be notified to us in writing within 24 hours of the incident so the circumstances can be assessed. Claims made after this period will not be considered.",
    ],
  },
  {
    number: 13,
    title: "Cancellation",
    paragraphs: [
      "Cancellation within five (5) business days of the scheduled start date incurs a fee of 20% of the quoted total. Cancellation within 24 hours of the scheduled start incurs a fee of 50% of the quoted total, reflecting committed crew, trucks and materials.",
    ],
  },
  {
    number: 14,
    title: "Payment",
    paragraphs: [
      "A deposit of 50% of the quoted total is payable to confirm and lock in the dates. The balance is due within seven (7) days of completion. Overdue accounts incur a $49 admin fee after 14 days; after 30 days the account may be referred for debt collection, with all recovery costs payable by the Client.",
    ],
  },
  {
    number: 15,
    title: "Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by law, Specialist Movers' total liability arising out of or in connection with this engagement is limited to the value of the services provided, and Specialist Movers is not liable for any indirect or consequential loss, including loss of profit, revenue or business interruption.",
    ],
  },
] as const;

export const officeTermsClauseGroups = [
  officeTermsClauses.slice(0, 5),
  officeTermsClauses.slice(5, 10),
  officeTermsClauses.slice(10, 15),
] as const;
