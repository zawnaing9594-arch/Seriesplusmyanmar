export interface Episode {
  id: string;
  title: string;
  season: number;
  episodeNumber: number;
  description?: string;
  videoUrl: string;
  duration?: string;
  thumbnailUrl?: string;
}

export interface Movie {
  id: string;
  type: 'movie' | 'series';
  title: string;
  description: string;
  genre: string[];
  duration: string;
  rating: number;
  year: number;
  imageUrl: string;
  videoUrl?: string;
  cast: string[];
  director: string;
  episodes?: Episode[];
}

export interface SiteConfig {
  siteName: string;
  siteLogoUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}