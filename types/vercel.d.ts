import { NextRequest } from 'next/server'

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      city?: string
      country?: string
      region?: string
      latitude?: string
      longitude?: string
      timezone?: string
      countryRegion?: string
    }
  }
}