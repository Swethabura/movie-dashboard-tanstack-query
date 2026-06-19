import { API_KEY, BASE_URL } from './client'

export const apiClient = async endpoint => {
  const response = await fetch(
    `${BASE_URL}${endpoint}${
      endpoint.includes('?') ? '&' : '?'
    }api_key=${API_KEY}`
  )

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}
