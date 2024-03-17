import { TItemMenu } from "@/types";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col py-4">
      <h1 className="font-bold">Chọn chủ đề:</h1>
      <div className="flex flex-col mt-4 gap-4">
        <ItemSelect icon="/menu-icon-1.png" title="Tướng Liên Minh Huyền Thoại" />
        <ItemSelect icon="/menu-icon-1.png" title="Âm nhạc Việt Nam" />
        <ItemSelect icon="/menu-icon-1.png" title="Tướng Liên Minh Huyền Thoại" />
      </div>
    </main>
  );
}

function ItemSelect(_props:TItemMenu) {
  return (
    <Link href={"/"} className="py-4 flex items-center gap-2 border rounded-lg justify-center cursor-pointer
     transition-all duration-500 text-sky-600 font-semibold group hover:border-sky-600">
      <img src={_props.icon} alt="icon" className="w-6 h-6 group-hover:scale-110 duration-300"/>
      <h1>{_props.title}</h1>
    </Link>
  );
}
