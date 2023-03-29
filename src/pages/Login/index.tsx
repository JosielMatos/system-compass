import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const text = "Para continuar navegando de forma segura, efetue o login";

  function handleUserChange(e: FormEvent<HTMLInputElement>) {
    setUser(e.currentTarget.value);
  }

  function handlePasswordChange(e: FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  //Credentials validation
  function validate(event: FormEvent) {
    event.preventDefault();

    //Hardcoded credentials
    const regexEmail = /josiel.matos@compass.com/;
    const regexPassword = /1password/;

    if (!regexEmail.test(user) || !regexPassword.test(password)) {
      setInvalidCredentials(true);
      return;
    }

    alert("Login Successful! Enjoy!");
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text={text} />

          <form onSubmit={validate} className={styles["form-wrapper"]}>
            <h3 className={styles["form-label"]}>Login</h3>
            <input
              type='text'
              placeholder='Usuário'
              className={`${styles.input} ${styles["user-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              onChange={handleUserChange}
              required
            />
            <input
              type='password'
              placeholder='Senha'
              className={`${styles.input} ${styles["password-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              pattern='.{8,}'
              required
              title='Mínimo de 8 caracteres'
              onChange={handlePasswordChange}
            />

            {invalidCredentials && (
              <p className={styles["invalid-credentials-warn"]}>
                Usuário e/ou Senha inválidos.
                <br /> Por favor, tente novamente!
              </p>
            )}

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
