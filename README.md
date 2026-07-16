# Specialist Movers proposals

Proposal decks for insurance partners, Concept Interiors, office relocations, retirement village moves, and residential house moves.

| Route | Audience |
|-------|----------|
| `/` on **insurance** Vercel | Insurance partners deck |
| `/` on **concept-interiors** Vercel | Concept Interiors commercial deck |
| `/` on **office** Vercel | Office / commercial proposal (`data/proposals/current.json`) |
| `/` on **retirement** Vercel | Retirement village partner deck (static) |
| `/retirement` | Per-resident quote preview (`data/proposals/retirement-current.json`) |
| `/concept-interiors` | Local preview of Concept Interiors deck |

Send a Xero quote PDF and ask to update the JSON for the relevant site. Then open the Vercel URL and print to PDF.

**Step-by-step guide:** [docs/house-move-workflow.md](docs/house-move-workflow.md)

## Local

```bash
npm install
npm run dev
```

→ http://localhost:3055

Preview routes:

- http://localhost:3055/concept-interiors
- http://localhost:3055/retirement
- http://localhost:3055/office-move
- http://localhost:3055/house-move

## GitHub

Create repo: **specialist-movers-insurance**

Then from this folder:

```powershell
git init -b main
git add .
git commit -m "Insurance partners proposal deck"
git remote add origin https://github.com/BIGRICH197/specialist-movers-insurance.git
git push -u origin main
```

## Vercel

Multiple projects, same GitHub repo:

| Vercel project | URL | Env var |
|----------------|-----|---------|
| **specialist-movers-insurance** | https://specialist-movers-insurance.vercel.app | *(none)* |
| **specialist-movers-concept-interiors** | *(create new)* | `PROPOSAL_SITE=concept-interiors` |
| **specialist-movers-office** | https://specialist-movers-office.vercel.app | `PROPOSAL_SITE=office` |
| **specialist-movers-retirement** | *(create)* | `PROPOSAL_SITE=retirement` |

Import **specialist-movers-insurance** from GitHub for the insurance deck. Create a **new** Vercel project for Concept Interiors (do not overwrite insurance or office), import the same repo, set Production env `PROPOSAL_SITE=concept-interiors`, then deploy.

### Concept Interiors

Static partner deck (like insurance). Edit copy and rates in `lib/concept-interiors-deck.ts`. Local preview: `/concept-interiors`.

### Retirement village proposals

The **retirement** Vercel site serves a static partner deck (like insurance). Edit copy in `lib/retirement-deck.ts`.

For a priced resident move, edit `data/proposals/retirement-current.json` and preview at `/retirement`.
