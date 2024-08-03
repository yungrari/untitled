import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PortfolioOverview() {
  return (
    <Card className="self-stretch">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
        <CardDescription>PEPE $%PRICE% | BNB $%PRICE%</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Total: $323.0K</p>
        <p>PEPE: $314.3K (33.3B tokens)</p>
        <p>BNB: $8.8K (16.1 tokens)</p>
      </CardContent>
      <CardFooter>
        Pie chart showing the proportion of PEPE vs BNB | 
        Stacked bar chart comparing the two tokens
      </CardFooter>
    </Card>
  )
}