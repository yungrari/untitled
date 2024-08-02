import { headers } from "next/headers";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

export default function Home() {
  const latitude = headers().get("x-latitude") || ''
  const longitude = headers().get("x-longitude") || ''

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold leading-tight uppercase">Welcome to the %PROJECT_TITLE%!</h1>

      <p>Your current location is{' '}
        {latitude && longitude 
          ? <code>{JSON.stringify({ latitude, longitude })}</code> 
          : 'unknown'}
      </p>

      <Globe latitude={+latitude} longitude={+longitude} />

      <Link href="/dashboard" title="Enter" prefetch={false}>
        <Button>Enter</Button>
      </Link>
    </main>
  );
}
