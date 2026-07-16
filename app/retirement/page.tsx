import { RetirementMoveDeck } from "@/components/retirement/RetirementMoveDeck";
import { loadProposal } from "@/lib/load-proposal";

export const metadata = {
  title: "Retirement village move proposal",
  robots: { index: false, follow: false },
};

export default async function RetirementPage() {
  const quote = await loadProposal("retirement-current");
  if (!quote) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-8 text-brand-purple">
        <p>No proposal loaded. Edit data/proposals/retirement-current.json</p>
      </div>
    );
  }

  return <RetirementMoveDeck quote={quote} />;
}
