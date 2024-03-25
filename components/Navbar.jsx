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
        className={`p-8 flex space-x-4 items-center`}
      >
        {/* <Image
          src='/logo.svg'
          alt='logo'
          height='12'
          width='12'
        /> */}
        <p className='text-3xl  text-neutral-900 font-oswald '>
          Robo<span className='text-blue-600'>Care</span>
        </p>
      </Link>
      <div className='me-12 font-medium space-x-4 '>
        <Link
          href='/checkup'
          className={`p-8  text-md ${pathname == "/checkup" ? "font-bold text-neutral-900" : "text-neutral-600 "}`}
        >
          Checkup
        </Link>
        <Link href='/sign-in'>
          <Button className='text-md bg-blue-600 text-white hover:bg-blue-800 gap-2 '>Sign In</Button>
        </Link>
        {/* TODO: Change sign in button to avatar based on whether signed in */}

        {/* <UserButton /> */}
      </div>
    </div>
  );
}
