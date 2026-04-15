import Image from "next/image";
import CreateMeeting from "./components/CreateMeeting";
import JoinMeeting from "./components/JoinMeeting";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-background">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-deep/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full relative z-10">
        
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
              <Sparkles className="w-3 h-3" />
              Next-Gen Video Calls
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground">
              Video calls for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-neon">
                everyone.
              </span>
            </h1>
            
            <p className="text-lg text-foreground/60 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience crystal clear connection wrapped in a beautiful, 
              dark-rose aesthetic. Secure, fast, and modern.
            </p>
          </div>
          
          <div className="max-w-sm mx-auto lg:mx-0 p-1 bg-gradient-to-br from-brand-pink/30 to-transparent rounded-[26px]">
            <div className="bg-background/80 backdrop-blur-2xl rounded-[25px] p-6 shadow-2xl space-y-4">
              <CreateMeeting />
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-brand-pink/10"></div>
                <span className="flex-shrink mx-4 text-[9px] font-black uppercase tracking-widest text-brand-pink/30">
                  or join via code
                </span>
                <div className="flex-grow border-t border-brand-pink/10"></div>
              </div>

              <JoinMeeting />
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end group">
          <div className="absolute inset-0 bg-brand-pink/20 rounded-full blur-[80px] group-hover:blur-[100px] transition-all duration-700 opacity-50" />
          
          <Image 
            src="/flower.svg" 
            alt="flower" 
            width={550} 
            height={550} 
            className="relative z-10 animate-float drop-shadow-[0_20px_50px_rgba(190,24,93,0.4)] transition-transform duration-500 hover:scale-105"
            priority
            style={{ width: 'auto', height: 'auto' }} 
          />
        </div>
      </div>
    </div>
  );
}