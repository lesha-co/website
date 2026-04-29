import { useConfig } from "@/lib/useConfig";
import { Metadata } from "next";
import Link from "next/link";
import MainLayout from "../main";
import * as qrcode from "qrcode";

export async function generateMetadata(): Promise<Metadata> {
  const cv = await useConfig();
  return {
    title: `Donate — ${cv.personal.name}`,
    description:
      "Support my work — if you found my projects or content helpful, consider a donation.",
    icons: {
      icon: "/favicon.png",
    },
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-16 mb-3">
    <h2>{children}</h2>
  </div>
);

const LinkDonation = ({ title, href }: { title: string; href: string }) => (
  <div className="bg-secondary rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center text-accent">
        <LinkIcon />
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="button inline-block text-center px-4 py-2 bg-button-background text-button-foreground hover:bg-button-hover-background rounded-lg transition-colors duration-200"
    >
      {title} ↗
    </Link>
  </div>
);

async function QRcode({ value, width }: { value: string; width: number }) {
  const svg = await qrcode.toString(value, {
    color: {
      dark: "#654321",
      light: "#123456",
    },
    type: "svg",
    width,
    margin: 0,
  });

  const __html = svg
    .replace("#654321", "currentColor")
    .replace("#123456", "transparent");

  return (
    <div
      className="text-primary p-2 bg-background rounded-lg"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

const CryptoAddress = ({
  name,
  address,
  network,
}: {
  name: string;
  address: string;
  network?: string;
}) => (
  <div className="bg-secondary rounded-xl p-4 flex gap-2">
    <div className="grow flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-lg">{name}</h3>
        {network && (
          <span className="text-xs bg-skill-background text-skill-foreground px-2 py-0.5 rounded-full">
            {network}
          </span>
        )}
      </div>

      <code className="text-sm grow break-all bg-background rounded-lg p-2 select-all cursor-pointer border border-secondary">
        {address}
      </code>
    </div>

    <QRcode value={address} width={128} />
  </div>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 inline-block text-accent"
    fill="currentColor"
  >
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-10 h-10"
    fill="currentColor"
  >
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  </svg>
);

export default async function DonatePage() {
  const config = await useConfig();

  return (
    <MainLayout
      hello={
        <div>
          <div className="mb-4">
            <Link
              href="/"
              className="text-accent hover:underline text-sm inline-flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
              Back to main page
            </Link>
          </div>
          <div className="font-bold text-4xl mb-2">
            <h1>
              Support my work <HeartIcon />
            </h1>
          </div>
          <p className="text-lg text-foreground/70 mb-2">
            If you found my projects, open-source contributions, or content
            helpful — thank you! Your support helps me keep building and
            sharing.
          </p>
        </div>
      }
      sidebar={<div />}
      main={
        <>
          <H2>Quick and easy</H2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {config.donations.map((d) =>
              "url" in d ? (
                <LinkDonation
                  key={d.title + d.url}
                  title={d.title}
                  href={d.url}
                />
              ) : null,
            )}
          </div>

          <H2>Crypto</H2>
          <p className="text-foreground/70 mb-6">
            Click an address to select it, then copy to your clipboard.
          </p>
          <div className="grid gap-4 grid-cols-2">
            {config.donations.map((d) =>
              "address" in d ? (
                <CryptoAddress
                  key={d.token + (d.network ?? "") + d.address}
                  name={d.token}
                  address={d.address}
                  network={"network" in d ? d.network : undefined}
                />
              ) : null,
            )}
          </div>

          <div className="mt-20 text-center text-foreground/50 text-sm">
            <p>Thank you!</p>
          </div>
        </>
      }
    />
  );
}
