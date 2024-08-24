import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TradingMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profit Factor</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-8xl font-bold leading-none tracking-tighter">0.87</p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 text-xs mt-auto">
        <p>Average Buy Price: $11.74 µ</p>
        <p>Average Sell Price: $11.96 µ</p>
        <p>Total Bought: 221.8B</p>
        <p>Total Sold: 188.6B</p>
      </CardFooter>
    </Card>
  )
}