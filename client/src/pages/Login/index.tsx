import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

import styles from "./styles.module.css";

type User = {
  name: string;
  user: string;
  birthdate: string;
  password: string;
  email: string;
  profile_photo: string;
};

export function Login() {
  const [validCredentials, setValidCredentials] = useState<User[]>([]);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [emptyCredentials, setEmptyCredentials] = useState(false);
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const { setUserDetails, setUserList } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://localhost:5000/api/v1/user")
      .then((res) => res.json())
      .then((users) => setValidCredentials(users.users))
      .catch((error) => console.log(error));
  }

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const emptyForm = !credentials.user || !credentials.password;
    setEmptyCredentials(emptyForm);
    if (emptyForm) return;

    for (let user of validCredentials) {
      if (
        user.email === credentials.user &&
        user.password === credentials.password
      ) {
        setUserDetails({
          name: user.name,
          birthdate: user.birthdate,
          email: user.email,
          profile_photo: "https://picsum.photos/200/300",
          user: user.user,
        });
        setUserList(validCredentials);

        navigate("/home");

        return;
      }
    }

    setInvalidCredentials(true);
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
