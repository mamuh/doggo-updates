import { useState } from 'react';
import type { DogPost } from '../types/dogPost';

interface PostProps {
  post: DogPost;
  onLike: () => void;
}

export function Post({ post, onLike }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      onLike();
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const shouldTruncate = post.content.length > 150;
  const displayContent = shouldTruncate && !showFullContent
    ? post.content.substring(0, 150) + '...'
    : post.content;

  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
          <span className="text-amber-600 text-lg">🐕</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Zion Sitter</h3>
          <p className="text-sm text-gray-500">{formatTimeAgo(post.timestamp)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed">
          {displayContent}
          {shouldTruncate && (
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="text-amber-600 hover:text-amber-700 ml-1 font-medium"
            >
              {showFullContent ? 'Show less' : 'Show more'}
            </button>
          )}
        </p>
      </div>

      {/* Media */}
      {post.media && (
        <div className="mb-4">
          {post.media.type === 'image' ? (
            <img
              src={post.media.url}
              alt={post.media.alt}
              className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 max-h-[55vh] object-contain"
            />
          ) : (
            <video
              src={post.media.url}
              controls
              className="w-full max-w-md rounded-lg shadow-sm"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
        <button
          onClick={handleLike}
          disabled={isLiked}
          className={`flex items-center space-x-2 transition-colors duration-200 ${
            isLiked
              ? 'text-red-500 cursor-default'
              : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <span className="text-lg">
            {isLiked ? '❤️' : '🤍'}
          </span>
          <span className="text-sm font-medium">
            {post.likes}
          </span>
        </button>

        {/* <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors duration-200">
          <span className="text-lg">📤</span>
          <span className="text-sm font-medium">Share</span>
        </button> */}
      </div>
    </article>
  );
}
