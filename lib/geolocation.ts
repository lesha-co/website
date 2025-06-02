import { headers } from "next/headers";

export interface GeolocationData {
  country: string;
}

async function getGeolocation(): Promise<GeolocationData> {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "Unknown";

  return {
    country,
  };
}

export async function usePhotoDisabled() {
  const { country } = await getGeolocation();

  return ["US", "GB", "IE", "NL", "CA", "AU", "NZ", "SE", "FR"].includes(
    country,
  );
}

export async function useLanguage(): Promise<Localization> {
  const { country } = await getGeolocation();
  const lang = ["RU"].includes(country) ? "ru" : "en";
  return lang;
}

export function isValidCountry(country: string): boolean {
  return country !== "Unknown" && country.length > 0;
}
