"use client";
import React, { useEffect, useState } from "react";
import Pic from "./pic";
import NextLv from "./nextLv";
import GameSub from "./gameSub";
import Form from "./form";
import { useDBGStore } from "@/stores/dbgstore";
import { AnimatePresence } from "framer-motion";
import GameOver from "./gameOver";
import question from "@/jsons/games-daybygone.json";
import GameWin from "./gameWin";

export default function CurrenGame() {
  const currQues = useDBGStore((state: any) => state.currQues);
  const checking = useDBGStore((state: any) => state.checking);
  const score = useDBGStore((state: any) => state.score);
  const life = useDBGStore((state: any) => state.life);
  const i = useDBGStore((state: any) => state.i);
  console.log(i);
  const chart = useDBGStore((state: any) => state.chart);
  const setCurrQues = useDBGStore((state: any) => state.setCurrQues);
  const setQuestions = useDBGStore((state: any) => state.setQuestions);

  useEffect(() => {
    const handleShuffle = () => {
      const arr = question.sort(() => Math.random() - 0.5);
      setCurrQues(arr[0]);
      setQuestions(arr);
    };
    handleShuffle()
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {life < 0 && <GameOver score={score} chart={chart} />}
      {question.length === i && <GameWin score={score} chart={chart} />}
      <p className="text-center text-muted-foreground text-sm select-none">
        #Score <b>{score}</b>
      </p>
      <AnimatePresence>
        {checking ? (
          <Pic imgques={currQues?.imgans} />
        ) : (
          <Pic imgques={currQues?.imgques} />
        )}
      </AnimatePresence>
      <NextLv />
      <GameSub />
      <Form />
    </div>
  );
}
