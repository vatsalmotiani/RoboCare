import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
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
    <html lang='en'>
      <ClerkProvider>
        <body className={`${inter.className} bg-neutral-900 text-white flex flex-col min-h-screen relative`}>
          {/* <Sidebar /> */}
          <Navbar />
          <div className='w-full '>{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
