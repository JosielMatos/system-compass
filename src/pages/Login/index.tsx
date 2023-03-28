import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Login() {
  const text = "Para continuar navegando de forma segura, efetue o login";

  function validate() {
    //todo
  }

  return (
    <main className={styles['main-wrapper']}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text={text} />
          <form onSubmit={validate} className={styles['form-wrapper']}>
            <h3 className={styles['form-label']}>Login</h3>
            <input type='text' placeholder='Usuário' className={styles.input} />
            <input type='password' placeholder='Senha' className={styles.input} />
            <Button label='Logar-se' />
          </form>
          <p className={styles["form-bottom"]}>
            Novo por aqui? <a href='/register'>Registre-se</a>
          </p>
        </div>
      </section>
      <section className={styles["right-side"]}></section>
    </main>
  );
}
