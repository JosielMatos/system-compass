import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    birthdate: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    userName: false,
    birthDate: false,
    email: false,
    password: false,
    confirmpassword: false,
  });

  function checkInvalidInput() {
    const data = {
      name: !formData.name.match(namePattern),
      userName: !formData.username.match(userNamePattern),
      birthDate: !formData.birthdate.match(datePattern),
      email: !formData.email.match(emailPattern),
      password: !formData.password.match(passwordPattern),
      confirmpassword: formData.confirmpassword !== formData.password,
    };
    setErrors(data);

    return Object.values(data).some((error) => error);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const hasError = checkInvalidInput();

    if (hasError) return;

    const {confirmpassword, ...formattedData} = formData;

    const serverResponse = await api.post('/api/v1/users', formattedData).then((response) => response.status);

    if (serverResponse === 201) {
      alert("Registrado!");
      navigate('/');
    } else {
      alert('Ops, algo não ocorreu como esperado!')
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const namePattern = /[A-Z][a-zA-Z]+$/;
  const userNamePattern = /^[^\s]{3,}$/;
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
            onSubmit={handleSubmit}
            className={styles["form-wrapper"]}
            noValidate
          >
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
              name='username'
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
              name='birthdate'
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
                (errors.password ||
                  !(formData.password === formData.confirmpassword)) &&
                styles["invalid-input"]
              }`}
            />
            {errors.password && (
              <p className={styles["input-warn"]}>
                Mínimo de 8 caracteres, pelo menos <br /> 1 letra maiúscula e 1
                minúscula
              </p>
            )}

            <input
              onChange={onChange}
              name='confirmpassword'
              type='password'
              placeholder='Confirmar Senha'
              title='Precisa coincidir com a senha do campo anterior'
              className={`${styles.input} ${styles["confirm-password-field"]} ${
                !(formData.password === formData.confirmpassword) &&
                styles["invalid-input"]
              }`}
            />

            {!(formData.password === formData.confirmpassword) && (
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
