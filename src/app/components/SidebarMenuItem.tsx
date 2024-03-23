import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path : string;
    icon : JSX.Element;
    title: string;
}

export const SidebarMenuItem = ({ path, icon, title}:Props) => {
    const pathname = usePathname();

    return (
        <Link href={path}>
        <div className={`${pathname === path && 'border-indigo-500 border-2'}  p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer transition-all duration-75 `}>
            <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                {icon}
            </div>
            <p className="text-xs mt-1 text-center font-semibold">{title}</p>
        </div>
        </Link>
    )
}
