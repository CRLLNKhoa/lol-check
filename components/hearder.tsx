import React from "react";
import { Button } from "./ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { TbSquareRoundedLetterG } from "react-icons/tb";
import SupportDialog from "./supportDialog";
import { useTheme } from "next-themes"
import Link from "next/link";

export default function Hearder() {
  // const { setTheme } = useTheme()
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95
         backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 flex justify-between items-center"
    >
     <Link href={"/"}>
        <h1 className="font-semibold flex items-center cursor-pointer hover:text-sky-600 duration-500">
          <TbSquareRoundedLetterG className="w-6 h-6" />
          amedle
        </h1>
     </Link>
      <div className="flex items-center">
        <SupportDialog />
        {/* <Button onClick={() => setTheme("dark")} variant="ghost" size={"icon"}>
          <LuMoon className="w-5 h-5" />
        </Button>
        <Button onClick={() => setTheme("light")} variant="ghost" size={"icon"}>
          <MdOutlineWbSunny className="w-5 h-5" />
        </Button> */}
      </div>
    </header>
  );
}
