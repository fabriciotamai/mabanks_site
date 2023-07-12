// Icons
import { MoveLeft } from 'lucide-react';

// Icons
import iconError from '/assets/icons/404.svg';

// Components
import { Button } from '../../components/Button';

export function PageNotFound() {
  return (
    <div className="lex-col flex h-[100%] min-h-[100vh] flex-wrap items-center justify-center text-stone-900">
      <div className="flex flex-col items-center justify-center">
        {/* ----------- SVG 404 error-----------*/}
        <object
          type="image/svg+xml"
          data={iconError}
          width={650}
          className="w-[90%] sm:w-[100%]"
        />

        {/* ----------- Text error & Button back -----------*/}
        <div className="mt-10 flex w-full flex-col items-center justify-center">
          <h1 className="mb-3 px-3 text-center font-Syne text-2xl font-bold sm:text-5xl">
            Ma <span className="border-b-2 border-red-500">Banks</span>
          </h1>

          <h1 className="px-3 text-center font-Syne text-2xl font-medium sm:text-3xl">
            Ops! Página não encontrada.
          </h1>

          <p className="mt-3 px-3 text-center font-Syne text-lg text-stone-800">
            Desculpe, a página que você está procurando não existe.
          </p>

          <Button
            type={true}
            title="IR PARA INICIO"
            color="mobile"
            url="/"
            icon={<MoveLeft />}
            btnStyle="border-black hover:bg-cyan-500 mt-7"
          />
        </div>
      </div>
    </div>
  );
}
