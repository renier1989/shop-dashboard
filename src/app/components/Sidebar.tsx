
export const Sidebar = () => {
    return (
        <>
            <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 sm:block">
                <div className="mb-6">

                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
                                className="rounded-full w-auto"
                            />
                        </div>
                    </div>


                    <div>
                        <ul className="mt-6 leading-10 px-4">
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer"
                            // @click="openMenu !== 1 ? openMenu = 1 : openMenu = null"
                            >
                                <i className="fas fa-align-left fa-sm text-white"></i>
                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-pink-400 cursor-pointer">
                                <i className="fas fa-question-circle fa-sm text-white"></i>
                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                                <i className="fas fa-headphones fa-sm text-white"></i>
                            </li>
                            <li className="absolute bottom-0 mb-3 p-2 rounded-full flex items-center mx-auto bg-white cursor-pointer">
                                <i className="fas fa-power-off fa-sm text-indigo-600"></i>
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>

            <aside className="animate__animated animate__fadeInLeft w-52 relative z-0 flex-shrink-0 hidden px-4 overflow-y-auto bg-gray-100 sm:block "
                x-show="openMenu ==  1"
            //    @click.away="openMenu = null" 
            // style={{ display: "none;" }}
            >
                <div className="mb-6">

                    <div className="grid grid-cols-1 gap-4 grid-cols-2 mt-6">

                        <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-chart-pie fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Dashboard</p>
                        </div>


                        <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-calculator fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Counter</p>
                        </div>


                        {/* <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-wallet fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Wallet</p>
                        </div>


                        <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-archive fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Saving</p>
                        </div>


                        <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-money-bill-wave-alt fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Currencies</p>
                        </div>


                        <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                                <i className="fas fa-shopping-basket fa-sm text-indigo-600"></i>
                            </div>
                            <p className="text-xs mt-1 text-center font-semibold">Expenses</p>
                        </div> */}

                    </div>

                </div>
            </aside>
        </>
    )
}
