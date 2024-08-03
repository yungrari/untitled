import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TransactionSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Inflow: $2.6M</p>
        <p>Total Outflow: $2.3M</p>
        <p>Total Transactions: 18</p>
        <p>Buys: 8</p>
        <p>Sells: 10</p>
      </CardContent>
      <CardFooter>
        Sankey diagram showing flow from Inflow to Outflow | 
        Stacked bar chart for Buys vs Sells | 
        Bubble chart where size represents transaction value and color represents buy/sell
      </CardFooter>
    </Card>
  )
}