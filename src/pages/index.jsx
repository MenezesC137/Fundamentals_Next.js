import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="darkviolet" />
      <Navegador texto="Jsx" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp/123" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="gold " />
      <Navegador
        texto="Integração com API #01"
        destino="/integracao_1"
        cor="MediumOrchid"
      />
      <Navegador texto="Conteudo Estatico" destino="/estatico" cor="Brown" />
    </div>
  );
}
