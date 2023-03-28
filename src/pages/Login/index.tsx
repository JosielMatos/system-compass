import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Login() {
  const text = "Para continuar navegando de forma segura, efetue o login";

  return (
    <main>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
        <Header text={text} />
        <Form />
        <p>
          Novo por aqui? <a href='#'>Registre-se</a>
        </p>
        </div>
      </section>
      <section className={styles["right-side"]}>
      </section>
    </main>
  );
}
