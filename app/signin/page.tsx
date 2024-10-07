"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    // HERE THE ROUTING ISSUE IS FIXED DURING LOGIN
    <div className="flex items-center justify-center h-full">
      <SignIn routing="hash" />
    </div>
  );
}

export default Page;