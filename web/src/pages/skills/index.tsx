import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function Skills() {
  return (
    <>
      <Header />

      <main className={styles.skillsMain}>
        <h1>Minhas abilidades</h1>

        <div className={styles.contentSection}>
          <div className={styles.mainTextSection}>
            <p>
              Tenho desde o começo da minha jornada como freelancer foco em
              desenvolvimento web sempre estudando mais e mais, tenho me
              aprofundado mais em aplicaçõescom NodeJS, typescript e React.
            </p>

            <p>
              No momento estou tentando adquirir experiencias profissionais e me
              apronfundar mais nas linguagens que já conheço, mas, no futuro,
              tenho interesse em estudar nextJS.
            </p>

            <p>
              Estou sempre estudando mais e mais para poder oferecer sempre
              aplicações melhores e otimizadas para meus clientes e parceiros,
              colaborando e trocando experiencia para crescimento mútuo com
              empresas e outros dev.
            </p>

            <p>
              Você também pode dar uma olhada nas minhas{" "}
              <Link to={"/works"}>experiencias e trabralhos</Link>.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <div className={styles.skillBar}>
              <span>Back-End</span>

              <div className={styles.skillLine + " " + styles.backEnd}></div>
            </div>

            <div className={styles.skillBar}>
              <span>ReactJS</span>

              <div className={styles.skillLine + " " + styles.reactJS}></div>
            </div>

            <div className={styles.skillBar}>
              <span>Firebase</span>

              <div className={styles.skillLine + " " + styles.firebase}></div>
            </div>

            <div className={styles.skillBar}>
              <span>SQL</span>

              <div className={styles.skillLine + " " + styles.sql}></div>
            </div>

            <div className={styles.skillBar}>
              <span>TypeScript</span>

              <div className={styles.skillLine + " " + styles.typescript}></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
