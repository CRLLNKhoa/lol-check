"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function NextLv() {
  const [life, setLife] = useState(2);
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
      <Button
        className="bg-green-600 hover:bg-green-700 duration-500"
        size={"sm"}
      >
        Bỏ qua <TbPlayerTrackNextFilled className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
