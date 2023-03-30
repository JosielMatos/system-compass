import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<formData>();

  //Passwords validation
  interface formData {
    name: string;
    userName: string;
    birthDate: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  function onSubmit(data: formData) {
    console.log(data);
  }

  return (
    <main className={styles["main-wrapper"]}>
      <section className={styles["left-side"]}>
        <div className={styles.wrapper}>
          <Header text='Por favor, registre-se para continuar' />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["form-wrapper"]}
          >
            <h3 className={styles["form-label"]}>Registro</h3>

            <input
              type='text'
              placeholder='Nome'
              required
              className={`${styles.input} ${styles["name-field"]}`}
              {...register("name", { required: true })}
            />
            <input
              type='text'
              placeholder='Usuário'
              required
              className={`${styles.input} ${styles["user-field"]}`}
              {...register("userName", { required: true })}
            />
            <input
              type='text'
              placeholder='Nascimento'
              required
              className={`${styles.input} ${styles["birth-field"]}`}
              {...register("birthDate", { required: true })}
            />
            <input
              type='email'
              placeholder='Email'
              required
              className={`${styles.input} ${styles["email-field"]}`}
              {...register("email", { required: true })}
            />
            <input
              type='password'
              placeholder='Senha'
              pattern='.{8,}'
              title='Mínimo de 8 caracteres'
              required
              className={`${styles.input} ${styles["password-field"]} ${
                errors.confirmPassword && styles["passwords-not-match"]
              }`}
              {...register("password", { required: true })}
            />
            <input
              type='password'
              placeholder='Confirmar Senha'
              pattern='.{8,}'
              title='Mínimo de 8 caracteres'
              required
              className={`${styles.input} ${styles["confirm-password-field"]} ${
                errors.confirmPassword && styles["passwords-not-match"]
              }`}
              {...register("confirmPassword", {
                required: true,
                validate: (value: string) => {
                  if (watch("password") !== value) {
                    return "As senhas não correspondem!";
                  }
                },
              })}
            />

            {errors.confirmPassword && (
              <p className={styles["passwords-match-warn"]}>
                {errors.confirmPassword.message}
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
