import { SignIn } from "@clerk/nextjs";
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
      <div className='flex flex-col items-center space-y-8 mb-12 '>
        <Image
          src='/flower.svg'
          height={60}
          width={60}
          alt='flower'
        />
        <p className='text-neutral-900 md:leading-normal leading-normal text-4xl md:text-7xl text-wrap font-oswald'>Welcome Back</p>
        <div className='m-12'>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
