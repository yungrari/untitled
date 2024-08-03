import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Performance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Reapsed PNL: 41.1K</p>
        <p>Unreapsed PNL: -76.2K</p>
        <p>Total PNL: -35.2K</p>
        <p>ROI: -5.298078341657263%</p>
      </CardContent>
      <CardFooter>
        Waterfall chart showing how Reapsed and Unreapsed PNL contribute to Total PNL | 
        Gauge chart for ROI | 
        Line chart showing PNL over time (if historical data is available)
      </CardFooter>
    </Card>
  )
}