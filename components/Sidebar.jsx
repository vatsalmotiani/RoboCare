"use client";

import { ClipboardPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`${parent}`);

  return (
    <div className='w-[360px] flex flex-col justify-center  text-neutral-400 '>
      <Link
        href='/'
        className={`p-8 flex gap-x-2 ${isActive ? "text-tb-black " : "bg-neutral-800"}`}
      >
        <ClipboardPlus />
        Test
      </Link>
    </div>
  );
}
