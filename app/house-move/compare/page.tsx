import { HouseMoveDeck } from "@/components/house-move/HouseMoveDeck";
import { loadProposal } from "@/lib/load-proposal";

export const metadata = {
  title: "Compare proposals",
  robots: { index: false, follow: false },
};

export default async function CompareProposalsPage() {
  const [tom, falko, withCleaning, tomXero, falkoXero] = await Promise.all([
    loadProposal("tom"),
    loadProposal("falko-packing"),
    loadProposal("example-with-cleaning"),
    loadProposal("tom-xero"),
    loadProposal("falko-packing-xero"),
  ]);

  return (
    <div className="proposal-compare bg-[#d9d3de] py-8 sm:py-12">
      {tom ? (
        <section className="proposal-compare-block">
          <p className="proposal-compare-label">Tom — simple house move (3 lines)</p>
          <HouseMoveDeck quote={tom} />
        </section>
      ) : null}

      {falko ? (
        <section className="proposal-compare-block mt-12 sm:mt-16">
          <p className="proposal-compare-label">Falko — packing quote (11 lines)</p>
          <HouseMoveDeck quote={falko} />
        </section>
      ) : null}

      {withCleaning ? (
        <section className="proposal-compare-block mt-12 sm:mt-16">
          <p className="proposal-compare-label">Sarah — move + exit cleaning (cleaning on quote)</p>
          <HouseMoveDeck quote={withCleaning} />
        </section>
      ) : null}

      {tomXero ? (
        <section className="proposal-compare-block mt-12 sm:mt-16">
          <p className="proposal-compare-label">Tom — Xero-style table (qty / unit price / amount)</p>
          <HouseMoveDeck quote={tomXero} />
        </section>
      ) : null}

      {falkoXero ? (
        <section className="proposal-compare-block mt-12 sm:mt-16">
          <p className="proposal-compare-label">Falko — Xero-style packing quote (same text as PDF)</p>
          <HouseMoveDeck quote={falkoXero} />
        </section>
      ) : null}
    </div>
  );
}
