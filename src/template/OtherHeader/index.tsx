// Components
import { SectionText, SectionTextProps } from '../../components/SectionText';

interface Props extends SectionTextProps {
  bgUrl?: string;
}

export function OtherHeader({ bgUrl, ...rest }: Props) {
  return (
    <>
      <div className="relative h-[70vh] w-full sm:h-[60vh]">
        <div className="absolute left-0 top-0 z-[1] h-[70vh] w-full bg-black/40 sm:h-[60vh]" />
        {/* Video */}
        <img
          src={bgUrl}
          className="absolute left-0 top-0 h-full w-full object-cover"
        ></img>

        {/* SectionText component */}
        <div className="absolute bottom-0 left-[10%] right-0 top-0 z-[1] flex items-center sm:left-[18%]">
          <SectionText {...rest} />
        </div>
      </div>
    </>
  );
}
