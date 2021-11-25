import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContactAside } from "./components/ContactAside";
import { ContactForm } from "./components/ContactForm";

import styles from "./style.module.scss";

export function Contact() {
  return (
    <>
      <Header />

      <main className={styles.contactMain}>
        <h1>Entre Em Contato</h1>

        <div className={styles.contactContent}>
          <ContactForm />

          <ContactAside />
        </div>
      </main>

      <Footer />
    </>
  );
}
