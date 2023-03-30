import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Login() {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { register, handleSubmit } = useForm<formData>();

  interface formData {
    user: string;
    password: string;
  }

  function onSubmit(data: formData) {
    const validEmail = /josiel.matos@compass.com/;
    const validPassword = /1password/;

    if (!validEmail.test(data.user) || !validPassword.test(data.password)) {
      setInvalidCredentials(true);
      return;
    }

    console.log(data);
    alert("All good");
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text='Para continuar navegando de forma segura, efetue o login' />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["form-wrapper"]}
          >
            <h3 className={styles["form-label"]}>Login</h3>
            <input
              type='text'
              placeholder='Usuário'
              className={`${styles.input} ${styles["user-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              required
              {...register("user", { required: true })}
            />
            <input
              type='password'
              placeholder='Senha'
              className={`${styles.input} ${styles["password-field"]} ${
                invalidCredentials && styles["invalid-credentials"]
              }`}
              pattern='.{8,}'
              title='Mínimo de 8 caracteres'
              required
              {...register("password", { required: true })}
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
