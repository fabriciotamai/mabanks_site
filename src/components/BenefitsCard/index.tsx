interface BenefitsCardProps {
  title: string;
  icon?: React.ReactElement;
  textStyle?: string;
}

export function BenefitsCard({ title, icon, textStyle }: BenefitsCardProps) {
  return (
    <div className="flex flex-row items-center gap-3 border-b-2 border-b-stone-300 pb-3 pt-3">
      {icon}

      <div
        className={`${
          textStyle ? textStyle : 'text-md font-normal text-neutral-600'
        }`}
      >
        <p>{title}</p>
      </div>
    </div>
  );
}
