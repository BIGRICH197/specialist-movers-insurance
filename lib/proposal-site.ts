/** Which proposal the root `/` route serves. Set on the office Vercel project only. */
export function isOfficeProposalSite(): boolean {
  return process.env.PROPOSAL_SITE === "office";
}
