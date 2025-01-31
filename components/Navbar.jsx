"use client";
import { Button } from "@/components/ui/button";
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight hover:opacity-75 transition">
          nextJs
        </Link>
        <div>
            <Button asChild variant="default">
              <Link href="/auth/signUp">Register</Link>
            </Button>
        </div>
      </div>
    </nav>
  )
}
