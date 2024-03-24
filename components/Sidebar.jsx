import Link from "next/link";

export default function Sidebar() {
  return (
    <div className='w-[360px] flex flex-col justify-center space-y-8 text-white'>
      <Link href=''>Test</Link>
      <Link href=''>Speed Scan</Link>
      <Link href=''>Link</Link>
    </div>
  );
}
