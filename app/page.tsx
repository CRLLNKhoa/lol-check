import { TItemMenu } from "@/types";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col py-4 gap-6">
      <ItemMenu
        title="Liên Minh Huyền Thoại (Đang phát triển)"
        icon="/menu-icon-1.png"
        children={[
          { title: "Đoán ảnh đại diện anh hùng", icon: "😎", link: "/updating" },
          { title: "Đoán trang phục", icon: "🎀", link: "/updating" },
          { title: "Đoán anh hùng bằng câu nói", icon: "🔊", link: "/updating" },
        ]}
      />
      <ItemMenu
        title="Thử tài âm nhạc (Đang phát triển)"
        icon="/menu-icon-2.png"
        children={[{ title: "Nghe giai điệu đoán bài hát", icon: "🎹", link: "/updating" }]}
        right
      />
         <ItemMenu
        title="Days Bygone"
        icon="/Dino.png"
        children={[
          { title: "Đoán anh hùng", icon: "🥊", link: "/dbg" },
        ]}
      />
      <ItemMenu
        title="Vua trò chơi (Đang phát triển)"
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Video-Game-Controller-Icon-D-Edit.svg/1200px-Video-Game-Controller-Icon-D-Edit.svg.png"
        children={[{ title: "Đoán trò chơi qua hình ảnh", icon: "🎮", link: "/updating" }]}
        right
      />
    </main>
  );
}

function ItemMenu(_props: TItemMenu) {
  if (_props.right) {
    return (
      <>
        <div className="flex flex-col">
          <div className="flex items-center justify-end border-black gap-4 border-b pb-2 border-dashed">
            <img
              src={_props.icon}
              alt="icon"
              className="w-6 h-6 group-hover:scale-110 duration-300"
            />
            <h1>{_props.title}</h1>
          </div>
          <div className="border-r border-dashed border-black flex flex-col items-end mr-10 gap-2 pt-2 relative">
            {_props.children?.map((item) => (
              <div
                key={item.link}
                className="flex items-center pl-2 cursor-pointer group relative overflow-hidden"
              >
                <h1>{item.icon}</h1>
                <h2 className="text-md ml-2">{item.title}</h2>
                <span className="absolute bg-sky-500/20 top-0 bottom-0 -z-10 group-hover:right-4 right-[100%] w-full transition-all"></span>
                <span className="border-t border-dashed w-4 ml-2 border-muted-foreground"></span>
              </div>
            ))}
            <div className="size-[12px] bg-white absolute -bottom-[1px] -right-2"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center border-black gap-4 border-b pb-2 border-dashed">
          <img
            src={_props.icon}
            alt="icon"
            className="w-6 h-6 group-hover:scale-110 duration-300"
          />
          <h1>{_props.title}</h1>
        </div>
        <div className="border-l border-dashed border-black flex flex-col items-start ml-10 gap-2 pt-2 relative">
          {_props.children?.map((item) => (
            <Link href={item.link}
              key={item.link}
              className="flex items-center cursor-pointer group relative overflow-hidden pr-2"
            >
              <span className="border-t border-dashed w-4 mr-2 border-muted-foreground"></span>
              <h1 className="mr-2">{item.icon}</h1>
              <h2>{item.title}</h2>
              <span className="absolute bg-sky-500/20 group-hover:top-0 top-8 bottom-0 -z-10 left-4 w-full transition-all"></span>
            </Link>
          ))}
          <div className="size-[12px] bg-white absolute -bottom-[1px] -left-2"></div>
        </div>
      </div>
    </>
  );
}
