import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    <ClerkProvider>
      <html lang='en'>
        <body className={`font-inter bg-gray-100 text-neutral-900   min-h-screen justify-between`}>
          {/* <Sidebar /> */}

          <Navbar />
          <div className='w-full p-16'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
