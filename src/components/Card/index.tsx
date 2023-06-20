// Components
import { Button } from '../Button';

interface CardProps {
  type?: 'bgNone' | 'bgImage';
  title: string;
  description: string;
  mainContainerStyle?: string;
  mainContainerImage?: string;
  logo?: string;
  image?: string;

  btnType: boolean;
  btnTitle: string;
  btnColor: 'mobile' | 'desktop';
  btnUrl: string;

  titleStyle?: string;
  descStyle?: string;
  logoStyle?: string;
  btnIcon: React.ReactElement;
  btnContainerStyle?: string;
}

export function Card({
  type,
  titleStyle,
  descStyle,
  logoStyle,
  logo,
  btnContainerStyle,
  btnType,
  btnTitle,
  btnColor,
  btnUrl,
  btnIcon,
  title,
  description,
  mainContainerStyle,
  mainContainerImage,
  image,
}: CardProps) {
  const cardVariants = {
    bgNone: '',
    bgImage: `${mainContainerImage} bg-cover bg-center bg-no-repeat`,
  };

  const validType = type ?? 'bgNone';
  const selectVariant = cardVariants[validType] || cardVariants['bgNone'];

  return (
    <div
      className={`${selectVariant} ${
        mainContainerStyle ? mainContainerStyle : 'bg-stone-900'
      } relative flex flex-col justify-end overflow-hidden pb-6 pl-6 pt-20 text-base text-white`}
    >
      <div className="absolute left-0 top-0 z-[5] h-full w-full bg-black/10" />
      {/* ----------- Title & Logo -----------*/}
      <div className="z-10 flex flex-col flex-wrap">
        <img
          src={logo}
          width={150}
          height={'auto'}
          className={`${logoStyle} mb-10`}
        />

        <h1 className={`${titleStyle} font-Syne text-xl font-medium`}>
          {title}
        </h1>
      </div>

      {/* ----------- Button & Description -----------*/}
      <div className="z-10 mt-10 flex flex-col flex-wrap">
        <p className={`${descStyle} mb-5`}>{description}</p>

        <div className={`${btnContainerStyle} flex`}>
          <Button
            type={btnType}
            title={btnTitle}
            color={btnColor}
            url={btnUrl}
            icon={btnIcon}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-end overflow-hidden">
        <div className="absolute left-0 top-0 z-[5] h-full w-full bg-black/10" />

        {type === 'bgNone' && (
          <div className="h-full w-80 hover:scale-[110%]" data-aos="fade-left">
            <div className={`h-full w-full ${image} bg-cover bg-no-repeat`} />
          </div>
        )}
      </div>
    </div>
  );
}
