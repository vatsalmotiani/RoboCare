import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className='w-full flex justify-center space-x-12'>
      {/* <div className='flex flex-col items-center space-y-12'>
        <Image
          src='/art1.png'
          height={720}
          width={720}
          alt='art'
        />
      </div> */}
      <div className='flex flex-col items-center space-y-8'>
        <Image
          src='/flower.svg'
          height={60}
          width={60}
          alt='flower'
        />
        <p className='text-neutral-900 text-7xl leading-normal text-wrap font-oswald '>
          Introducing Robo<span className='text-blue-600'>Care</span>
        </p>
        <SignUp />
      </div>
    </div>
  );
}
