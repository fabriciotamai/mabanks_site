import { ChangeEvent, FormEvent, useState } from 'react';
import Swal from 'sweetalert2';

// API
import { sendEmail } from '../../api/sendEmail';

// Components
import { Input } from '../../components/Input';

export function ContactFrom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  /* ----------- Messages -----------*/
  const messages = {
    inputEmpty:
      'Por favor, preencha todos os campos obrigatórios antes de enviar. Os campos em branco não serão aceitos.',
    emailInvalid:
      'O email inserido é inválido. Por favor, forneça um endereço de email válido e tente novamente.',
    success:
      'Agradeço por entrar em contato conosco! Recebemos o seu email e responderemos o mais breve possível. Obrigado pela sua paciência.',
  };

  /* ----------- Set Phone to number -----------*/
  function handlePhone(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    if (inputValue !== numericValue) {
      setError((rest) => ({
        ...rest,
        phone: true,
      }));
    } else {
      setError((rest) => ({
        ...rest,
        phone: false,
      }));
    }
    setPhone(numericValue);
  }

  /* ----------- Verify e-mail is valid e-mail -----------*/
  function isValidEmail(email: string) {
    const emailRegex = /.*@.*\..*/;
    return emailRegex.test(email);
  }

  /* ----------- Send E-mail and validate form -----------*/
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !phone || !message) {
      Swal.fire({
        icon: 'info',
        text: `${messages.inputEmpty}`,
      });

      setError({
        name: true,
        email: true,
        phone: true,
        message: true,
      });
    } else if (!isValidEmail(email)) {
      setError((rest) => ({
        ...rest,
        email: true,
      }));

      Swal.fire({
        icon: 'info',
        text: `${messages.emailInvalid}`,
      });
    } else {
      sendEmail(event, name, email, phone, message);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      setError({
        name: false,
        email: false,
        phone: false,
        message: false,
      });

      Swal.fire({
        icon: 'success',
        text: `${messages.success}`,
      });
    }
  }

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
        error={error.name}
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={error.email}
      />
      <Input
        placeholder="Telefone: (DDD) 00000-0000"
        value={phone}
        type="text"
        onChange={handlePhone}
        error={error.phone}
      />

      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Mensagem"
        className={`${
          error.message ? 'border-red-400' : 'border-neutral-200'
        } box-border h-40 appearance-none rounded
        border-[2px]
        border-neutral-200 bg-neutral-100 px-4
        pt-2 text-base text-neutral-900 focus:border-2 focus:border-neutral-500 focus:outline-none`}
      />

      <div className="mt-2 flex justify-center lg:justify-start">
        <button
          type="submit"
          className="delay-5 flex items-center justify-center gap-2 rounded bg-neutral-900 px-4 py-2 text-white transition ease-in-out hover:border-transparent hover:bg-neutral-800"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
