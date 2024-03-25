"use client";

import { ClipboardPlus, Home } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className=' flex justify-between items-center'>
      <Link
        href='/'
        className={`p-8 flex space-x-4 items-center bg-clip-text text-md text-white font-semibold`}
      >
        <Image
          src='/logo.svg'
          alt='logo'
          height='12'
          width='12'
        />
        <p>RoboCare</p>
      </Link>
      <div className='me-12 space-x-8'>
        <Link
          href='/checkup'
          className={`p-8  ${pathname == "/checkup" ? "font-bold text-white" : "text-neutral-400 "}`}
        >
          Checkup
        </Link>
        <Link href='/sign-in'>
          <Button className='text-md bg-white text-neutral-900 hover:bg-neutral-300 gap-2 '>Sign In</Button>
        </Link>
        {/* TODO: Change sign in button to avatar based on whether signed in */}

        {/* <UserButton /> */}
      </div>
    </div>
  );
}
