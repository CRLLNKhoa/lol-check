import React from "react";
import { Button } from "./ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { TbSquareRoundedLetterG } from "react-icons/tb";

export default function Hearder() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95
         backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 flex justify-between items-center"
    >
      <h1 className="font-semibold flex items-center cursor-pointer hover:text-sky-600 duration-500">
        <TbSquareRoundedLetterG className="w-6 h-6" />
        amedle
      </h1>
      <div className="flex items-center">
        <Button variant="ghost" size={"icon"}>
          <LuMoon className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size={"icon"}>
          <MdOutlineWbSunny className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
