import { api } from "../../../../services/api";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./style.module.scss";

type IClientData = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  text: string;
  whisedDeadline: Date | null;
};

export function ContactForm() {
  const [filds, setFilds] = useState<IClientData>({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    text: "",
    whisedDeadline: null,
  });

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const fildName = event.target.name;

    filds[fildName] = event.target.value;

    return setFilds(filds);
  }

  async function handleSendForm(event: FormEvent) {
    event.preventDefault();

    console.log(filds);

    return await api.post("/sendMessage", filds);
  }

  return (
    <form action="post">
      <div className={styles.fild}>
        <label>Nome:</label>
        <input type="text" name="clientName" onChange={handleInputChange} />
      </div>
      <div className={styles.fild}>
        <label>Email:</label>
        <input type="email" name="clientEmail" onChange={handleInputChange} />
      </div>
      <div className={styles.fild}>
        <label>Telefone de contato:</label>
        <input type="number" name="clientPhone" onChange={handleInputChange} />
      </div>
      <div className={styles.fild}>
        <label>Prazo Desejado:</label>
        <input type="date" name="whisedDeadline" onChange={handleInputChange} />
      </div>
      <div className={styles.fild}>
        <label>Mensagem:</label>
        <textarea
          onChange={handleInputChange}
          name="text"
          className={styles.messageFild}
        />
      </div>

      <input
        type="submit"
        value="Enviar Mensagem"
        className={styles.sendInput}
        onClick={handleSendForm}
      />
    </form>
  );
}


