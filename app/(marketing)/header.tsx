"use client";

import { Button } from "@/components/ui/button";
import {
  Show,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full">
        
        {/* Logo */}
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Language Learner
          </h1>
        </div>

        {/* Auth */}
        <Show when="signed-in">
          <UserButton />
        </Show>

        <Show when="signed-out">
          <SignInButton mode="modal" fallbackRedirectUrl="/learn">
            <Button size="lg" variant="ghost">
              Login
            </Button>
          </SignInButton>
        </Show>

      </div>
    </header>
  );
};