import { ArrowLeft, CircleAlert } from "lucide-react";
import Button from "../components/ui/button";
import Link from "next/link";

export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function notFound() {
  return (
    <div className='flex space-y-8  flex-col items-center justify-center h-[600px]'>
      <span className='text-neutral-400 text-4xl font-oswald'> Page Not Found</span>
      <Link
        href='/'
        className='bg-blue-600 p-4 px-6 hover:bg-blue-800 rounded-lg flex space-x-2 items-center'
      >
        <ArrowLeft className='text-white' />
        <p className='font-semibold text-lg text-white'>Back To Homepage</p>
      </Link>
    </div>
  );
}
