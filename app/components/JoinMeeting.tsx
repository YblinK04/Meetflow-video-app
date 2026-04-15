'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, AlertCircle } from 'lucide-react';
import { JoinRoomSchema } from '@/lib/schemas';

const JoinMeeting = () => {
  const [roomId, setRoomId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

   const handleJoin = () => {
    const result = JoinRoomSchema.safeParse({ roomId });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError(null);
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="space-y-2 w-full">
      <div className="flex gap-2 w-full">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Enter room code" 
            className={`w-full bg-brand-pink/5 border ${
              error ? 'border-red-500' : 'border-brand-pink/20'
            } rounded-2xl px-4 py-3 text-sm outline-none focus:border-brand-pink/50 transition-all`}
            value={roomId} 
            onChange={(e) => {
              setRoomId(e.target.value);
              if (error) setError(null); 
            }} 
            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
          />
        </div>
        <button 
          onClick={handleJoin}
          className="px-6 py-3 bg-brand-deep text-white rounded-2xl font-bold text-xs uppercase hover:opacity-90 active:scale-95 transition-all flex items-center"
        >
          <LogIn className="w-4 h-4" />
        </button>
      </div>
      
      {error && (
        <div className="flex items-center gap-1.5 px-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </div>
      )}
    </div>
  );
};

export default JoinMeeting;