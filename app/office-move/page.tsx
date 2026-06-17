import { OfficeMoveDeck } from "@/components/office-move/OfficeMoveDeck";
import { loadProposal } from "@/lib/load-proposal";

export const metadata = {
  title: "Office move proposal",
  robots: { index: false, follow: false },
};

export default async function OfficeMovePage() {
  const quote = await loadProposal("current");
  if (!quote) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-8 text-brand-purple">
        <p>No proposal loaded. Edit data/proposals/current.json</p>
      </div>
    );
  }

  return <OfficeMoveDeck quote={quote} />;
}
