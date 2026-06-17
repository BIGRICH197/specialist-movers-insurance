# Specialist Movers proposals

Proposal decks for insurance partners, office relocations, and residential house moves.

| Route | Audience |
|-------|----------|
| `/` on **insurance** Vercel | Insurance partners deck |
| `/` on **office** Vercel | Office / commercial proposal (`data/proposals/current.json`) |
| `/house-move` | House move proposal (local / same repo) |
| `/office-move` | Office proposal preview (local dev) |

Send a Xero quote PDF and ask to update `current.json`. Office jobs: open the **office** Vercel URL, then print to PDF.

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

Two projects, same GitHub repo:

| Vercel project | URL | Env var |
|----------------|-----|---------|
| **specialist-movers-insurance** | https://specialist-movers-insurance.vercel.app | *(none)* |
| **specialist-movers-office** | https://specialist-movers-office.vercel.app | `PROPOSAL_SITE=office` |

Import **specialist-movers-insurance** from GitHub for the insurance deck. Create **specialist-movers-office**, import the same repo, add `PROPOSAL_SITE` = `office` in Production environment variables, then deploy.
