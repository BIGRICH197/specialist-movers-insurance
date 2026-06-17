/** Client quote data — filled from Xero */

export type MoveAddress = {
  line1?: string;
  suburb: string;
  postcode?: string;
  access?: string;
};

export type QuoteLineItem = {
  description: string;
  /** Line amount excl. GST (as on Xero quote) */
  amountExclGst: number;
  /** For hourly lines — show "3.5 hrs × $180/hr" under the description (proposal table only) */
  hours?: number;
  hourlyRateExclGst?: number;
  /** Xero-style table: quantity and unit price excl. GST */
  quantity?: number;
  unitPriceExclGst?: number;
};

export type QuoteTableFormat = "proposal" | "xero";

export type HouseMoveQuote = {
  clientName: string;
  /** Date the quote was issued (shown left column). From Xero quote date. */
  quoteDate?: string;
  /** proposal = description + total; xero = qty, unit price, amount like Xero PDF */
  quoteTable?: QuoteTableFormat;
  pickup: MoveAddress;
  delivery: MoveAddress;
  moveDate?: string;
  dates?: {
    pack?: string;
    uplift?: string;
    delivery?: string;
  };
  lineItems: QuoteLineItem[];
  /** Tick these add-on ids even if line items do not match (packing, cleaning, etc.) */
  includedAddOns?: string[];
  /** Force unticked even if a line item would match */
  excludedAddOns?: string[];
  notes?: string[];
  validFor?: string;
};

export function formatNzd(amount: number): string {
  const hasCents = Math.round(amount * 100) % 100 !== 0;
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

const GST_RATE = 0.15;

export function quoteSubtotalExclGst(quote: HouseMoveQuote): number {
  return quote.lineItems.reduce((sum, item) => sum + item.amountExclGst, 0);
}

export function quoteGstAmount(quote: HouseMoveQuote): number {
  return quoteSubtotalExclGst(quote) * GST_RATE;
}

export function quoteTotalInclGst(quote: HouseMoveQuote): number {
  return quoteSubtotalExclGst(quote) * (1 + GST_RATE);
}

export function formatAddress(addr: MoveAddress): string {
  const suburbPart = `${addr.suburb}${addr.postcode ? ` ${addr.postcode}` : ""}`;
  if (addr.line1) return [addr.line1, suburbPart].join(", ");
  return suburbPart;
}

export function hasNotes(quote: HouseMoveQuote): boolean {
  return Boolean(quote.notes?.some((n) => n.trim()));
}

export function formatHourlyCalc(item: QuoteLineItem): string | null {
  if (item.hours == null || item.hourlyRateExclGst == null) return null;
  const hrs = Number.isInteger(item.hours) ? String(item.hours) : String(item.hours);
  return `${hrs} hrs × ${formatNzd(item.hourlyRateExclGst)}/hr`;
}

export function usesXeroQuoteTable(quote: HouseMoveQuote): boolean {
  if (quote.quoteTable === "xero") return true;
  if (quote.quoteTable === "proposal") return false;
  return quote.lineItems.some(
    (item) => item.quantity != null && item.unitPriceExclGst != null,
  );
}

export function formatQuoteQuantity(qty: number): string {
  return qty.toLocaleString("en-NZ", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
