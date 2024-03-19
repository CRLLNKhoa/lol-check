import React from "react";
import { motion } from "framer-motion";

export default function Pic({ imgques }: { imgques: string }) {
  return (
    <motion.div layout
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      className="size-[200px] rounded-lg overflow-hidden bg-black/90 mx-auto select-none cursor-pointer"
    >
      <img className="w-full h-full" onError={(e) => console.log("ảnh sai")} src={imgques} alt="" />
    </motion.div>
  );
}
