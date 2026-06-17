/** Static copy for house move proposals */

export const moveProcessSteps = [
  {
    step: "01",
    title: "Free viewing",
    body: "We visit your home, check access and volume, and talk through timing before we confirm your quote.",
  },
  {
    step: "02",
    title: "Clear quote and plan",
    body: "You get a written price and timeline. Packing, cleaning, and storage can be included if you need them.",
  },
  {
    step: "03",
    title: "Move day",
    body: "Your Team Leader introduces the crew, protects furniture, and loads the truck with care.",
  },
  {
    step: "04",
    title: "Delivery and final check",
    body: "We unload at your new place and walk through everything with you before we leave.",
  },
] as const;

export const whyUsPoints = [
  {
    title: "Care over speed",
    body: "Blankets, wrap, and the right crew for stairs and tight access.",
  },
  {
    title: "Clear quotes",
    body: "Labour, transport, and add-ons set out upfront. No surprises on the invoice.",
  },
  {
    title: "Licensed crews",
    body: "Uniformed teams, seven days a week, SiteWise Gold certified.",
  },
  {
    title: "Door to door",
    body: "We do not hand your load to a third party.",
  },
] as const;

export const companyContact = {
  phone: "0508 MOVERS",
  mobile: "(021) 228 2728",
  email: "danielle@specialistmovers.co.nz",
  web: "specialistmovers.co.nz",
  address: "186 Target Road, Glenfield, Auckland",
} as const;
