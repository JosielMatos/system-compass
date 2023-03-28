import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Register() {
  const text = "Por favor, registre-se para continuar";

  function validate() {
    //todo
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text={text} />
          <form onSubmit={validate} className={styles["form-wrapper"]}>
            <h3 className={styles["form-label"]}>Registro</h3>
            <input type='text' placeholder='Nome' className={styles.input} />
            <input type='text' placeholder='Usuário' className={styles.input} />
            <input
              type='text'
              placeholder='Nascimento'
              className={styles.input}
            />
            <input type='text' placeholder='Email' className={styles.input} />
            <input
              type='password'
              placeholder='Senha'
              className={styles.input}
            />
            <input
              type='password'
              placeholder='Confirmar Senha'
              className={styles.input}
            />
            <Button label='Registrar-se' />
          </form>
          <p className={styles["form-bottom"]}>
            Já possui uma conta? <a href='/'>Faça Login</a>
          </p>
        </div>
      </section>
      <section className={styles["right-side"]}></section>
    </main>
  );
}
