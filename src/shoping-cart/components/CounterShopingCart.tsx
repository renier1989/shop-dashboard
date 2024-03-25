'use client';
import { useState } from "react";

interface Props {
    value?: number;
}

export const CounterShopingCart = ({value=10}:Props) => {
    const [count, setCount] = useState(value);
    return (
        <>
            <span className="text-8xl font-semibold">{count}</span>

            <div className="flex gap-1">
                <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg" onClick={() => setCount(count - 1)}>-1</button>
                <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg" onClick={() => setCount(count + 1)} >+1</button>
            </div>
        </>
    )
}
