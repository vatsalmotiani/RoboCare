"use client";

import { ClipboardPlus, Home } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='w-[360px] flex flex-col justify-center  text-neutral-400 '>
      <Link
        href='/'
        className={`p-8 flex gap-x-2 ${pathname == "/" ? "bg-neutral-800 " : "bg-none"}`}
      >
        <Home />
        Home
      </Link>
      <Link
        href='/checkup'
        className={`p-8 flex gap-x-2 ${pathname == "/checkup" ? "bg-neutral-800 " : "bg-none"}`}
      >
        <ClipboardPlus />
        Checkup
      </Link>
      {/* <Link
        href='/result'
        className={`p-8 flex gap-x-2 ${pathname == "/result" ? "bg-neutral-800 " : "bg-none"}`}
      >
        <ClipboardPlus />
        Result
      </Link> */}
      <UserButton />
    </div>
  );
}
