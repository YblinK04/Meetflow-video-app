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

        if (!appID || !serverSecret) return;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID, serverSecret, roomID, randomID(5), randomID(5)
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zpRef.current = zp; 

        const config: any = {
          container: containerRef.current,
          scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
          showPreJoinView: true, 
          branding: { logoURL: "/flower.svg" },
          primaryColor: "#be185d", 
          showScreenSharingButton: true,
          showUserList: true,
          maxUsers: 10,
          theme: "dark"
        };

        zp.joinRoom(config);

      } catch (error) {
        console.error("Zego error:", error);
        isInitializing.current = false; 
      }
    };

    initMeeting();

    return () => {
      if (zpRef.current) {
        if (typeof zpRef.current.destroy === 'function') {
          zpRef.current.destroy();
        }
        zpRef.current = null;
        isInitializing.current = false;
      }
    };
  }, [roomID]);

  return <div className="w-full h-screen bg-[#0f0206]" ref={containerRef} />;
};

export default VideoCall;