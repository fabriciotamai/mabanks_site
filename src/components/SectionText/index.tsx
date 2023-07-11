// Components
import { Button } from '../Button';

export interface SectionTextProps {
  title: string;
  description: string;
  btnType: boolean;
  btnTitle: string;
  btnIcon?: React.ReactElement;
  btnColor: 'mobile' | 'desktop';
  btnUrl: string;
  titleStyle?: string;
  desStyle?: string;
  boxStyle?: string;
  btnContainerStyle?: string;
  btnStyle?: string;
}

export function SectionText({
  title,
  description,
  btnType,
  btnTitle,
  btnIcon,
  btnColor,
  btnUrl,
  desStyle,
  boxStyle,
  titleStyle,
  btnStyle,
  btnContainerStyle,
}: SectionTextProps) {
  return (
    <div className={`${boxStyle} flex flex-col gap-y-7 font-medium`}>
      <div className={`flex flex-col gap-y-4`}>
        {/* Title */}
        <h1 className={titleStyle}>{title ? title : 'Lorem ipsum dolor'}</h1>

        {/* Description */}
        <p className={desStyle}>
          {description
            ? description
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
      </div>

      {/* Button */}
      <div className={`${btnContainerStyle} flex`}>
        <Button
          type={btnType}
          title={btnTitle}
          color={btnColor}
          icon={btnIcon}
          url={btnUrl}
          btnStyle={btnStyle}
        />
      </div>
    </div>
  );
}
