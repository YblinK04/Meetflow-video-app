'use client';

import React, { useEffect, useRef } from 'react';
import { randomID } from "@/utils/helpers";

let isJoining = false;

const VideoCall = ({ roomID }: { roomID: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isJoining) return;
    isJoining = true;

    const initMeeting = async () => {
      try {
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET || "";

        if (!appID || !serverSecret) return;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          randomID(5),
          randomID(5)
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        await zp.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
          showScreenSharingButton: true,
          turnOnCameraWhenJoining: true,
          turnOnMicrophoneWhenJoining: true,
        });
      } catch (error) {
        console.error("Zego error:", error);
        isJoining = false;
      }
    };

    initMeeting();

    return () => {
      isJoining = false;
    };
  }, [roomID]);

  return <div className="flex-1 w-full h-full min-h-screen" ref={containerRef} />;
};

export default VideoCall;