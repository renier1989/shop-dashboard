import { WidgetItem } from "@/app/components";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Pagina dashboard de adminstracion'
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-1 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

    <WidgetItem/>

    </div>

  );
}