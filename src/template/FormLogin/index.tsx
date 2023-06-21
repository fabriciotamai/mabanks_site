// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function FormLogin() {
  return (
    <div className="flex flex-col rounded bg-white p-10 shadow">
      {/* ----------- Title -----------*/}
      <h1 className="text-md mb-10 flex justify-center font-medium text-neutral-950">
        <b>ACESSE</b>
        <span className="ml-2 border-b-2 border-red-400">SUA CONTA</span>
      </h1>

      {/* ----------- Form login -----------*/}
      <div className="flex flex-col">
        <form>
          {/* Input e-mail */}
          <div className="email mb-5 flex flex-col">
            <label
              htmlFor="login"
              className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
            >
              E-mail
            </label>
            <Input id="login" placeholder="seu@email.com" />
          </div>

          {/* Input password */}
          <div className="email flex flex-col">
            <label
              htmlFor="password"
              className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
            >
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
        </form>
      </div>

      {/* ----------- Form Button -----------*/}
      <div className="button mt-10">
        <Button type={false} title="Entrar" color="desktop" url="#" />
      </div>

      {/* ----------- Change password button -----------*/}
      <div className="flex justify-center">
        <a
          href="#"
          className="w-1/11 mt-6 flex justify-center border-b-2
          border-red-400 text-neutral-950/75 hover:border-red-500 hover:text-neutral-950"
        >
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  );
}
