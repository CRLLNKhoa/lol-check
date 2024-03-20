"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
    const router = useRouter()
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6">
      <h1 className="font-bold text-xl">Đang phát triển !</h1>
      <p className="text-center">
        Nnơi này đang trong quá trình phát triển hứa hẹn sẽ mang đến nhiều
        trải nghiệm mới và thú vị cho bạn. 
      </p>
      <Button onClick={() => router.push("/")}>Trở lại trang chủ</Button>
    </div>
  );
}
