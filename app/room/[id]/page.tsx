"use client";

import React, { use } from "react";
import VideoCall from "./components/VideoCall";

interface Props {
  params: Promise<{ id: string }>;
}

const RoomPage = ({ params }: Props) => {
  const { id: roomID } = use(params);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#0f0206]">
      <VideoCall roomID={roomID} />
    </div>
  );
};

export default RoomPage;