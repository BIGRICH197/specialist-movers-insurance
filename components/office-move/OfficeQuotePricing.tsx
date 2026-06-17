import {
  formatNzd,
  formatQuoteQuantity,
  fixedLabourAndTrucksExclGst,
  type HouseMoveQuote,
  type QuoteLineItem,
} from "@/lib/house-move-quote";

const thClass = "px-3 py-2 text-left text-sm font-normal text-brand-purple sm:px-4";
const thRightClass = `${thClass} text-right`;
const tdClass = "px-3 py-2.5 text-sm font-normal text-brand-purple sm:px-4 sm:py-3";
const tdRightClass = `${tdClass} text-right tabular-nums`;

function isTruckCallout(description: string): boolean {
  const d = description.toLowerCase();
  return d.includes("callout") || d.includes("call out") || d.includes("call-out");
}

function isMaterialLine(item: QuoteLineItem): boolean {
  const d = item.description.toLowerCase();
  return !isTruckCallout(d) && !/^day \d/.test(d);
}

function fixedLineItems(quote: HouseMoveQuote): QuoteLineItem[] {
  return quote.lineItems.filter((item) => !isMaterialLine(item));
}

function materialLineItems(quote: HouseMoveQuote): QuoteLineItem[] {
  return quote.lineItems.filter((item) => isMaterialLine(item));
}

function PricingSection({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="proposal-card overflow-hidden">
      <div className="border-b border-brand-purple/10 bg-brand-surface/60 px-4 py-3 sm:px-5">
        <h3 className="font-heading text-sm font-bold text-brand-purple sm:text-base">{title}</h3>
        {lead ? <p className="mt-1 text-sm leading-relaxed text-brand-purple/75">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}

function LineTable({ items, showAmount = true }: { items: QuoteLineItem[]; showAmount?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] text-sm font-normal">
        <thead>
          <tr className="border-b border-brand-purple/10">
            <th className={thClass}>Description</th>
            {showAmount ? (
              <>
                <th className={thRightClass}>Qty</th>
                <th className={thRightClass}>Unit price</th>
                <th className={thRightClass}>Amount</th>
              </>
            ) : (
              <th className={thRightClass}>Unit price (excl. GST)</th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const qty = item.quantity ?? 1;
            const unit = item.unitPriceExclGst ?? item.amountExclGst;
            return (
              <tr key={item.description} className="border-b border-brand-purple/8 last:border-0">
                <td className={`${tdClass} leading-snug`}>{item.description}</td>
                {showAmount ? (
                  <>
                    <td className={tdRightClass}>{formatQuoteQuantity(qty)}</td>
                    <td className={tdRightClass}>{formatNzd(unit)}</td>
                    <td className={tdRightClass}>{formatNzd(item.amountExclGst)}</td>
                  </>
                ) : (
                  <td className={tdRightClass}>{formatNzd(unit)}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function FixedTotals({ quote }: { quote: HouseMoveQuote }) {
  const subtotal = fixedLabourAndTrucksExclGst(quote);
  const gst = subtotal * 0.15;
  const total = subtotal + gst;
  const rowClass = "flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5";

  return (
    <div className="border-t border-brand-purple/10 text-sm font-normal text-brand-purple">
      <div className={rowClass}>
        <span>Subtotal (excl. GST)</span>
        <span className="tabular-nums">{formatNzd(subtotal)}</span>
      </div>
      <div className={rowClass}>
        <span>GST (15%)</span>
        <span className="tabular-nums">{formatNzd(gst)}</span>
      </div>
      <div
        className={`${rowClass} border-t border-brand-purple/10 bg-brand-surface/40 font-heading text-base sm:text-lg`}
      >
        <span>Fixed price total (incl. GST)</span>
        <span className="tabular-nums text-brand-purple">{formatNzd(total)}</span>
      </div>
    </div>
  );
}

export function OfficeQuotePricing({ quote }: { quote: HouseMoveQuote }) {
  const fixed = fixedLineItems(quote);
  const materials = materialLineItems(quote);

  return (
    <div className="space-y-5 sm:space-y-6">
      <PricingSection
        title="Fixed price"
        lead="All 5 days of labour and truck callouts. This is your fixed price for the move."
      >
        <LineTable items={fixed} />
        <FixedTotals quote={quote} />
      </PricingSection>

      {materials.length > 0 ? (
        <PricingSection
          title="Materials"
          lead="Unit rates below. You are charged only for what we actually use on the job."
        >
          <LineTable items={materials} showAmount={false} />
        </PricingSection>
      ) : null}
    </div>
  );
}
