import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { GoHeart } from "react-icons/go";

export default function SupportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <GoHeart className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="font-bold mb-2">Hỗ trợ tôi</h1>
              <p className="text-sm">
                Tôi hy vọng bạn thích trò chơi giải đố hàng ngày này! Nếu điều
                đó làm cho ngày của bạn tươi sáng hơn, cách tốt nhất bạn có thể
                ủng hộ chúng tôi là chia sẻ trang web với bạn bè, đăng điểm số
                hàng ngày của bạn trên reddit, discord hoặc trang web yêu thích
                của bạn hoặc chia sẻ Guessthe.game với hãng tin tức yêu thích
                của bạn!
              </p>
              <h1 className="font-bold my-2">Ủng hộ 1 ly trà đá</h1>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/qr.png"
                  alt="MB:0336284229"
                  className="size-[200px]"
                />
                <p className="text-sm font-bold">LUONG NGUYEN KHOA</p>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
