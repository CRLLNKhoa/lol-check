"use client"
import React from "react";
import Pic from "./pic";
import NextLv from "./nextLv";
import GameSub from "./gameSub";
import Form from "./form";

export default function CurrenGame() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-muted-foreground text-sm select-none">
        {/* #Game {Math.floor(Math.random()*10000)} */}
      </p>
      <Pic />
      <NextLv />
      <GameSub />
      <Form />
    </div>
  );
}
