import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  return (
    <main className="flex flex-col h-screen justify-center items-center p-4">
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input type="text" placeholder="Address" />
        <Button type="submit">Search</Button>
      </div>
    </main>
  );
}
