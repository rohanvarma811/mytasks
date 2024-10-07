"use client";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/golbalProvider";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { tasks } = useGlobalState();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the sign-in page if the user is not authenticated
    if (!isSignedIn) {
      router.push("/signin");
    }
  }, [isSignedIn, router]);

  // Show tasks only if the user is signed in
  if (!isSignedIn) {
    return null; // or a loading spinner can be shown here while redirecting
  }

  return <Tasks title="All Tasks" tasks={tasks} />;
}