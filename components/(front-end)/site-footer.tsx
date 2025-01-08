import { Apple, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "What's New", href: "/whats-new" },
      { label: "About", href: "/about" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Social Good", href: "/social-good" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Medicare for Business", href: "/medicare-business" },
      { label: "2022 Creator Report", href: "/creator-report" },
      { label: "Charities", href: "/charities" },
      { label: "Creator Profile Directory", href: "/creator-directory" },
      { label: "Explore Templates", href: "/templates" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Topics", href: "/help" },
      { label: "Getting Started", href: "/getting-started" },
      { label: "Linktree Pro", href: "/pro" },
      { label: "Features & How-Tos", href: "/features" },
      { label: "FAQs", href: "/faqs" },
      { label: "Report a Violation", href: "/report" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Cookie Notice", href: "/cookie-notice" },
      { label: "Trust Center", href: "/trust" },
      { label: "Cookie Preferences", href: "/cookie-preferences" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 dark:bg-background">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-base font-medium text-foreground/90">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="rounded-lg border bg-background p-2 dark:bg-background"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDlqylNtwXwE7o7GNK5r9edyayWbaVF_0Tw&s"
                alt="Download on App Store"
                className="h-8"
              />
            </Link>
            <Link
              href="#"
              className="rounded-lg border bg-background p-2 dark:bg-background"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDlqylNtwXwE7o7GNK5r9edyayWbaVF_0Tw&s"
                alt="Get it on Google Play"
                className="h-8"
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

