import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export function Login() {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validEmail = "adm.adm@compass.com";
    const validPassword = "1Password";

    if (
      validEmail !== credentials.user ||
      validPassword !== credentials.password
    ) {
      setInvalidCredentials(true);
      return;
    }

    navigate("/home");
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text='Para continuar navegando de forma segura, efetue o login' />

          <form onSubmit={handleSubmit} className={styles["form-wrapper"]}>
            <h3 className={styles["form-label"]}>Login</h3>

            <input
              name='user'
              type='text'
              placeholder='Usuário'
              className={`${styles.input} ${styles["user-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              required
              onChange={onChange}
            />

            <input
              name='password'
              type='password'
              placeholder='Senha'
              className={`${styles.input} ${styles["password-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              onChange={onChange}
              required
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
