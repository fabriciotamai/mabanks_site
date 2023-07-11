interface HorizontalTableProps {
  title: string;
  text?: string;
  icon1: React.ReactElement | string;
  icon2: React.ReactElement | string;
  icon3: React.ReactElement | string;
  type: 'left' | 'mid' | 'right';
}

export function HorizontalTable({
  title,
  icon1,
  icon2,
  icon3,
  type,
}: HorizontalTableProps) {
  return (
    <>
      <tr>
        <td
          className="sm:text-md w-[30%] border-b-[1px] border-neutral-50/30 pb-5 pt-5
        text-sm text-neutral-200/80"
        >
          {title}
        </td>
        <td
          className={`${
            type == 'left' ? 'text-neutral-900' : 'text-neutral-100/30'
          } sm:text-md w-[29%] border-b-[1px]
        border-neutral-50/30 pb-5 pt-5 text-center text-sm`}
        >
          <div className="flex justify-center">{icon1}</div>
        </td>
        <td
          className={`${
            type == 'mid' ? 'text-neutral-900' : 'text-neutral-100/30'
          } sm:text-md w-[29%] border-b-[1px]
        border-neutral-50/30 pb-5 pt-5 text-center text-sm`}
        >
          <div className="flex justify-center ">{icon2}</div>
        </td>
        <td
          className={`${
            type == 'right' ? 'text-neutral-900' : 'text-neutral-100/30'
          } sm:text-md border-b-[1px]
        border-neutral-50/30 pb-5 pt-5 text-center text-sm`}
        >
          <div className="flex justify-center">{icon3}</div>
        </td>
      </tr>
    </>
  );
}
