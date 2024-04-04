"use client";
import { Info, LogOut } from "lucide-react";
import { Separator } from "../components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <div className='bg-neutral-900 p-8'>
      <p className='mb-8 flex text-neutral-600 gap-x-2 bottom-0'>
        <Info /> The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.
      </p>
      <Separator className='bg-neutral-700' />
      <div className='flex md:justify-between md:flex-row flex-col md:p-8 px-2 py-6 md:space-y-0 space-y-4'>
        <Link
          href='/'
          className={`flex space-x-4 items-center`}
        >
          <p className='md:text-3xl text-xl text-neutral-200 font-semibold'>
            Robo<span className='text-blue-600'>Care</span>
          </p>
        </Link>
        <div className='flex md:flex-row flex-col md:space-y-0 md:space-x-6 space-y-4'>
          <Link
            href='/'
            className={` text-md ${pathname == "/" ? "font-medium text-neutral-300" : " hover:text-neutral-500 text-neutral-600 "}`}
          >
            Home
          </Link>
          <Link
            href='/checkup'
            className={`text-md ${pathname == "/checkup" ? "font-medium text-neutral-300" : " hover:text-neutral-500 text-neutral-600 "}`}
          >
            Checkup
          </Link>
          <Link
            href='/faq'
            className={` text-md ${pathname == "/faq" ? "font-medium text-neutral-300" : " hover:text-neutral-500 text-neutral-600 "}`}
          >
            FAQs
          </Link>
          {isSignedIn && (
            <button
              className='text-neutral-600 font-medium flex space-x-2 hover:text-neutral-500 '
              onClick={() => signOut(() => router.push("/"))}
            >
              {/* <LogOut /> */}
              <p>Sign Out</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
