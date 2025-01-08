'use client'

import { FaqItem, FaqProps } from "@/types/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function Faq({ items }: FaqProps) {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center mb-8 text-4xl font-bold tracking-tight text-primary">
          Got questions?
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border-none"
            >
              <AccordionTrigger
                className="rounded-lg bg-accent/40 px-6 py-4 text-left hover:no-underline hover:bg-accent/60 data-[state=open]:bg-[#98e5d7] dark:data-[state=open]:bg-[#98e5d7]/90"
              >
                <span className="text-base font-medium ">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground bg-[#98e5d7] dark:bg-[#98e5d7]/90 text-black mt-[1px] rounded-b-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
