import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PnL() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Reapsed PNL: 41.1K</p>
        <p>Unreapsed PNL: -76.2K</p>
        <p>Total PNL: -35.2K</p>
      </CardContent>
      <CardFooter>
        Waterfall chart
      </CardFooter>
    </Card>
  )
}