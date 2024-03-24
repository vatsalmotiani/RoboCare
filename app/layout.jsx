import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "Health Gate Online",
    template: "%s - Health Gate Online",
  },
  description: "Health Gate Online",
  // icons: {
  //   icon: "/favicon.svg", // /public path
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-neutral-500 flex flex-col min-h-screen relative`}>
        <div className='justify-center flex'>
          <Navbar />
        </div>
        <div className='m-4'>{children}</div>
      </body>
    </html>
  );
}
