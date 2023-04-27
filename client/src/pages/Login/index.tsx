import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { UserContext } from "../../contexts/userContext";

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
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const { userDetails, setUserDetails, setUserFriends } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://localhost:5000/api/v1/user")
      .then((res) => res.json())
      .then((users) => setValidCredentials(users.users));
  }

  const navigate = useNavigate();

  //Submit credentials
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    for (let user of validCredentials) {
      if (
        user.email === credentials.user &&
        user.password === credentials.password
      ) {
        setUserDetails({
          name: user.name,
          birthdate: user.birthdate,
          email: user.email,
          profile_photo: "https://wallpapercave.com/wp/wp7151807.jpg",
          user: user.user,
        });
        setUserFriends(validCredentials)

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
