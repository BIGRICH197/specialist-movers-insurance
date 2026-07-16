import { PianoDeck } from "@/components/piano/PianoDeck";

export const metadata = {
  title: "Piano move proposal",
  robots: { index: false, follow: false },
};

export default function PianoPage() {
  return <PianoDeck />;
}
