import { SearchForm } from "@/components/widget/search-form"
import { TransactionSummary } from "@/components/widget/transaction-summary"
import { TotalTransactions } from "@/components/widget/total-transactions"
import { PnL } from "@/components/widget/pnl"
import { AssetAlocation } from "@/components/widget/asset-alocation"
import { TradingMetrics } from "@/components/widget/metrics"
import { ROI } from "@/components/widget/roi"
import { GradientAreaChart } from "@/components/widget/area"

export default function Address({ params }: { params: { address: string } }) {
  return (
    <main className="flex flex-col gap-5 max-w-[calc(100vw-16px)] mx-auto my-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <section className="w-full">
        <SearchForm className="max-w-full" defaultAddress={params.address} />
      </section>

      <section className="w-full grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ROI />
        <PnL />
        <TotalTransactions />
        <TransactionSummary />
        <TradingMetrics />
        <AssetAlocation />
      </section>

      <section className="w-full">
        <GradientAreaChart />
      </section>
    </main>
  )
}
