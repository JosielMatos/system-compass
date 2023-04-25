import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function Register() {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    userName: false,
    birthDate: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setErrors ({
      name: !formData.name.match(namePattern),
      userName: !userNamePattern.test(formData["userName"]),
      birthDate: !datePattern.test(formData["birthDate"]),
      email: !emailPattern.test(formData["email"]),
      password: !passwordPattern.test(formData["password"]),
      confirmPassword: !passwordPattern.test(formData["password"]),
    });

    console.log(Object.values(errors));
    if (Object.values(errors).includes(true)) return;

    console.log(formData);
    // alert("Registrado!");
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //Regex patterns
  const namePattern = /[A-Z][a-zA-Z]+$/;
  const userNamePattern = /^\S*$/;
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
          <form onSubmit={handleSubmit} className={styles["form-wrapper"]} noValidate>
            <h3 className={styles["form-label"]}>Registro</h3>

            <input
              name='name'
              type='text'
              placeholder='Nome'
              title='Nome não pode conter números ou caracteres especiais, primeira letra maiúscula'
              required
              onChange={onChange}
              className={`${styles.input} ${styles["name-field"]}
                ${errors.name && styles["invalid-input"]}`}
            />
            {errors.name && (
              <p className={styles["input-warn"]}>Insira um nome válido</p>
            )}

            <input
              type='text'
              name='userName'
              placeholder='Usuário'
              title='Nome de usuário não pode conter espaços'
              onChange={onChange}
              className={`${styles.input} ${styles["user-field"]} ${
                errors.userName && styles["invalid-input"]
              }`}
            />
            {errors.userName && (
              <p className={styles["input-warn"]}>
                Insira um nome de usuário válido
              </p>
            )}

            <input
              name='birthDate'
              type='text'
              placeholder='Nascimento'
              title='A data deve preencher o formato dd/mm/aaaa'
              required
              onChange={onChange}
              className={`${styles.input} ${styles["birth-field"]} ${
                errors.birthDate && styles["invalid-input"]
              }`}
            />
            {errors.birthDate && (
              <p className={styles["input-warn"]}>Insira uma data válida</p>
            )}

            <input
              name='email'
              type='email'
              placeholder='Email'
              title='Insira um email válido!'
              onChange={onChange}
              className={`${styles.input} ${styles["email-field"]} ${
                errors.email && styles["invalid-input"]
              }`}
            />
            {errors.email && (
              <p className={styles["input-warn"]}>Insira um email válido</p>
            )}

            <input
              name='password'
              type='password'
              placeholder='Senha'
              onChange={onChange}
              title='Mínimo de 8 caracteres, com pelo menos 1 letra maiúscula e 1 minúscula'
              className={`${styles.input} ${styles["password-field"]} ${
                (errors.password || !(formData.password === formData.confirmPassword)) &&
                styles["invalid-input"]
              }`}
            />
            {errors.password && (
              <p className={styles["input-warn"]}>Mínimo de 8 caracteres, pelo menos <br /> 1 letra maiúscula e 1 minúscula</p>
            )}

            <input
              onChange={onChange}
              name='confirmPassword'
              type='password'
              placeholder='Confirmar Senha'
              title='Precisa coincidir com a senha do campo anterior'
              className={`${styles.input} ${styles["confirm-password-field"]} ${
                !(formData.password === formData.confirmPassword) && styles["invalid-input"]
              }`}
            />

            {!(formData.password === formData.confirmPassword) && (
              <p className={styles["passwords-match-warn"]}>
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
