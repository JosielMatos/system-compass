import { Button } from "../Button";

export function Form() {
  function validate() {
    //Todo
  }

  return (
    <form onSubmit={validate}>
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <Button placeholder="Logar-se" />
    </form>
  )
}