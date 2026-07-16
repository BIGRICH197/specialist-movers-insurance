/** Which proposal the root `/` route serves. Set per Vercel project. */
export type ProposalSite =
  | "insurance"
  | "office"
  | "retirement"
  | "piano"
  | "simon-james"
  | "concept-interiors";

export function getProposalSite(): ProposalSite {
  const site = process.env.PROPOSAL_SITE;
  if (site === "office") return "office";
  if (site === "retirement") return "retirement";
  if (site === "piano") return "piano";
  if (site === "simon-james") return "simon-james";
  if (site === "concept-interiors") return "concept-interiors";
  return "insurance";
}

export function isOfficeProposalSite(): boolean {
  return getProposalSite() === "office";
}

export function isRetirementProposalSite(): boolean {
  return getProposalSite() === "retirement";
}

export function isPianoProposalSite(): boolean {
  return getProposalSite() === "piano";
}

export function isSimonJamesProposalSite(): boolean {
  return getProposalSite() === "simon-james";
}

export function isConceptInteriorsProposalSite(): boolean {
  return getProposalSite() === "concept-interiors";
}

/** JSON slug for the active site proposal (office and retirement only). */
export function siteProposalSlug(): string {
  if (isRetirementProposalSite()) return "retirement-current";
  return "current";
}
