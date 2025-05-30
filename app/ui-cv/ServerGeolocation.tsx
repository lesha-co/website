import { getGeolocation, getCountryFlag, isValidCountry } from '../../lib/geolocation'

interface ServerGeolocationProps {
  className?: string
}

export async function ServerGeolocation({ className = '' }: ServerGeolocationProps) {
  const geoData = await getGeolocation()
  
  if (!isValidCountry(geoData.country)) {
    return (
      <div className={`text-sm text-gray-500 dark:text-gray-500 ${className}`}>
        🌍 Location unavailable
      </div>
    )
  }

  return (
    <div className={`text-sm ${className}`}>
      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <span className="text-base">{getCountryFlag(geoData.country)}</span>
        <span>Visitor from {geoData.country}</span>
      </div>
    </div>
  )
}