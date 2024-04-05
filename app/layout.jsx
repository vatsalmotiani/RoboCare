import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "../components/ui/toaster";

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
      <body className='font-inter bg-gray-100 text-neutral-900'>
        <ClerkProvider>
          <div className='flex flex-col justify-between min-h-screen'>
            <div className='flex flex-col'>
              <Navbar />
              <div className='w-full'>{children}</div>
              <Toaster />
            </div>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
