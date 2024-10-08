"use client"

import { useRouter } from "next/navigation";
import { useMediaQuery } from "usehooks-ts"
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

export type AuthProps = {
  latitude: number
  longitude: number
}

function LoginButton() {
  const handleClick = () => {
    const date = new Date();

    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    document.cookie = `auth=true; expires=${date.toUTCString()}; path=/`;
  }

  return (
    <Link className="flex w-full px-4" href="/" title="Enter" prefetch={false}>
      <Button className="w-full" onClick={handleClick}>Enter</Button>
    </Link>
  );
}

export function Auth({ latitude, longitude }: AuthProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const router = useRouter()

  const handleOpenChange = () => {    
    router.push('/')
  }

  if (isDesktop) {
    return (
      <Dialog open onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="sm:text-center">
            <DialogTitle>Welcome to the Project!</DialogTitle>

            <DialogDescription>
              Your current location is{' '}
              {latitude && longitude 
                ? <code>{latitude},{longitude}</code> 
                : "unknown"}
            </DialogDescription>
          </DialogHeader>

          <Globe className="mx-auto" latitude={latitude} longitude={longitude} />

          <LoginButton />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open onClose={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader className="sm:text-center">
          <DrawerTitle>Welcome to the Project!</DrawerTitle>

          <DrawerDescription>
            Your current location is {' '}
            {latitude && longitude 
              ? <code>{latitude},{longitude}</code> 
              : "unknown"}
          </DrawerDescription>
        </DrawerHeader>

        <Globe className="mx-auto" latitude={latitude} longitude={longitude} />

        <LoginButton />

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
