"use client"

import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import LogosBanner from "./components/LogosBanner";
import { useState } from "react";

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <div className="">
      <Header isRegistering={isRegistering} setIsRegistering={setIsRegistering}/>
      <main>
        <section className="flex justify-between items-center gap-4 mx-[100px] mt-[104px] mb-[212px] relative">
          <div className="size-[448px] bg-green-100 border-[60px] border-green-200 absolute rounded-full -z-1 top-[85px] left-[576px]"></div>
          <Hero />
          <AuthForm isRegistering={isRegistering}/>
        </section>
        <LogosBanner/>
        <Footer/>
      </main>
    </div>
  );
}
