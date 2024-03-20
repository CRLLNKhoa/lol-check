"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TfiCup } from "react-icons/tfi";
import { getBXH } from "@/actions/dbg";
import { PostgrestError } from "@supabase/supabase-js";

export default function BXH() {
  const [loading, setLoading] = useState(true);
  const [BXH, setBxh] = useState<any[] | PostgrestError>([]);
  useEffect(() => {
    const get = async () => {
      const result = await getBXH();
      if (result?.status === 200) {
        setBxh(result?.data);
        setLoading(false);
      }
    };
    get();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <TfiCup className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Xếp hạng top 10</DialogTitle>
        </DialogHeader>
        {loading ? (
          <p className="text-center animate-pulse text-red-500">Đang tải...</p>
        ) : (
          <div className="grid gap-2 py-4">
            {(BXH as any).map((item: any, index: number) => (
              <div key={index} className="flex gap-4 items-center select-none">
                <b>{index + 1}.</b>
                <p className="line-clamp-1 flex-1">
                  {item.username}
                </p>
                <p className="flex items-center">{item.red} 🟥</p>
                <p className="flex items-center">{item.green} 🟩</p>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
