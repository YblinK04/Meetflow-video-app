'use client';

import React, { useEffect, useRef } from 'react';
import { randomID } from "@/utils/helpers";

const VideoCall = ({ roomID }: { roomID: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zpRef = useRef<any>(null); 
  const isInitializing = useRef(false);

  useEffect(() => {
    if (zpRef.current || isInitializing.current) return;
    
    isInitializing.current = true;

    const initMeeting = async () => {
      try {
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET || "";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          randomID(5),
          randomID(5)
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zpRef.current = zp; 

        zp.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
          showScreenSharingButton: true,
          turnOnCameraWhenJoining: false,
          turnOnMicrophoneWhenJoining: false,
        });
      } catch (error) {
        console.error("Zego error:", error);
        isInitializing.current = false; 
      }
    };

    initMeeting();

    return () => {
      if (zpRef.current) {
       
        zpRef.current.destroy();
        zpRef.current = null;
        isInitializing.current = false;
      }
    };
  }, [roomID]);

  return <div className="w-full h-screen bg-black" ref={containerRef} />;
};

export default VideoCall;