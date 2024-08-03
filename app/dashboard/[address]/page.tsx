import { Search } from "@/components/widget/search"
import { PortfolioOverview } from "@/components/widget/overview"
import { Performance } from "@/components/widget/performance"
import { TradingMetrics } from "@/components/widget/metrics"
import { TransactionSummary } from "@/components/widget/transaction"
import { GradientAreaChart } from "@/components/widget/area"

export default function Address({ params }: { params: { address: string } }) {
  return (
    <main className="flex flex-col gap-5 items-center max-w-[calc(100vw-32px)] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto my-10">
      <Search className="max-w-full" defaultValue={params.address} />

      <section className="grid sm:grid-cols-2 gap-5 w-full">
        <PortfolioOverview />
        <Performance />
        <TradingMetrics />
        <TransactionSummary />
      </section>

      <section className="w-full">
        <GradientAreaChart />
      </section>
    </main>
  )
}
