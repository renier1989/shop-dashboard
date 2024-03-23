import Image from "next/image";
import { redirect } from "next/navigation";

export default function HomePage() {

  redirect('/dashboard/main');

  return (
    <>
      <h1>Hola Shop-Dashboard</h1>
    </>
  );
}
