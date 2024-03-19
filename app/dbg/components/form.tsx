"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dataAns from "@/jsons/daysbygone.json";
import { FaCaretRight } from "react-icons/fa";
import { useDBGStore } from "@/stores/dbgstore";
import { notify } from "@/components/toast";
import { FaCircleCheck } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export default function Form() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const checking = useDBGStore((state: any) => state.checking);
  const subLife = useDBGStore((state: any) => state.subLife);
  const nextQues = useDBGStore((state: any) => state.nextQues);
  const setScore = useDBGStore((state: any) => state.setScore);
  const setChart = useDBGStore((state: any) => state.setChart);
  const setChecking = useDBGStore((state: any) => state.setChecking);
  const currQues = useDBGStore((state: any) => state.currQues);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    const filteredResults = dataAns.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleCheck = () => {
    if (searchTerm === "") {
      notify("warning", "Nhập đáp án !");
    } else {
      if (currQues.textans === searchTerm) {
        notify("success", "Chính xác!");
        setChecking();
        setScore()
        setChart("🟩")
      } else {
        notify("error", "Không chính xác!");
        subLife()
        setChart("🟥")
        setChecking();
      }
    }
  };

  const handleNext = () => {
    setChecking();
    nextQues()
    setSearchTerm("")
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {isClient && (
        <Popover>
          <PopoverTrigger>
            <Button disabled={checking} className="min-w-[412px]" variant={"outline"}>
              {searchTerm === "" ? "🔍 Nhập tên anh hùng " : searchTerm}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col">
              <Input
                value={searchTerm}
                onChange={handleSearchChange}
                type="text"
                placeholder="Tên tướng bạn đoán..."
              />
              <div className="flex flex-col pt-2">
                {searchResults.map((item: string) => (
                  <span
                    onClick={() => setSearchTerm(item)}
                    className="cursor-pointer flex items-center gap-4 hover:text-red-500"
                    key={item}
                  >
                    <FaCaretRight />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )}
      {checking ? (
        <Button onClick={handleNext} className="min-w-[200px] bg-sky-500 hover:bg-sky-600 duration-500">
          Next <GrFormNextLink className="w-6 h-6 ml-2" />
        </Button>
      ) : (
        <Button
          onClick={handleCheck}
          className="min-w-[200px] bg-yellow-500 hover:bg-yellow-600 duration-500"
        >
          <FaCircleCheck className="w-4 h-4 mr-2" /> Check
        </Button>
      )}
    </div>
  );
}
