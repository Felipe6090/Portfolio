import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import mladyIMG from "../../assets/others/MLADY.gif";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <Header />
      <main className={styles.aboutMain}>
        <h1>Quem Sou</h1>

        <div className={styles.contentSection}>
          <div className={styles.mainTextSection}>
            <p>
              Oi <img src={mladyIMG} alt="mlady gif" />, meu nome é Felipe
              Vieira, sou eletrotécnico e atuava na área até pouco tempo atrás,
              mas decidi mergulhar de vez na carreira de desenvolvimento é a
              área que realmente quero atuar.
            </p>

            <p>
              Tenho buscado focar no Back-End, também tenho conhecimentos de
              Front, mas sempre em busca de aprender coisas nova e se superar
              cada vez mais.
            </p>

            <p>
              Você pode ver meus trabalhos <Link to={"/works"}>aqui</Link>, ou
              pode me mandar uma <Link to={"/contact"}>mensagem</Link>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
