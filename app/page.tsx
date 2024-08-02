import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold leading-tight uppercase">Welcome to the %PROJECT_TITLE%!</h1>

      <Globe />

      <Link href="/dashboard" title="Enter" prefetch={false}>
        <Button>Enter</Button>
      </Link>
    </main>
  );
}
