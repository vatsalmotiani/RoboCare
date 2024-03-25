import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import { Separator } from "../components/ui/separator";

import Link from "next/link";
import { Button } from "../components/ui/button";

export default function page() {
  const BuiltUsing = () => {
    return (
      <div className='flex flex-col items-center space-y-4'>
        <p className='text-neutral-400'>Built Using</p>
        <div className='flex space-x-8'>
          <p>Python</p>
          <p>Next.js</p>
        </div>
      </div>
    );
  };
  return (
    <div className='flex flex-col space-y-16 items-center mt-16'>
      <div className='flex flex-col space-y-8 text-center items-center'>
        <p className='text-white text-5xl leading-normal max-w-6xl font-bebas'>
          Welcome to
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-80% to-red-500 '> RoboCare</span>, your trusted online platform for personalized health assessments.
        </p>
        <p className='text-md text-neutral-400 leading-relaxed max-w-6xl'>
          Empowering you with knowledge about your health is our mission at <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-purple-400 via-30% to-80% to-red-400 font-semibold'>RoboCare</span>. With our intuitive symptom checker, you can quickly and conveniently input your symptoms and receive an instant analysis of potential diseases or conditions.
          Whether you are experiencing common ailments or more complex conditions, our symptom checker is designed to help you understand your health better.
        </p>
        {/* <Separator /> */}
        <Link href='/checkup'>
          <Button className='w-full p-8 text-md rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-purple-400 via-30% to-80% to-red-400 hover:from-indigo-600 hover:to-red-400 text-white gap-2 '>Get Started</Button>
        </Link>
      </div>

      {/* <BuiltUsing /> */}
    </div>
  );
}
