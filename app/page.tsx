import { headers } from "next/headers";

import { Navigator } from "@/components/widget/navigator"
import { Auth } from "@/components/widget/auth";

export default function Home({ searchParams }: { searchParams: { auth?: string } }) {
  const latitude = headers().get("x-latitude") || ""
  const longitude = headers().get("x-longitude") || ""

  return (
    <main className="flex flex-col gap-2 min-h-screen max-w-3xl mx-auto justify-center items-center px-6">
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="font-heading text-pretty text-center text-[22px] font-semibold tracking-tighter text-gray-900 sm:text-[30px] md:text-[36px] md:text-6xl">Project Research</h1>
        
        <h2 className="text-balance text-center text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore doloribus!</h2>
      </div>

      <Navigator />

      {!!searchParams.auth && <Auth latitude={+latitude} longitude={+longitude} />}
    </main>
  );
}
