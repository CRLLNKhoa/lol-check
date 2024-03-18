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

export default function Form() {
  const [isClient,setIsClient] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    const filteredResults = dataAns.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {isClient && <Popover>
        <PopoverTrigger>
          <Button variant={"outline"}>{searchTerm === "" ? "🔍 Nhập tên anh hùng " : searchTerm}</Button>
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
      </Popover>}
      <Button className="min-w-[200px] bg-yellow-500 hover:bg-yellow-600 duration-500">
        Kiểm tra
      </Button>
    </div>
  );
}
