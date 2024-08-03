"use client"

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitAddress } from "@/lib/actions";
import { cn } from "@/lib/utils";

const initialState = {
  message: ''
}

export type SearchProps = React.ComponentPropsWithoutRef<'form'>

export function Search({ className, defaultValue, ...props }: SearchProps) {
  const [state, action, isPending] = useFormState(submitAddress, initialState)

  useEffect(() => {
    if (state.message) {
      redirect(`/dashboard/${state.message}`)
    }
  }, [state.message])

  return (
    <form className={cn("flex w-full max-w-md items-center space-x-2", className)} action={action} {...props}>
      <Input type="text" placeholder="Address" defaultValue={defaultValue} />
      <Button type="submit" disabled={isPending}>Search</Button>
    </form>
  );
}
