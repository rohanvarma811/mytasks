"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn routing="hash" />
    </div>
  );
}

export default Page;