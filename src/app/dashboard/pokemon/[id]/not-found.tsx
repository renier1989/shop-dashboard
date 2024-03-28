import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div>
            <div className="w-full  flex flex-col  items-center justify-center">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                    <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Pokemon Not Found</p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Sorry, the Pokemon you are looking for could not be found.</p>
                    <Link href="/dashboard/pokemons" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Return Pokemon List</span>
                    </Link>
                </div>
                <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4 items-center mx-auto">
                    <Image src={`https://static-00.iconduck.com/assets.00/robot-404-error-errors-illustration-512x427-j192mt0z.png`} alt='notfound' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}