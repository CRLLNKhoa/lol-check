"use client";
import React from "react";
import ChartDialog from "@/components/chartDialog";
import SupportDialog from "@/components/supportDialog";
import Howtoplay from "./howtoplay";
import BXH from "./bxh";

export default function ActionDiv() {
  return (
    <div className="flex items-center">
      <SupportDialog />

      <div className="ml-auto flex items-center">
        <ChartDialog />
        <BXH />
        <Howtoplay />
      </div>
    </div>
  );
}
