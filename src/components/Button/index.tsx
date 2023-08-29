interface ButtonProps {
  type: boolean;
  title: string;
  icon?: React.ReactElement;
  style?: string;
  color: 'mobile' | 'desktop';
  url: string;
  btnStyle?: string;
}

export function Button({
  type,
  title,
  icon,
  color,
  url,
  btnStyle,
}: ButtonProps) {
  const colorVariants = {
    mobile:
      'delay-5 transition ease-in-out bg-neutral-900 text-white hover:border-transparent hover:bg-white hover:text-neutral-950',
    desktop: type
      ? 'delay-5 transition ease-in-out bg-transparent text-white hover:border-transparent hover:bg-white hover:text-neutral-950'
      : `${btnStyle} delay-5 transition ease-in-out`,
  };

  return type ? (
    <a
      href={url}
      className={`${colorVariants[color]} ${btnStyle} flex items-center justify-center gap-2 rounded border-2  px-4 py-2`}
    >
      <p className="text-sm">{title}</p>
      {icon}
    </a>
  ) : (
    <a
      href={url}
      id="button"
      className={`${colorVariants[color]} flex items-center justify-center gap-2 rounded border-transparent px-4 py-4`}
    >
      <p className="text-sm">{title}</p>
      <span>{icon}</span>
    </a>
  );
}
