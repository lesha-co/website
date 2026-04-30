import clsx from "clsx";
import * as qrcode from "qrcode";

export const CryptoAddress = async ({
  name,
  address,
  network,
}: {
  name: string;
  address: string;
  network?: string;
}) => {
  const svg = await qrcode.toString(address, {
    color: {
      dark: "#654321",
      light: "#123456",
    },
    type: "svg",
    width: 128,
    margin: 0,
  });

  const __html = svg
    .replace("#654321", "currentColor")
    .replace("#123456", "transparent");

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
      <div
        className={clsx(
          "text-primary p-2 max-w-full",
          "flex justify-center items-center",
          "aspect-square bg-background rounded-lg",
          "*:aspect-square *:w-full *:h-full",
        )}
        dangerouslySetInnerHTML={{ __html }}
      ></div>
      <code className="text-sm grow break-all bg-background rounded-lg p-2 select-all cursor-pointer border border-secondary">
        {address}
      </code>
    </div>
  );
};
