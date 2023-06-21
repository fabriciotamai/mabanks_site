interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputStyle?: string;
}

export function Input({ error, inputStyle, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={`${
        error ? 'border-2 border-red-400' : 'border-[1px] border-neutral-200'
      } ${inputStyle} box-border h-12
        appearance-none
        rounded bg-neutral-100 px-4
        text-base text-neutral-900 focus:border-2 focus:border-neutral-500 focus:outline-none`}
    />
  );
}
