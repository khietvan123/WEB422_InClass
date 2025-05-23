import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hello from "@/components/Hello";
import Clock from "@/components/Clock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <h1>Home Component~!</h1>
      <p>Second paragraph</p>
      <br />
      <hr />
      {/* I am a comment */}
      <Hello 
        message="Hello World This is the first Hello Component"
          src="https://cdn.inspireuplift.com/uploads/images/seller_products/31564/1702654851_Cryingcatfunnymeme.png"
      ></Hello>
      <Hello 
        message="Hello Web422 This is the second Hello Component"
        src="https://png.pngtree.com/png-clipart/20240621/original/pngtree-dizzy-cat-crying-meme-sticker-png-image_15380016.png"
        ></Hello>
      <Clock></Clock>
      <Clock lang="Ko-ko"></Clock>
    </>
  );
}
