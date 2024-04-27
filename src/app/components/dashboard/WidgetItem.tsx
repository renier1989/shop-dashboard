'use client'
import React, { useEffect } from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { initialReadyState } from '@/store/counter/CounterSlice'
import { IoCafeOutline } from 'react-icons/io5'

export const WidgetItem = () => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initialReadyState(count))
    }, [dispatch, count])
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget
        title={count}
        label='Contador'
        subTitle='Shopping'
        icon={<IoCafeOutline size={50} className="text-indigo-600" />}
        link='/dashboard/counter'
        />
    </div>
  )
}
