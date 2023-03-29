import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function handlePasswordChange(e: FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleConfirmPasswordChange(e: FormEvent<HTMLInputElement>) {
    setConfirmPassword(e.currentTarget.value);
  }

  const text = "Por favor, registre-se para continuar";

  function validate(event: FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    alert("All good!");
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text={text} />
          <form onSubmit={validate} className={styles["form-wrapper"]}>
            <h3 className={styles["form-label"]}>Registro</h3>
            <input
              type='text'
              placeholder='Nome'
              required
              className={`${styles.input} ${styles["name-field"]}`}
            />
            <input
              type='text'
              placeholder='Usuário'
              required
              className={`${styles.input} ${styles["user-field"]}`}
            />
            <input
              type='text'
              placeholder='Nascimento'
              required
              className={`${styles.input} ${styles["birth-field"]}`}
            />
            <input
              type='email'
              placeholder='Email'
              required
              className={`${styles.input} ${styles["email-field"]}`}
            />
            <input
              type='password'
              placeholder='Senha'
              pattern='.{8,}'
              title='Mínimo de 8 caracteres'
              required
              onChange={handlePasswordChange}
              className={`${styles.input} ${styles["password-field"]}`}
            />
            <input
              type='password'
              placeholder='Confirmar Senha'
              pattern='.{8,}'
              title='Mínimo de 8 caracteres'
              required
              onChange={handleConfirmPasswordChange}
              className={`${styles.input} ${styles["confirm-password-field"]}`}
            />

            {!passwordsMatch && (
              <p className={styles["passwords-dont-match"]}>
                As senhas não correspondem!
              </p>
            )}

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
