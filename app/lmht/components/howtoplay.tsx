import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FiHelpCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Howtoplay() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"} >
          <FiHelpCircle className="w-6 h-6 text-muted-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="font-bold mb-4 pb-2 border-b">Thông số của bạn</h1>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">2</h1>
                  <p className="text-sm font-semibold">Đã chơi</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">2</h1>
                  <p className="text-sm font-semibold">Thắng</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">2</h1>
                  <p className="text-sm font-semibold">Tỉ lệ thắng %</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold">2</h1>
                  <p className="text-sm font-semibold">Chuỗi đúng</p>
                </div>

              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
