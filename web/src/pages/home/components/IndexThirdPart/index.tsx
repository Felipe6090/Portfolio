import frontendIMG from "../../../../assets/others/front-end.svg";
import backendIMG from "../../../../assets/others/back-end.svg";
import othersIMG from "../../../../assets/others/others.svg";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function IndexThirdPart() {
  return (
    <div className={styles.IndexThirdPart}>
      <div className={styles.skillsBlock}>
        <strong>Um pouco sobre minhas skills</strong>

        <div className={styles.skillsList}>
          <div className={styles.skill}>
            <img src={frontendIMG} alt="Front End Icon" />

            <h3>Front-End</h3>

            <p>
              Construção de interfaces
              <br />
              interativas rápidas e funcionais
            </p>

            <strong>Ferramentas Utilizada</strong>

            <p>ReactJS, React Native, Figma</p>
          </div>

          <div className={styles.skill}>
            <img src={backendIMG} alt="Back End Icon" />

            <h3>Back-End</h3>

            <p>Montagem e Integração de funcionalidades Back-End </p>

            <strong>Ferramentas Utilizada</strong>

            <p>NodeJS, MySQL, Firebase</p>
          </div>

          <div className={styles.skill}>
            <img src={othersIMG} alt="Others Icon" />

            <h3>Outros</h3>

            <p>Serviços dos tipos mais diversos</p>

            <strong>Serviços Diversos Feitos</strong>

            <ul>
              <li>Implementação de serviços</li>
              <li>Manutenção de código</li>
              <li>Design e Criação de Layouts</li>
            </ul>
          </div>
        </div>

        <Link to={"/skills"}>Ver Mais</Link>
      </div>
    </div>
  );
}
