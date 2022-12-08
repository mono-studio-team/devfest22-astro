import type { Game, News } from "./types"
import qs from 'qs'

type Config = {
  params?: Record<string, string>
  method?: 'GET' | 'POST'
}

const api = <T>(url: string, config?: Config) => {
  const params = qs.stringify(config?.params)

  return fetch(
    `${url}?${params}`,
    { method: config?.method }
  )
  .then(response => response.json() as Promise<T>)
}

type Params = 'platform' & 'category' & 'sort-by'

export const games = (params?: Record<Params, string>) =>
  api<Game[]>('https://www.mmobomb.com/api1/games', { params })

export const news = () => api<News[]>('https://www.mmobomb.com/api1/latestnews')
