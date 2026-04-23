/// <reference types="node" />
import type { Handler } from '@netlify/functions'

const BASE_URL = 'https://api.themoviedb.org/3'

export const handler: Handler = async (event) => {
  try {
    const apiKey = process.env.TMDB_API_KEY

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing API key' })
      }
    }

    // Optional: support query params like ?type=popular
    const type = event.queryStringParameters?.type || 'popular'

    const res = await fetch(
      `${BASE_URL}/movie/${type}?api_key=${apiKey}`
    )

    const data = await res.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong' })
    }
  }
}