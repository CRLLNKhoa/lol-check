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
            <h1 className="font-bold">Hướng dẫn cơ bản</h1>
             <ul className="text-sm list-disc ml-4">
              <li>Bạn chỉ có thể chọn sai <b className="text-red-500">3</b> lần tối đa.</li>
              <li>Nhập tên anh hùng rồi bấm vào nút kiểm tra.</li>
              <li>Bấm next để tiếp tục đến câu tiếp theo</li>
              <li>Bạn có thể bấm bỏ qua nhưng nó sẽ tính cho bạn 1 đáp án sai.</li>
             </ul>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
