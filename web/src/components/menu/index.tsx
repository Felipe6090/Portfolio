import { useState } from "react";
import { Link } from "react-router-dom";
import { Socials } from "../Socials";

import menuIMG from "../../assets/others/menu.svg";

import styles from "./style.module.scss";

export function Menu() {
  const [sidebarIsActivated, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebarIsActivated);

  return (
    <>
      <div className={styles.navbar}>
        <Link to={"#"} className={styles.menubars}>
          <img src={menuIMG} alt="Abrir Menu" onClick={showSidebar} />
        </Link>
      </div>

      <nav
        className={
          sidebarIsActivated
            ? styles.navMenu + " " + styles.active
            : styles.navMenu
        }
      >
        <div className={styles.closeIcon}>
          <svg
            onClick={showSidebar}
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="35.4099"
              width="50"
              height="5"
              rx="2.5"
              transform="rotate(-45 0 35.4099)"
              fill="#FD2155"
            />
            <rect
              x="3.9812"
              width="50"
              height="5"
              rx="2.5"
              transform="rotate(45 3.9812 0)"
              fill="#FD2155"
            />
          </svg>
        </div>

        <ul className={styles.navBarUL}>
          <li className={styles.navBarLI}>
            <Link to={"/"} className={styles.navBarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navBarLI}>
            <Link to={"/about"} className={styles.navBarLink}>
              Sobre
            </Link>
          </li>
          <li className={styles.navBarLI}>
            <Link to={"/skills"} className={styles.navBarLink}>
              Skills
            </Link>
          </li>
          <li className={styles.navBarLI}>
            <Link to={"/works"} className={styles.navBarLink}>
              Projetos
            </Link>
          </li>
          <li className={styles.navBarLI}>
            <Link to={"/contact"} className={styles.navBarLink}>
              Contato
            </Link>
          </li>
        </ul>

        <Socials />
      </nav>
    </>
  );
}
