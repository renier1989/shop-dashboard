'use client'
import { Metadata } from "next";
import { useState } from "react";


export const metadata:Metadata = {
 title: 'Counter Page',
 description: 'Countar de productos',
};

export default function CounterPage() {
  const [count, setCount] = useState(10);
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Simulacion de productos en el Carrito</span>
      <span className="text-8xl font-semibold">{count}</span>

      <div className="flex gap-1">
        <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg" onClick={()=>setCount(count - 1)}>-1</button>
        <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg" onClick={()=>setCount(count + 1)} >+1</button>
      </div>
    </div>
  );
}