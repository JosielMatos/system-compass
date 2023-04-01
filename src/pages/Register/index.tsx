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
    alert("Registrado!");
  }

  //Regex patterns
  const namePattern = /[A-Z][a-zA-Z]+$/;
  const datePattern =
    /^(0[1-9]|[1-2][0-8])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-1][0-9]|202[0-2])$|^(29|30)\/(0[469]|11)\/(19[0-9]{2}|20[0-1][0-9]|202[0-2])$|^(29|30|31)\/(0[13578]|1[02])\/(19[0-9]{2}|20[0-1][0-9]|202[0-2])$/;
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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
              title='Nome não pode conter números ou caracteres especiais'
              required
              className={`${styles.input} ${styles["name-field"]} ${
                errors.name && styles["invalid-input"]
              }`}
              {...register("name", { required: true, pattern: namePattern })}
            />
            {errors.name && (
              <p className={styles["input-warn"]}>Insira um nome válido</p>
            )}

            <input
              type='text'
              placeholder='Usuário'
              title='Nome de usuário'
              className={`${styles.input} ${styles["user-field"]} ${
                errors.userName && styles["invalid-input"]
              }`}
              {...register("userName", { required: true })}
            />
            {errors.userName && (
              <p className={styles["input-warn"]}>Insira um nome de usuário</p>
            )}

            <input
              type='text'
              placeholder='Nascimento'
              title='A data deve preencher o formato dd/mm/aaaa'
              required
              className={`${styles.input} ${styles["birth-field"]} ${
                errors.birthDate && styles["invalid-input"]
              }`}
              {...register("birthDate", {
                required: true,
                pattern: datePattern,
              })}
            />
            {errors.birthDate && (
              <p className={styles["input-warn"]}>Insira uma data válida</p>
            )}

            <input
              type='email'
              placeholder='Email'
              title='Insira um email válido!'
              className={`${styles.input} ${styles["email-field"]} ${
                errors.email && styles["invalid-input"]
              }`}
              {...register("email", { required: true, pattern: emailPattern })}
            />
            {errors.email && (
              <p className={styles["input-warn"]}>Insira um email válido</p>
            )}

            <input
              type='password'
              placeholder='Senha'
              title='Mínimo de 8 caracteres, com pelo menos 1 letra maiúscula e 1 minúscula'
              className={`${styles.input} ${styles["password-field"]} ${
                (errors.password || errors.confirmPassword) &&
                styles["invalid-input"]
              }`}
              {...register("password", {
                required: true,
                pattern: passwordPattern,
              })}
            />
            <input
              type='password'
              placeholder='Confirmar Senha'
              title='Precisa coincidir com a senha do campo anterior'
              className={`${styles.input} ${styles["confirm-password-field"]} ${
                errors.confirmPassword && styles["invalid-input"]
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
