export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  status?: string;
  short_description: string;
  description?: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  profile_url: string;
  minimum_system_requirements?: MinimumSystemRequirements;
  screenshots?: Screenshots[] | null;
}

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Screenshots {
  id: number;
  image: string;
}

export interface News {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  main_image: string;
  article_content: string;
  article_url: string;
}
