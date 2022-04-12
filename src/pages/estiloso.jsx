import styles from "../styles/estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout titulo='Exemplo de CSS module'>
      <div className={styles.roxo}>
        <h1>Estilo usando Css Módulos</h1>
      </div>
    </Layout>
  );
}
