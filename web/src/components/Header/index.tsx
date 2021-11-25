import { Link } from "react-router-dom";
import logoIMG from "../../assets/others/logo.svg";
import { Menu } from "../menu";

import styles from "./style.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logoIMG} alt="Felipe Vieira - Logo" />
      </Link> 
      
      <Menu />
    </div> 
  );
}
