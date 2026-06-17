import { readFile } from "fs/promises";
import path from "path";
import type { HouseMoveQuote } from "@/lib/house-move-quote";

const proposalsDir = path.join(process.cwd(), "data", "proposals");

export async function loadProposal(slug: string): Promise<HouseMoveQuote | null> {
  const safe = slug.replace(/[^a-z0-9-]/gi, "");
  if (!safe) return null;

  try {
    const raw = await readFile(path.join(proposalsDir, `${safe}.json`), "utf8");
    return JSON.parse(raw) as HouseMoveQuote;
  } catch {
    return null;
  }
}
