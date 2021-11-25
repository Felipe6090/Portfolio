import styles from "./style.module.scss";

import { api } from "../../../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

export function IndexSecondPart() {
  const [favoriteWorks, setWorks] = useState<IWorks[]>([]);

  useEffect(() => {
    api.get<IWorks[]>("/favoriteWorks").then((res) => {
      setWorks(res.data);
    });
  }, []);

  return (
    <div className={styles.indexSecondPart}>
      <strong>Meus Cases Favoritos</strong>

      <div className={styles.favoriteCasesList}>
        {favoriteWorks.map((work) => {
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

      <div className={styles.seeAllButton}>
      <Link to={"/works"} className={styles.componentButton}>Ver Todos</Link>
      </div>
    </div>
  );
}
