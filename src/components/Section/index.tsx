// Components
import { SectionText, SectionTextProps } from '../SectionText';

interface Props extends SectionTextProps {
  bgStyle: string;
}
export function Section({ bgStyle, ...rest }: Props) {
  return (
    <div className="grid h-[100%] grid-cols-1 flex-wrap bg-red-400 pt-10 lg:h-[620px] lg:grid-cols-2 lg:pt-0">
      <div className="mx-auto flex max-w-[96%] flex-col justify-center pb-10 pl-10 lg:pb-0 xl:max-w-[58%] xl:pl-[15%]">
        <SectionText {...rest} />
      </div>

      <div
        className={`${bgStyle} h-[400px] max-h-[850px] overflow-hidden bg-cover bg-center bg-no-repeat object-cover lg:h-auto`}
      />
    </div>
  );
}
