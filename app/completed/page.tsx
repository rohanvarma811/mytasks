"use client";
import React from "react";
import { useGlobalState } from "../context/golbalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}

export default page;
