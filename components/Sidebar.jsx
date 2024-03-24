"use client";

import { ClipboardPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='w-[360px] flex flex-col justify-center  text-neutral-400 '>
      <Link
        href='/'
        className={`p-8 flex gap-x-2 ${pathname == "/" ? "bg-neutral-800 " : "bg-none"}`}
      >
        <ClipboardPlus />
        Test
      </Link>
      <Link
        href='/result'
        className={`p-8 flex gap-x-2 ${pathname == "/result" ? "bg-neutral-800 " : "bg-none"}`}
      >
        <ClipboardPlus />
        Result
      </Link>
    </div>
  );
}
