import type { Game, News } from "./types";

export const createPost = (data: Game | News) => ({
  title: data.title,
  image: data.thumbnail,
  description: data.short_description,
  url: (data as Game)?.game_url
})

export const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet justo ut vehicula facilisis. Nam facilisis at dui ac faucibus. Suspendisse commodo placerat risus, sed venenatis lectus facilisis vitae.'

