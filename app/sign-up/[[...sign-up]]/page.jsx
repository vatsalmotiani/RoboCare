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
        <p className='text-neutral-900 md:leading-normal leading-normal text-4xl md:text-7xl text-wrap font-oswald'>
          Introducing Robo<span className='text-blue-600'>Care</span>
        </p>
        <SignUp />
      </div>
    </div>
  );
}
