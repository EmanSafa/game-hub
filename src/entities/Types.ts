export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  released: string;
  background_image: string;
  ratings: number;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  ratings: number;
  slug: string;
  platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
}
export interface Publisher {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
