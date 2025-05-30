import { headers } from "next/headers";

export interface GeolocationData {
  country: string;
}

export async function getGeolocation(): Promise<GeolocationData> {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "Unknown";

  return {
    country,
  };
}

export function isValidCountry(country: string): boolean {
  return country !== "Unknown" && country.length > 0;
}
