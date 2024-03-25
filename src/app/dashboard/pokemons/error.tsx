'use client' // Error components must be Client Components

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                    <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                        <div className="relative">
                            <div className="absolute">
                                <div className="">
                                    <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                        {error.message}
                                    </h1>
                                    <p className="my-2 text-gray-800 mb-4">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                    <Link href={'/dashboard/main'} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
                                </div>
                            </div>
                            <div>
                                {/* <Image src="https://i.ibb.co/G9DC8S0/500.png" width={400} height={400} alt='error' /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="https://i.ibb.co/ck1SGFJ/Group.png" width={500} height={500} alt='imagen'  />
                    </div>
                </div>
    )
}