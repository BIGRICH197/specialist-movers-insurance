import { HouseMoveDeck } from "@/components/house-move/HouseMoveDeck";
import { loadProposal } from "@/lib/load-proposal";
import { isOfficeProposal, isRetirementProposal } from "@/lib/house-move-quote";
import { redirect } from "next/navigation";

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

  if (isOfficeProposal(quote)) {
    redirect("/office-move");
  }

  if (isRetirementProposal(quote)) {
    redirect("/retirement");
  }

  return <HouseMoveDeck quote={quote} />;
}
