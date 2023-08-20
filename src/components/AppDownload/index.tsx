interface AppDownloadProps {
  title: string;
  urlGoogle: string;
  altGoogle: string;
  iconGoogle: string;
  urlApple: string;
  altApple: string;
  iconApple: string;
}

export function AppDownload({
  title,
  urlGoogle,
  urlApple,
  altGoogle,
  altApple,
  iconGoogle,
  iconApple,
}: AppDownloadProps) {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold text-[#828282]">{title}</h1>
      <div className="mt-1 flex flex-row items-center gap-7">
        <a href={urlGoogle}>
          <img  alt={altGoogle} src={iconGoogle} width={120} height={40} />
        </a>
        <a href={urlApple}>
          <img  alt={altApple} src={iconApple}  width={120} height={40} />
        </a>
      </div>
    </div>
  );

}
