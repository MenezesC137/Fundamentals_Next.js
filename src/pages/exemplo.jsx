import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function Exemplo() {
  return (
    <>
      <Link href="/">Voltar</Link>
      <Cabecalho titulo="Next.js & React" />
      <Cabecalho titulo="Aprenda Next.js na pratica" />
    </>
  );
}
