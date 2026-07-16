import { ConceptInteriorsDeck } from "@/components/concept-interiors/ConceptInteriorsDeck";
import { InsuranceDeck } from "@/components/insurance/InsuranceDeck";
import { OfficeMoveDeck } from "@/components/office-move/OfficeMoveDeck";
import { PianoDeck } from "@/components/piano/PianoDeck";
import { RetirementDeck } from "@/components/retirement/RetirementDeck";
import { SimonJamesDeck } from "@/components/simon-james/SimonJamesDeck";
import { loadSiteProposal } from "@/lib/load-proposal";
import {
  isConceptInteriorsProposalSite,
  isOfficeProposalSite,
  isPianoProposalSite,
  isRetirementProposalSite,
  isSimonJamesProposalSite,
} from "@/lib/proposal-site";

export async function generateMetadata() {
  if (isConceptInteriorsProposalSite()) {
    return {
      title: "Concept Interiors - commercial interiors proposal",
      robots: { index: false, follow: false },
    };
  }
  if (isSimonJamesProposalSite()) {
    return {
      title: "Simon James — furniture delivery proposal",
      robots: { index: false, follow: false },
    };
  }
  if (isPianoProposalSite()) {
    return {
      title: "Piano move proposal",
      robots: { index: false, follow: false },
    };
  }
  if (isRetirementProposalSite()) {
    return {
      title: "Retirement village move proposal",
      robots: { index: false, follow: false },
    };
  }
  if (isOfficeProposalSite()) {
    return {
      title: "Office move proposal",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: "Insurance partners - Contents moves proposal",
    robots: { index: false, follow: false },
  };
}

function MissingProposalMessage({ slug }: { slug: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8 text-brand-purple">
      <p>No proposal loaded. Edit data/proposals/{slug}.json</p>
    </div>
  );
}

export default async function Page() {
  if (isConceptInteriorsProposalSite()) {
    return <ConceptInteriorsDeck />;
  }

  if (isSimonJamesProposalSite()) {
    return <SimonJamesDeck />;
  }

  if (isPianoProposalSite()) {
    return <PianoDeck />;
  }

  if (isRetirementProposalSite()) {
    return <RetirementDeck />;
  }

  if (isOfficeProposalSite()) {
    const quote = await loadSiteProposal();
    if (!quote) return <MissingProposalMessage slug="current" />;
    return <OfficeMoveDeck quote={quote} />;
  }

  return <InsuranceDeck />;
}
