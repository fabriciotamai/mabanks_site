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
      <h1 className="text-lg font-semibold text-red-400">{title}</h1>
      <div className="mt-1 flex flex-row items-center gap-7">
        <a href={urlGoogle}>
          <img className="h-auto w-52" alt={altGoogle} src={iconGoogle} />
        </a>
        <a href={urlApple}>
          <img className="h-auto w-[11.6rem]" alt={altApple} src={iconApple} />
        </a>
      </div>
    </div>
  );
}
