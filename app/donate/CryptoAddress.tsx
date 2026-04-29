import { QRcode } from "./page";

export const CryptoAddress = ({
  name,
  address,
  network,
}: {
  name: string;
  address: string;
  network?: string;
}) => {
  const title = (
    <div className="flex items-center gap-2">
      <h3 className="font-bold text-lg">{name}</h3>
      {network && (
        <span className="text-xs bg-skill-background text-skill-foreground px-2 py-0.5 rounded-full">
          {network}
        </span>
      )}
    </div>
  );
  return (
    <div className="bg-secondary rounded-xl p-4 flex flex-col gap-2">
      <div className="px-2">{title}</div>
      <div className="grow flex gap-2">
        <div className="text-primary p-2 bg-background rounded-lg">
          <QRcode value={address} width={128} />
        </div>
        <code className="text-sm grow break-all bg-background rounded-lg p-2 select-all cursor-pointer border border-secondary">
          {address}
        </code>
      </div>
    </div>
  );
};
