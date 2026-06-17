# House move proposal — step-by-step workflow

Turn a **Xero quote** into a branded **client PDF** using this repo. Xero holds the numbers. The deck is what you send the client.

**Project folder:** `C:\Users\richa\Desktop\specialist-movers-simon-james`  
**Live preview:** http://localhost:3055/house-move  
**Compare examples:** http://localhost:3055/house-move/compare

---

## What you need before you start

| Item | Where |
|------|--------|
| Xero quote (PDF or open in Xero) | Numbers, client name, quote date |
| Move details | Move date, pickup, drop off (from email, HubSpot, or Xero Reference) |
| This repo running locally | `npm install` once, then `npm run dev` or `npm run build` + `npm run start` |

**Send the client:** PDF from `/house-move` (deck).  
**Do not rely on:** Xero custom DOCX PDF for the full sales proposal (see `docs/xero-house-move-quote-docx.md` if you still want a Xero template).

---

## Quick checklist

1. Create or open the quote in **Xero** (line items excl. GST).
2. Update **`data/proposals/current.json`** from the quote (by hand or with Claude).
3. Open **http://localhost:3055/house-move** and check layout.
4. Export PDF: **`scripts\export-house-move-pdf.ps1`** or browser Print → Save as PDF.
5. Email the **deck PDF** to the client (draft only — human sends).

---

## Step 1 — Quote in Xero

1. Build the quote in Xero as usual (KB Logistics Limited).
2. Line amounts are **excl. GST**. The deck adds GST 15% in the totals.
3. Fill **Reference** with move summary if you can, e.g. `Sat 7 Jun | Kohimarama → Remuera` (helps your notes; deck uses JSON fields for display).
4. Approve when ready. Draft quotes show as DRAFT on some exports.

**Typical line items (house move):**

| Xero description | Notes |
|------------------|--------|
| `Call Out Fee` | Fixed |
| `1 Hours Labour - 3 Movers` | Qty = hours, unit = hourly rate |
| `Fuel Surcharge` | Fixed |
| Packing lines | Triggers **packing** add-on tick |
| Exit clean lines | Triggers **cleaning** add-on tick |

---

## Step 2 — Update `current.json`

The page **`/house-move`** loads **`data/proposals/current.json`** only.

1. Copy `data/proposals/_template.json` if you are starting fresh.
2. Edit **`data/proposals/current.json`** (or ask Claude — see prompt at the end).

### Field map (Xero → JSON)

| JSON field | Source |
|------------|--------|
| `clientName` | Xero contact name |
| `quoteDate` | Xero quote date, e.g. `10 June 2026` |
| `moveDate` | Job date, e.g. `Saturday 7 June 2026` |
| `pickup.suburb` | Pickup suburb (add `line1`, `access` if needed) |
| `delivery.suburb` | Drop off suburb |
| `lineItems[].description` | Same wording as Xero (or clearer short label) |
| `lineItems[].amountExclGst` | Xero line amount excl. GST |
| `lineItems[].hours` | For hourly labour (proposal table shows `3.5 hrs × $180/hr`) |
| `lineItems[].hourlyRateExclGst` | Hourly rate excl. GST |
| `lineItems[].quantity` | Xero qty (for xero-style table) |
| `lineItems[].unitPriceExclGst` | Xero unit price (for xero-style table) |
| `validFor` | e.g. `14 days` (optional) |
| `notes` | Extra bullets for page 2 (optional, usually empty) |

### Example — simple move (Tom)

See `data/proposals/tom.json`:

```json
{
  "clientName": "Tom",
  "quoteDate": "10 June 2026",
  "pickup": { "suburb": "Kohimarama" },
  "delivery": { "suburb": "Remuera" },
  "moveDate": "Saturday 7 June 2026",
  "lineItems": [
    {
      "description": "3 movers — Kohimarama to Remuera",
      "hours": 3.5,
      "hourlyRateExclGst": 180,
      "amountExclGst": 630
    },
    { "description": "Call out fee", "amountExclGst": 80 },
    { "description": "Fuel surcharge", "amountExclGst": 25 }
  ],
  "notes": [],
  "validFor": ""
}
```

### Quote table format

| `quoteTable` | When to use | Table columns |
|--------------|-------------|----------------|
| `"proposal"` (default) | Most house moves | Description, Excl. GST (hourly subline if `hours` set) |
| `"xero"` | Match Xero PDF exactly | Description, Qty, Unit price, Amount |

Set `"quoteTable": "xero"` and include `quantity` + `unitPriceExclGst` on each line. Examples: `tom-xero.json`, `falko-packing-xero.json`.

If you omit `quoteTable` but every line has `quantity` and `unitPriceExclGst`, the deck auto-uses the xero table.

---

## Step 3 — Add-on tick boxes

The purple **Add-ons** panel lists five services. **Ticked = included on this quote.**

### Auto-tick (from line descriptions)

| Add-on id | Ticks when line text contains |
|-----------|-------------------------------|
| `packing` | packing, packer, unpacking, packed |
| `cleaning` | cleaning, clean, tenancy clean, exit clean |
| `insurance` | insurance, transit cover, transit insurance |
| `storage` | storage, in transit, overnight storage |
| `specialist` | piano, commercial, spa pool, specialist move, hard-to-shift |

Example: `example-with-cleaning.json` ticks cleaning. `falko-packing.json` ticks packing.

### Manual override

```json
"includedAddOns": ["packing", "cleaning"],
"excludedAddOns": []
```

- **`includedAddOns`** — tick even if no matching line item.
- **`excludedAddOns`** — untick even if a line would match.

---

## Step 4 — Preview locally

```powershell
cd C:\Users\richa\Desktop\specialist-movers-simon-james
npm run dev
```

Open **http://localhost:3055/house-move**.

Check:

- [ ] Client name and quote date
- [ ] Move date, pickup, drop off
- [ ] Line items and totals (excl. → GST → incl.)
- [ ] Add-on ticks correct
- [ ] Page breaks look OK (print preview: Ctrl+P)

**Compare page:** http://localhost:3055/house-move/compare (all saved examples stacked).

**Other JSON files** (`tom.json`, `falko-packing.json`, etc.) are references only unless you copy them to `current.json` or change `app/house-move/page.tsx` to load another slug.

---

## Step 5 — Export PDF

### Option A — Script (recommended)

Server must be running on port **3055** (`npm run dev` or `npm run start`).

```powershell
cd C:\Users\richa\Desktop\specialist-movers-simon-james
powershell -File scripts\export-house-move-pdf.ps1
```

Default output: `C:\Users\richa\Downloads\Tom-house-move-proposal.pdf`

Custom name:

```powershell
powershell -File scripts\export-house-move-pdf.ps1 -Out "$env:USERPROFILE\Downloads\Smith-house-move-proposal.pdf"
```

### Option B — Browser

1. Open http://localhost:3055/house-move  
2. **Ctrl+P** → Save as PDF  
3. Turn on **Background graphics**

**PDF layout:** Page 1 = branding, photo, inclusions, add-ons. Page 2 = quote table (full width), next steps, Google badge.

---

## Step 6 — Send to client

1. Attach the **deck PDF** (not the raw Xero PDF unless they ask for it).
2. **Draft only** — Richard or Taine approves and sends (no bulk send).
3. Sign-off in email: **Cheers,** (Gmail adds the signature).

---

## Saving a copy per client

| Approach | How |
|----------|-----|
| One-off | Only edit `current.json` |
| Keep a record | Save `data/proposals/smith-june.json`, copy into `current.json` when needed |
| Git | Commit `data/proposals/*.json` when you want history (no secrets in JSON) |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Page blank or broken | Delete `.next`, run `npm run build`, restart server |
| Port 3055 in use | Stop old Node process, `npm run start` again |
| Totals wrong | Line amounts must be **excl. GST**; deck adds 15% |
| Add-on not ticked | Add keyword to line description, or set `includedAddOns` |
| PDF cuts off | Re-export after latest `deck.css` print rules; use the script |
| Long quote (10+ lines) | May spill to page 3; normal for packing jobs |

---

## Prompt for Claude (copy-paste)

Use with this repo open and attach the Xero quote PDF:

```
Read docs/house-move-workflow.md and data/proposals/_template.json.

Update data/proposals/current.json from the attached Xero quote:
- clientName, quoteDate, moveDate, pickup, delivery from the quote and context
- lineItems: description and amountExclGst from each Xero line (excl. GST)
- For hourly labour: set hours and hourlyRateExclGst
- For packing/cleaning jobs with many lines: use quoteTable "xero" with quantity and unitPriceExclGst
- includedAddOns / excludedAddOns only if auto-tick from line text is wrong

Do not send any email. Tell me the preview URL and the export command when done.
```

---

## Related files

| File | Purpose |
|------|---------|
| `data/proposals/current.json` | Active proposal (what `/house-move` shows) |
| `data/proposals/_template.json` | Empty schema |
| `lib/house-move-quote.ts` | Types and GST helpers |
| `lib/house-move-addons.ts` | Add-on tick logic |
| `lib/house-move-inclusions.ts` | What's included copy |
| `scripts/export-house-move-pdf.ps1` | PDF export |
| `docs/xero-house-move-quote-docx.md` | Optional Xero Word template (not the client PDF) |
