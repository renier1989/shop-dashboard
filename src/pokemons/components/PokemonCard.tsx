import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"
import { SinglePokemon } from ".."
import Link from "next/link"

interface Props {
    pokemon: SinglePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon
    return (
        <>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white  shadow-blue-gray-500/40 flex flex-col justify-center items-center">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={150}
                        height={150}
                        alt={name}
                        priority={false}
                    />



                </div>
                <div className="pt-4 flex flex-col items-center justify-center">
                    <div className=" flex items-center justify-between">
                        <h5 className="block font-sans text-2xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased capitalize">
                            {name}

                            <button
                                className=" ml-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                <span className=" -translate-y-1/2 -translate-x-1/2 transform">
                                    <IoHeartOutline size={30} />
                                </span>
                            </button>
                        </h5>
                    </div>

                </div>
                <div className="p-6">
                    <Link
                    href={`/dashboard/pokemon/${id}`}
                        className="block w-full select-none rounded-lg bg-indigo-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacit-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </>
    )
}
