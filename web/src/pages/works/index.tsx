import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { api } from "../../services/api";
import styles from "./style.module.scss";

type IWorks = {
  id: string;
  workName: string;
  subText: string;
  text: string;
  imgLink: string;
  itsOpenCode: boolean;
  githubLink?: string;
  itsOnline: boolean;
  workLink?: string;
  itsFavorite: boolean;
  lastChange: Date;
};

export function Works() {
  const [works, setWorks] = useState<IWorks[]>([]);

  useEffect(() => {
    api.get<IWorks[]>("/works").then((res) => {
      setWorks(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.worksMain}>
        <h1>Projetos que participei / estudos</h1>

        <div className={styles.worksSection}>
          {works.map((work) => {
            return (
              <Link
                className={styles.workDiv}
                to={`/works/${work.workName}`}
                style={{
                  backgroundImage: `url("${work.imgLink}")`,
                }}
              >
                <h2>{work.workName}</h2>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
