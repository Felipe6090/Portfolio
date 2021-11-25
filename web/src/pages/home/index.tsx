import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./style.module.scss";

import { IndexFirstPart } from "./components/IndexFirstPart";
import { IndexSecondPart } from "./components/IndexSecondPart";
import { IndexThirdPart } from "./components/IndexThirdPart";

export function Home() {
 
  return (
    <>
      <Header />
      <div className={styles.home}>
        
        <IndexFirstPart />

        <IndexSecondPart />

        <IndexThirdPart />
      
      </div>
      <Footer />
    </>
  );
}
