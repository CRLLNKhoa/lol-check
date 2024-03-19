"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDBGStore } from "@/stores/dbgstore";
import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaStop } from "react-icons/fa";

export default function NextLv() {
  const life = useDBGStore((state:any) => state.life)
  const countQues = useDBGStore((state:any) => state.countQues)
  const i = useDBGStore((state:any) => state.i)
  const checking = useDBGStore((state:any) => state.checking)
  const subLife = useDBGStore((state:any) => state.subLife)
  const nextQues = useDBGStore((state:any) => state.nextQues)
  const setChart = useDBGStore((state: any) => state.setChart);
  const handleNext = () => {
    subLife()
    nextQues()
    setChart("🟥")
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <GoHeartFill
          className={cn(
            "size-8",
            life >= 1 && "text-red-500",
            life < 1 && "text-muted-foreground"
          )}
        />
        <GoHeartFill
          className={cn(
            "size-8",
            life >= 2 && "text-red-500",
            life < 2 && "text-muted-foreground"
          )}
        />
        <GoHeartFill
          className={cn(
            "size-8",
            life === 3 && "text-red-500",
            life < 3 && "text-muted-foreground"
          )}
        />
      </div>
      {(countQues - 1 !== i) ? <Button
        className="bg-green-600 hover:bg-green-700 duration-500"
        size={"sm"}
        onClick={handleNext}
        disabled={checking}
      >
        Skip <TbPlayerTrackNextFilled className="w-4 h-4 ml-2" />
      </Button> : <Button onClick={handleNext} variant={"destructive"} size={"sm"}>End <FaStop className="w-3 h-3 ml-2" /></Button>}
    </div>
  );
}
