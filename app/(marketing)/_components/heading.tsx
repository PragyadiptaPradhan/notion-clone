"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
      <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Your Ideas, Documents, & Plans. Unified, Welcome to{" "}
          <span className="underline">2Brain</span>
        </h1>
        <h3
          className="text-base sm:text-xl md:text-2xl
        font-medium"
        >
          2Brain is the connected workspace where <br />
          better, fater work happens.
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
        <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild>
        <Link href="/documents">
          Enter 2Brain
          <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
        </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
            <Button>
            Get 2Brain Free
            <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </SignInButton>
        )}
      </div>
    );
}