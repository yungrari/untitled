"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import React from "react";

const formSchema = z.object({
  address: z.string().min(2).max(50),
})

export type SearchFormProps = React.ComponentPropsWithoutRef<'div'> & {
  defaultAddress?: string
}

export function SearchForm({ className, defaultAddress, ...props }: SearchFormProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: defaultAddress,
    },
  })

  const onSubmit = ({ address }: z.infer<typeof formSchema>) => {
    router.push(`/dashboard/${address}`)
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Address</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <fieldset className="flex gap-2">
                    <FormControl>
                      <Input placeholder="0x862418D196D05e0a3d948B26391132f1655F2900" {...field} />
                    </FormControl>
                    <Button type="submit">Submit</Button>
                  </fieldset>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
