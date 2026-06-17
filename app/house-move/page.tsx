import { HouseMoveDeck } from "@/components/house-move/HouseMoveDeck";
import { loadProposal } from "@/lib/load-proposal";

export const metadata = {
  title: "House move proposal",
  robots: { index: false, follow: false },
};

export default async function HouseMovePage() {
  const quote = await loadProposal("current");
  if (!quote) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-8 text-brand-purple">
        <p>No proposal loaded. Edit data/proposals/current.json</p>
      </div>
    );
  }

  return <HouseMoveDeck quote={quote} />;
}
