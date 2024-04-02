"use client";
import { useUser, useClerk } from "@clerk/clerk-react";

import { useRouter } from "next/navigation";
import { ChevronDown, ClipboardPlus, Home } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";

export default function Sidebar() {
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();

  const { signOut } = useClerk();
  const router = useRouter();

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
        <p className='text-3xl  text-neutral-900 font-semibold'>
          Robo<span className='text-blue-600'>Care</span>
        </p>
      </Link>
      <div className='flex me-12 items-center font-medium space-x-16'>
        <Link
          href='/'
          className={`text-md ${pathname == "/" ? "font-semibold text-blue-600" : "text-neutral-600 "}`}
        >
          Home
        </Link>
        <Link
          href='/checkup'
          className={`text-md ${pathname == "/checkup" ? "font-semibold text-blue-600" : "text-neutral-600 "}`}
        >
          Checkup
        </Link>

        {!isLoaded && <Skeleton className={"h-10 w-10 rounded-full bg-neutral-400"} />}

        {!isSignedIn && (
          <Link href='/sign-in'>
            <Button className='text-md bg-blue-600 text-white hover:bg-blue-800 gap-2 '>Sign In</Button>
          </Link>
        )}
        {isSignedIn && (
          <DropdownMenu className=''>
            <DropdownMenuTrigger className='flex items-center space-x-3'>
              <Avatar>
                <AvatarImage
                  src={user.imageUrl}
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{user.firstName}</p>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>{user.fullName}</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <button onClick={() => signOut(() => router.push("/"))}>Sign out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* TODO: Change sign in button to avatar based on whether signed in */}

        {/* <UserButton /> */}
      </div>
    </div>
  );
}
