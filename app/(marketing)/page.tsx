"use client";

import { Button } from "@/components/ui/button";
import { Show, SignUpButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-300 mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      
      {/* Hero Image */}
      <div className="relative w-60 h-60 lg:w-105 lg:h-105 mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>

      {/* Text + Actions */}
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-125 text-center">
          Learn, practice, and master a new language!
        </h1>

        <div className="flex flex-col gap-y-4 w-full">

          {/* SIGNED OUT */}
          <Show when="signed-out">
            <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
              <Button size="lg" variant="secondary" className="w-full">
                Let’s get started
              </Button>
            </SignUpButton>

            <SignInButton mode="modal" fallbackRedirectUrl="/learn">
              <Button size="lg" variant="primaryOutline" className="w-full">
                Already have an account?
              </Button>
            </SignInButton>
          </Show>

          {/* SIGNED IN */}
          <Show when="signed-in">
            <Link href="/learn" className="w-full">
              <Button size="lg" variant="secondary" className="w-full">
                Continue learning
              </Button>
            </Link>
          </Show>

        </div>
      </div>
    </div>
  );
}