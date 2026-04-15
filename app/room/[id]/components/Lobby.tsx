'use client';


import { Video, Mic, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface LobbyProps {
  roomID: string;
  onJoin: () => void;
}

const Lobby = ({ roomID, onJoin }: LobbyProps) => {
  return (
    <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3" />
            Secure Room
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white">
            Ready to <span className="text-brand-pink">join?</span>
          </h2>
          <p className="text-foreground/40 font-medium uppercase text-[10px] tracking-widest">
            Room Code: <span className="text-white ml-2">{roomID}</span>
          </p>
        </div>

        <div className="aspect-video bg-black/40 rounded-[32px] border border-white/5 flex flex-col items-center justify-center space-y-4 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center animate-pulse">
                <Video className="w-8 h-8 text-brand-pink" />
            </div>
            <p className="relative z-10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Camera & Mic are Ready
            </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button 
            onClick={onJoin}
            className="w-full py-4 bg-brand-pink hover:bg-brand-neon text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-brand-pink/20 active:scale-95"
          >
            Enter Conference
          </button>
          
          <Link href="/">
            <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/60 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lobby;