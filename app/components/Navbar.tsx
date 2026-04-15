'use client';

import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { Video } from "lucide-react";

const font = Raleway({ weight: "800", subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-pink/20 bg-background/50 backdrop-blur-md px-6 h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-pink p-2 rounded-lg transition-transform group-hover:rotate-12">
            <Video className="w-5 h-5 text-white" />
          </div>
          <h1 className={`${font.className} text-xl tracking-tighter`}>
            MeetFlow.yy
          </h1>
        </Link>
        
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex flex-col items-end">
            <p className="text-[10px] uppercase font-black tracking-widest text-brand-neon">
              Live
            </p>
            <p className="text-xs font-medium opacity-60">
              {new Date().toDateString()}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;