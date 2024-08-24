import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TransactionSummary() {
  return (
    <Card className="aspect-square">
      <CardHeader>
        <CardTitle>Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Inflow: $2.6M</p>
        <p>Total Outflow: $2.3M</p>
      </CardContent>
      <CardFooter>
        ?
      </CardFooter>
    </Card>
  )
}