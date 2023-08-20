import { Link } from 'react-router-dom';

// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function FormRegister() {
  return (
    <div className="flex flex-col rounded bg-white p-10 shadow">
      {/* ----------- Title -----------*/}
      <h1 className="text-md mb-10 flex justify-center font-medium text-neutral-950">
        <b>CADASTRE</b>
        <span className="ml-2 border-b-2 border-[#383535]">UMA CONTA</span>
      </h1>

      {/* ----------- Form login -----------*/}
      <div className="flex flex-col">
        <form>
          {/* Input Nome & sobrenome */}
          <div className="email mb-5 flex flex-col justify-between xl:flex-row">
            {/* Input Nome */}
            <div className="name flex flex-col">
              <label
                htmlFor="name"
                className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
              >
                Nome
              </label>
              <Input id="name" placeholder="Fulano" />
            </div>

            {/* Input sobrenome */}
            <div className="name mt-5 flex flex-col xl:mt-0">
              <label
                htmlFor="sobrenome"
                className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
              >
                Sobrenome
              </label>
              <Input id="sobrenome" placeholder="sobrenome" />
            </div>
          </div>

          {/* Input telefone */}
          <div className="email mb-5 flex flex-col">
            <label
              htmlFor="phone"
              className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
            >
              Telefone
            </label>
            <Input id="phone" placeholder="(41) 000000-000" />
          </div>

          {/* Input e-mail */}
          <div className="email mb-5 flex flex-col">
            <label
              htmlFor="email"
              className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
            >
              E-mail
            </label>
            <Input id="email" placeholder="seu@email.com" />
          </div>

          {/* Input CPF */}
          <div className="email mb-5 flex flex-col">
            <label
              htmlFor="cpf"
              className="text-base text-neutral-950 after:text-red-400 after:content-['*']"
            >
              CPF
            </label>
            <Input id="cpf" placeholder="000.000.000-00" />
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
        <Button
          type={false}
          title="Cadastrar"
          color="desktop"
          url="#"
          btnStyle="bg-neutral-950 text-white hover:bg-neutral-950/50 hover:bg-neutral-800"
        />
      </div>

      {/* ----------- Change password button -----------*/}
      <div className="flex justify-center">
        <Link
          to="/login"
          className="w-1/11 mt-6 flex justify-center border-b-2
          border-[#333232] text-neutral-950/75 hover:border-red-500 hover:text-neutral-950"
        >
          Já tem uma conta? Entrar
        </Link>
      </div>
    </div>
  );
}
