// Icons
import { Users2 } from 'lucide-react';

interface SectionCardProps {
  title: string;
  description: string;
  icon?: React.ReactElement;
  titleStyle?: string;
  descStyle?: string;
  bgIconStyle?: string;
}

export function SectionCard({ title, description, icon, titleStyle, descStyle, bgIconStyle }: SectionCardProps) {
  return (
    <div className="section-card">
      {/* Icon */}
      <div className={`${bgIconStyle} mb-5 inline-block rounded-full border-2 p-5`}>
        {icon ? icon : <Users2 width={25} height={25} />}
      </div>

      {/* Texts */}
      <div className="flex flex-col">
        <div className="flex w-96 flex-col gap-4">
          <h1 className={`${titleStyle} w-[65%] font-semibold`}>{title}</h1>
          <p className={`${descStyle} text-[0.9rem] text-base`}>{description}</p>
        </div>
      </div>
    </div>
  );
}
