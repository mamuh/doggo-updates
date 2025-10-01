import { useState } from 'react';
import { Post } from './Post';
import type { DogPost } from '../types/dogPost';

// Helper function to easily create timestamps
// Usage: createTimestamp('2024-01-15', '14:30') or createTimestamp('2024-01-15', '2:30 PM')
const createTimestamp = (date: string, time: string): Date => {
  // Handle 12-hour format (e.g., "2:30 PM")
  if (time.includes('AM') || time.includes('PM')) {
    return new Date(`${date} ${time}`);
  }
  // Handle 24-hour format (e.g., "14:30")
  return new Date(`${date}T${time}`);
};

// Helper function for relative time (easier to use)
// Usage: hoursAgo(2), daysAgo(1), minutesAgo(30)
const hoursAgo = (hours: number): Date => new Date(Date.now() - hours * 60 * 60 * 1000);
const daysAgo = (days: number): Date => new Date(Date.now() - days * 24 * 60 * 60 * 1000);
const minutesAgo = (minutes: number): Date => new Date(Date.now() - minutes * 60 * 1000);

const mockPosts: DogPost[] = [
  {
    content: "Zion já no quinto sono e roncando 😴",
    timestamp: createTimestamp('2025-09-30', '22:29'),
    likes: 1
  },
  {
    content: "Quinto e ultimo passeio do dia 🐕",
    timestamp: createTimestamp('2025-09-30', '21:00'),
    likes: 2
  },
  {
    content: "Zion jantado e feliz 🍖",
    timestamp: createTimestamp('2025-09-30', '19:20'),
    likes: 1
  },
  {
    content: "Zion acordando lindo como sempre",
    media: {
      type: 'image',
      url: 'https://i.postimg.cc/90rkrkbb/IMG-1969-1.jpg',
      alt: 'Golden retriever on a walk'
    },
    timestamp: createTimestamp('2025-09-30', '07:36'),
    likes: 12
  },
];

export function DogFeed() {
  const [posts, setPosts] = useState<DogPost[]>(mockPosts);

  const likePost = (postId: number) => {
    setPosts(prev =>
      prev.map((post, index) =>
        index === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-600 mb-2">🦁 Zion News</h1>
        <p className="text-gray-400">O feed diário do melhor doguinho do mundo</p>
      </header>

      <div className="space-y-6 mt-8">
        {posts.map((post, index) => (
          <Post
            key={index}
            post={post}
            onLike={() => likePost(index)}
          />
        ))}
      </div>
    </div>
  );
}
