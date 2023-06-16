// Components
import { Button } from '../Button';

interface SectionTextProps {
  title: string;
  description: string;
  btnType: boolean;
  btnTitle: string;
  btnIcon: React.ReactElement;
  btnColor: 'mobile' | 'desktop';
  btnUrl: string;
  descStyle: 'full' | 'md' | 'sm';
  titleStyle: 'full' | 'md' | 'sm';
}

export function SectionText({
  title,
  description,
  btnType,
  btnTitle,
  btnIcon,
  btnColor,
  btnUrl,
  descStyle,
  titleStyle,
}: SectionTextProps) {
  const textVariants = {
    full: '',
    md: 'w-1/4',
    sm: 'w-1/3',
  };

  return (
    <div className="flex flex-col gap-y-7 text-base">
      <div className={`${textVariants[titleStyle]} flex flex-col gap-y-4`}>
        <h1 className="text-xl font-semibold">{title ? title : 'Lorem ipsum dolor'}</h1>
        <p className={`${textVariants[descStyle]}`}>
          {description ? description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
      </div>

      <Button type={btnType} title={btnTitle} color={btnColor} icon={btnIcon} url={btnUrl} />
    </div>
  );
}
