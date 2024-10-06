"use client";
import React from "react";
import { useGlobalState } from "../context/golbalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { importantTasks } = useGlobalState();
  return <Tasks title="Important Tasks" tasks={importantTasks} />;
}

export default page;
