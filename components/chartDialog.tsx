"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { HiOutlineChartBar } from "react-icons/hi";
import { useDBGStore } from "@/stores/dbgstore";

export default function ChartDialog() {
  const gameStats = useDBGStore((state: any) => state.gameStats);
  const setGameStats = useDBGStore((state: any) => state.setGameStats);
  useEffect(() => {
    const storedStats = localStorage.getItem("gamedle-data-dbg");
    if (storedStats) {
      setGameStats(JSON.parse(storedStats));
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <HiOutlineChartBar className="w-6 h-6 text-muted-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="font-bold mb-4 pb-2 border-b">Thông số của bạn</h1>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">{gameStats.played}</h1>
                  <p className="text-sm font-semibold">Đã chơi</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">{gameStats.win}</h1>
                  <p className="text-sm font-semibold">Thắng</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">{gameStats.lose}</h1>
                  <p className="text-sm font-semibold">Thua</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">{Math.ceil(gameStats.win/gameStats.played*100) || 0}</h1>
                  <p className="text-sm font-semibold">Tỉ lệ thắng %</p>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
