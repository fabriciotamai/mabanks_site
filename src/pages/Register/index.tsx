import { Link } from 'react-router-dom';

// Icons
import { ArrowLeft } from 'lucide-react';

// Templates
import { FormRegister } from '../../template/FormRegister';

export function Register() {
  return (
    <div className="content h-[100vh]">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* ----------- Section Image & button back -----------*/}
        <div className="relative grid h-64 grid-cols-1 bg-[url('/assets/images/register-bg.jpg')] bg-cover bg-no-repeat md:h-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/60" />

          <Link
            to="/"
            className="back absolute flex h-20 w-32 flex-row items-center justify-center text-white"
          >
            <ArrowLeft />
            <p className="pl-1 text-lg">Voltar</p>
          </Link>

          <div className="flex flex-col items-center justify-center">
            <h1 className="z-10 mt-10 w-[70%] font-Syne text-xl font-semibold text-red-400 sm:mt-0 md:w-1/2 md:text-4xl">
              JUNTE-SE E DESFRUTE DA LIBERDADE FINANCEIRA
            </h1>
          </div>
        </div>

        {/* ----------- Section Form login -----------*/}
        <div className="mt-10 grid h-full grid-cols-1 items-center justify-items-center bg-white md:mt-0">
          <div className="flex w-full max-w-md flex-col px-2 sm:max-w-xl">
            <h1 className="mb-12 text-center font-Syne text-xl font-bold text-neutral-950">
              <b className="mr-1 border-b-2 border-r-2 border-red-400 pr-1">
                MA BANKS
              </b>
              Internet Banking
            </h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
