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
        <CardTitle>Trading Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Average Buy Price: $11.74 µ</p>
        <p>Average Sell Price: $11.96 µ</p>
        <p>Total Bought: 221.8B</p>
        <p>Total Sold: 188.6B</p>
        <p>Profit Factor: 0.87</p>
      </CardContent>
      <CardFooter>
        Bar chart comparing Average Buy Price to Average Sell Price | 
        Donut chart representing Total Bought vs Total Sold | 
        Bullet chart for Profit Factor (with a target of 1.0 for break-even)
      </CardFooter>
    </Card>
  )
}