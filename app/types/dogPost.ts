export interface DogPost {
  id?: string;
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  };
  timestamp: Date;
  likes: number;
}
