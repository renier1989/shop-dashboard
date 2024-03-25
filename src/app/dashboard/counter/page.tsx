
import { CounterShopingCart } from "@/shoping-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Countar de productos',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Simulacion de productos en el Carrito</span>
      <CounterShopingCart value={20}/>
    </div>
  );
}