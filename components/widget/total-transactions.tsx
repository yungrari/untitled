import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TotalTransactions() {
  return (
    <Card className="aspect-square">
      <CardHeader>
        <CardTitle>Total Transactions</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-7xl font-bold tracking-tight">18</p>
      </CardContent>

      <CardFooter className="mt-auto">
        <p>Buys: 8</p>
        <p>Sells: 10</p>
      </CardFooter>
    </Card>
  )
}