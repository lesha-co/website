import { headers } from 'next/headers'

export interface GeolocationData {
  country: string
}

export async function getGeolocation(): Promise<GeolocationData> {
  const headersList = await headers()
  const country = headersList.get('x-vercel-ip-country') || 'Unknown'

  return {
    country
  }
}

export function getCountryFlag(countryCode: string): string {
  if (countryCode === 'Unknown' || countryCode.length !== 2) {
    return '🌍'
  }
  
  // Convert country code to flag emoji
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  
  return String.fromCodePoint(...codePoints)
}



export function isValidCountry(country: string): boolean {
  return country !== 'Unknown' && country.length > 0
}

