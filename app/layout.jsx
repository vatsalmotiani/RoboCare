import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "RoboCare",
    template: "%s - RoboCare",
  },
  description: "RoboCare",
  // icons: {
  //   icon: "/favicon.svg", // /public path
  // },
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-black w-full text-white flex flex-col min-h-screen relative`}>
          {/* <Sidebar /> */}
          <Navbar />
          <div className=' w-full border-s-2 border-neutral-700 h-screen p-8 flex justify-center items-center'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
