import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { jwtDecode } from "jwt-decode";

import styles from "./styles.module.css";
import { api } from "../../services/api";

type User = {
  _id: string;
  name: string;
  username: string;
  birthdate: string;
  email: string;
  profile_photo: string;
};

export function Login() {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [emptyCredentials, setEmptyCredentials] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { setUserDetails } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const emptyForm = !credentials.email || !credentials.password;
    setEmptyCredentials(emptyForm);
    if (emptyForm) return;

    try {
      const {
        status,
        data: { token },
      } = await api
        .post("/api/v1/users/login", credentials)
        .then((response) => response);

      if (status === 201) {
        localStorage.setItem("token", token);
        const userInfo: User = jwtDecode(token);
        setUserDetails(userInfo);
        navigate("/home");
        return;
      }

      setInvalidCredentials(true);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setInvalidCredentials(true);
      } else {
        console.log(error);
        alert(
          "Ops, algo não ocorreu como esperado. Não foi possível conectar com o servidor!"
        );
      }
    }
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
              name='email'
              type='text'
              placeholder='Usuário'
              className={`${styles.input} ${styles["user-field"]} ${invalidCredentials && styles["invalid-credentials"]
                }`}
              onChange={onChange}
            />

            <input
              name='password'
              type='password'
              placeholder='Senha'
              className={`${styles.input} ${styles["password-field"]} ${invalidCredentials && styles["invalid-credentials"]
                }`}
              onChange={onChange}
            />

            {invalidCredentials && (
              <p className={styles["invalid-credentials-warn"]}>
                Usuário e/ou Senha inválidos.
                <br /> Por favor, tente novamente!
              </p>
            )}

            {emptyCredentials && (
              <p className={styles["invalid-credentials-warn"]}>
                Insira Usuário e Senha válidos!
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
