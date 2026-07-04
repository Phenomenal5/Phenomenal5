"use client"

import { useState } from "react";

export default function Home() {
  const [count , setCount] = useState(0)
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 px-4 py-2 rounded text-white">Count : {count}</button>
    </div>
  );
}
