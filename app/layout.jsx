import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "Speed Scan",
    template: "%s - Speed Scan",
  },
  description: "Speed Scan",
  // icons: {
  //   icon: "/favicon.svg", // /public path
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-neutral-900 w-full text-white flex min-h-screen relative`}>
        {/* <Sidebar /> */}
        <div className='bg-neutral-900 w-full border-s-2 border-neutral-700  p-8 flex justify-center items-center'>{children}</div>
      </body>
    </html>
  );
}
