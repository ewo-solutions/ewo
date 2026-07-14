"use client";

import { useEffect, useState } from "react";
import { heroWords } from "@/data/home";

/** Cycling bold word in the home hero: "We are / creative." → "strategic." … */
export default function HeroWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % heroWords.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      key={index}
      className="inline-block animate-word-in whitespace-nowrap font-bold motion-reduce:animate-none"
    >
      {heroWords[index]}
      <span className="text-lime">.</span>
    </span>
  );
}
