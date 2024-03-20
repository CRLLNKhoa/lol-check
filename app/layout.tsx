import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Hearder from "@/components/hearder";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gamedle - The Guess Game",
  description: "Cùng nhau tham gia thử thách và chia sẻ kết quả với bạn bè!",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Gamedle - The Guess Game",
    description: "Cùng nhau tham gia thử thách và chia sẻ kết quả với bạn bè!",
    url: "/app/opengraph-image.png",
    type: "article",
    images: [
      {
        url: "/app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "pic seo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Hearder />
          <div className="container max-w-lg">{children}</div>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
