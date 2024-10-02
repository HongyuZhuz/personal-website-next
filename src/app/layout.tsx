
import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./PageTransition";
import SideNav from "./ui/navBar";
import Footer from "./ui/footer";
import { ContactInfo } from "./ui/contactInfo";
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: `Hongyu Zhu${`'`}s Personal Website`,
  description: `Personal website of Hongyu Zhu`,
  icons:{
    icon: '/favicon.ico', // 注意这里的路径
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={raleway.className} >
      
      <body
        className={`antialiased ${raleway.className}`}
      >
        <SideNav/>
        
        {/* 使用 PageTransition 包裹页面内容 */}
        <PageTransition>{children}</PageTransition>
        <ContactInfo/>
        <Footer/>
      </body>
    </html>
  );
}
