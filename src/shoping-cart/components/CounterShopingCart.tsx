'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { initialReadyState, lessCount, moreCount } from "@/store/counter/CounterSlice";
import { useEffect } from "react";
// import { useState } from "react";

interface Props {
    value?: number;
}

export interface CounterResponse {
    method:  string;
    counter: number;
}


const getApiCounter = async():Promise<CounterResponse>=>{
    const data = fetch('/api/counter').then(rs=>rs.json())
    return data
}

export const CounterShopingCart = ({ value = 10 }: Props) => {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()
    // const [count, setCount] = useState(value);

    // simula el seteo de la variable que esta en el estore
    // useEffect(() => {
    //     dispatch(initialReadyState(value))
    // }, [dispatch, value])

    useEffect(() => {
        getApiCounter().then(({counter})=>dispatch(initialReadyState(counter)))
    }, [dispatch])
    


    return (
        <>
            <span className="text-8xl font-semibold">{count}</span>

            <div className="flex gap-1">
                <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg"
                    onClick={() => dispatch(lessCount())}
                >-1</button>
                <button className="flex items-center justify-center p-2 w-[100px] rounded text-white bg-indigo-950 transition-all hover:bg-indigo-400 hover:text-indigo-950 duration-200 font-semibold text-lg"
                    onClick={() => dispatch(moreCount())}
                >+1</button>
            </div>
        </>
    )
}
