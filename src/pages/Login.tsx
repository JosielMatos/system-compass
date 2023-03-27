import { Form } from "../components/Form";
import { Header } from "../components/Header";

export function Login() {
  const text = "Para continuar navegando de forma segura, efetue o login";

  return (
    <main>
      <Header text={text} />
      <Form />
    </main>
  );
}
