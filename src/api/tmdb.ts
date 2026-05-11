const BASE_URL =
  import.meta.env.DEV
    ? 'http://localhost:8888/.netlify/functions'
    : 'https://movietab-extension.netlify.app/.netlify/functions'

export async function fetchMovies(type = 'popular') {
  const res = await fetch(`${BASE_URL}/movies?type=${type}`)
  const data = await res.json()
  return data.results
}
