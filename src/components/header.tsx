import Link from "next/link";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-3xl font-bold">B21Carros</div>
      <div>
        <Link href={"/add"}>
          <Button label="Cadastrar carro" />
        </Link>
      </div>
    </header>
  );
};
