import Link from "next/link"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const icons = {
  calculator: Calculator,
  calendar: Calendar,
  creditCard: CreditCard,
  settings: Settings,
  smile: Smile,
  user: User,
}

const items = [
  {
    title: "Suggestions",
    items: [
      {
        title: "Calendar",
        image: <Calendar className="mr-2 h-4 w-4" />,
      },
      {
        title: "Search Emoji",
        image: <Smile className="mr-2 h-4 w-4" />,
      },
      {
        title: "Calculator",
        image: <Calculator className="mr-2 h-4 w-4" />,
      }
    ]
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        image: <User className="mr-2 h-4 w-4" />,
      },
      {
        title: "Billing",
        image: <CreditCard className="mr-2 h-4 w-4" />,
      },
      {
        title: "Settings",
        image: <Settings className="mr-2 h-4 w-4" />,
      }
    ]
  }
]

export function Navigator() {
  return (
    <Command className="rounded-lg border shadow-lg">
      <CommandInput placeholder="Type a command or search..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {items.map(item => (
          <CommandGroup key={item.title} heading={item.title}>
            {item.items.map(i => (
              <Link className="cursor-pointer" key={i.title} href={i.title.trim().toLowerCase()}>
                <CommandItem>
                  {i.image}
                  <span>{i.title}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
