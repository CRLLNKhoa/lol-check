import { Button } from "@/components/ui/button";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdAutorenew } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDBGStore } from "@/stores/dbgstore";
import question from "@/jsons/games-daybygone.json";
import { notify } from "@/components/toast";
import Confetti from "react-confetti";

export default function GameWin(props: { score: number; chart: string[] }) {
  const router = useRouter();
  const newGame = useDBGStore((state: any) => state.newGame);
  const isWin = useDBGStore((state: any) => state.isWin);
  const handleNewGame = () => {
    newGame(question.sort(() => Math.random() - 0.5));
    notify("success", "Tạo game mới thành công !");
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 bottom-0 right-0 select-none z-50 bg-black/20 flex justify-center items-center"
    >
      <div className="container max-w-lg flex flex-col p-2">
        <div className=" bg-white p-4 rounded-lg">
          <Confetti className="w-full h-full" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-6xl animate-pulse">👑</p>
            <h1 className="font-bold mt-2">Bạn đã chiến thắng !</h1>
          </div>
          <div className="flex flex-col justify-center items-center py-6">
            <p className="flex items-center gap-4">
              <b>Số điểm đạt được:</b> {props.score}
            </p>
            <div className="flex items-center gap-2">
              <p className="font-bold">Thống kê: </p>
              <div className="flex items-center gap-4">
                <p>{props.chart?.filter((i) => i === "🟥").length} 🟥</p>
                <p>{props.chart?.filter((i) => i === "🟩").length} 🟩</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mt-4">
            <Button onClick={() => router.push("/")} size="sm">
              <GoHomeFill className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button size="sm" className="ml-auto bg-sky-500 hover:bg-sky-600">
              Share <FaShareAlt className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={handleNewGame}
              className="bg-green-500 hover:bg-green-600"
              size="sm"
            >
              New Game <MdAutorenew className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
