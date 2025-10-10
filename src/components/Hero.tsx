"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export const Hero = () => {
  const vidoeRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (vidoeRef.current) {
      vidoeRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <h1>MacBook Pro</h1>
      <Image src="/title.png" alt="Macbook Title" width={500} height={500} />
      <video ref={vidoeRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};
