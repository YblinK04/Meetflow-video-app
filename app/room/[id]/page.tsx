"use client";

import  { use, useState } from "react";
import Lobby from "./components/Lobby";
import VideoCall from "./components/VideoCall";

interface Props {
  params: Promise<{ id: string }>;
}

const RoomPage = ({ params }: Props) => {
  const { id: roomID } = use(params);
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#0f0206] flex flex-col">
      {!joined ? (
        <Lobby 
          roomID={roomID} 
          onJoin={() => setJoined(true)} 
        />
      ) : (
        <VideoCall roomID={roomID} />
      )}
    </div>
  );
};

export default RoomPage;