import type { Game, News } from "./types";

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const isGame = (pet: Game | News): pet is Game => {
  return (<Game>pet).game_url !== undefined;
};

export const createPost = (data: Game | News) => ({
  id: data.id,
  title: data.title,
  image: data.thumbnail,
  description: data.short_description,
  url: isGame(data) ? `/games/${slugify(data.title)}` : undefined,
});

export const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet justo ut vehicula facilisis. Nam facilisis at dui ac faucibus. Suspendisse commodo placerat risus, sed venenatis lectus facilisis vitae.";
