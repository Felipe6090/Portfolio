import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useWorkPage } from "../../hooks/useWorkPage";
import styles from "./styles.module.scss";

export function WorkPage() {
  const params = useParams();
  const workName = params.workName;

  const { work, isLoading } = useWorkPage(workName);

  console.log(work + "  " + isLoading + "   workPage Log");

  if (isLoading) {
    return (
      <>
        <Header />
        <main className={styles.workPageMain}>
          <h2>Loading</h2>
        </main>
        <Footer />
      </>
    );
  } else {
    const [paragraph1, paragraph2] = work.text.split("|");

    return (
      <>
        <Header />

        <main className={styles.workPageMain}>
          <img
            src={work.imgLink}
            alt={`Imagem representativa ${work.workName}`}
          />

          <div className={styles.contentSection}>
            <h1>{work.workName}</h1>
            <h2>{work.subText}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>

            {work.itsOnline && work.itsOpenCode ? (
              <p>
                Você pode ver este projeto online{" "}
                <a href={work.workLink} target="_blank">aqui </a>, ou o código{" "}
                <a href={work.githubLink} target="_blank">aqui</a>
              </p>
            ) : work.itsOnline ? (
              <p>
                Você pode ver este projeto online{" "}
                <a href={work.workLink} target="_blank">aqui</a>
              </p>
            ) : (
              work.itsOpenCode && (
                <p>
                  Você pode ver o código projeto{" "}
                  <a href={work.githubLink} target="_blank">aqui</a>
                </p>
              )
            )}
          </div>
        </main>

        <Footer />
      </>
    );
  }
}
