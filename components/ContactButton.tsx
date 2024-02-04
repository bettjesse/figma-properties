"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
interface ContactButtonProps {
    label: string
    href : string
}

const ContactButton = ({label, href}:ContactButtonProps) => {
  return (
    <Button variant= "link" className=" w-full font-normal" size= "sm" asChild>
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}

export default ContactButton