interface ButtonProps {
  type: boolean;
  title: string;
  icon?: React.ReactElement;
  style?: string;
  color: 'mobile' | 'desktop';
  url: string;
}

export function Button({ type, title, icon, color, url }: ButtonProps) {
  const colorVariants = {
    mobile:
      'delay-5 transition ease-in-out bg-neutral-900 text-white hover:border-transparent hover:bg-white hover:text-neutral-900',
    desktop: type
      ? 'delay-5 transition ease-in-out bg-transparent text-white hover:border-transparent hover:bg-red-500'
      : 'delay-5 transition ease-in-out bg-red-400 text-white hover:bg-red-500',
  };

  return type ? (
    <a
      href={url}
      className={`${colorVariants[color]} flex items-center justify-center gap-2 rounded border-2  px-4 py-2`}
    >
      <p className="text-sm">{title}</p>
      {icon}
    </a>
  ) : (
    <a
      href={url}
      id="button"
      className={`${colorVariants[color]} flex items-center justify-center gap-2 rounded border-2 border-transparent px-4 py-2`}
    >
      <p className="text-sm">{title}</p>
      <span>{icon}</span>
    </a>
  );
}
