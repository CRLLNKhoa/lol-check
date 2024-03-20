import React from "react";
import ActionDiv from "./components/actionDiv";
import CurrenGame from "./components/currenGame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gamedle - Days Bygone",
  description: "Cùng nhau tham gia thử thách và chia sẻ kết quả với bạn bè!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function page() {
  return (
    <main className="flex flex-col py-4">
      <ActionDiv />
      <CurrenGame />
    </main>
  );
}
