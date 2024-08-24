import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ROI() {
  return (
    <Card className="aspect-square">
      <CardHeader>
        <CardTitle>ROI</CardTitle>
      </CardHeader>
      <CardContent>
        Line Chart
      </CardContent>
      <CardFooter>
        Some roi over time
      </CardFooter>
    </Card>
  )
}