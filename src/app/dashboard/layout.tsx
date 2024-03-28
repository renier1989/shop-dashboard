import { Sidebar } from "../components";


export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div>
            <div className="flex h-screen w-full bg-gray-800 ">
                <Sidebar />
                <div className="flex flex-col flex-1 w-full overflow-y-auto">
                    <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}