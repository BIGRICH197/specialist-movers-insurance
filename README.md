# Specialist Movers proposals

Proposal decks for insurance partners and residential house moves.

| Route | Audience |
|-------|----------|
| `/` | Insurance partners |
| `/house-move` | House move proposal (from `data/proposals/current.json`) |
| `/office-move` | Office / commercial proposal (same JSON when `proposalType` is `office`) |

Send a Xero quote PDF and ask to update `current.json`. Open `/house-move`, then print to PDF.

**Step-by-step guide:** [docs/house-move-workflow.md](docs/house-move-workflow.md)

## Local

```bash
npm install
npm run dev
```

→ http://localhost:3055

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

New project → import **specialist-movers-insurance** → default Next.js build.
