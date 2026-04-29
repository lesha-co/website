import { useConfig } from "@/lib/useConfig";
import { Metadata } from "next";
import Link from "next/link";
import MainLayout from "../main";
import * as qrcode from "qrcode";
import { CryptoAddress } from "./CryptoAddress";
import { LinkDonation } from "./LinkDonation";

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

export async function QRcode({
  value,
  width,
}: {
  value: string;
  width: number;
}) {
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

  return <div dangerouslySetInnerHTML={{ __html }} />;
}

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
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
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
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
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
