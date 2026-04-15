'use client';

import { useEffect, useState } from "react";
import { randomID } from "@/utils/helpers";
import Link from "next/link";
import { Video } from "lucide-react";

const CreateMeeting = () => {
  const [roomUrl, setRoomUrl] = useState<string>("");

  useEffect(() => {
    setRoomUrl(`/room/${randomID(5)}`);
  }, []);

  return (
    <Link href={roomUrl || "#"} className="block w-full">
      <button 
        disabled={!roomUrl}
        className="w-full px-6 py-4 bg-brand-pink hover:bg-brand-deep text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_10px_30px_rgba(190,24,93,0.3)] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
      >
        <Video className="w-4 h-4" />
        Start Instant Meeting
      </button>
    </Link>
  );
};

export default CreateMeeting;