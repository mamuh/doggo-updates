# 🐕 Doggo Updates - Dog Sitting Social Media App

A fun, Twitter-like social media app specifically designed for sharing updates about dogs you're sitting! Post photos, videos, and messages about your furry friends.

## Features

- 📝 **Text Posts**: Share updates about what the dog is doing
- 📸 **Photo Uploads**: Upload and share photos of the dog
- 🎥 **Video Uploads**: Share videos of the dog playing, eating, or just being adorable
- ❤️ **Like System**: Like posts to show appreciation
- 🎨 **Beautiful UI**: Dog-themed design with warm amber colors
- 📱 **Responsive**: Works great on desktop and mobile devices

## How to Use

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to `http://localhost:5173`

3. **Create a new post**:
   - Type your update in the text area
   - Optionally upload a photo or video
   - Click "Post Update 🐾"

4. **Interact with posts**:
   - Like posts by clicking the heart button
   - View photos and videos in the feed
   - See timestamps for when posts were made

## Technical Details

- Built with **React Router v7** and **TypeScript**
- Styled with **Tailwind CSS**
- Uses **local state** for demo purposes (posts are stored in memory)
- **File uploads** use local URLs for demo (in production, you'd upload to a service like Cloudinary or AWS S3)

## File Structure

```
app/
├── components/
│   ├── DogFeed.tsx      # Main feed component
│   └── Post.tsx         # Individual post display
├── types/
│   └── dogPost.ts       # TypeScript interfaces
├── routes/
│   └── home.tsx         # Home page route
└── app.css              # Global styles
```

## Customization

- **Mock Data**: Edit the `mockPosts` array in `DogFeed.tsx` to change the initial posts
- **Styling**: Modify colors and themes in `app.css` and component files

## Future Enhancements

- User authentication
- Real database storage
- Comments system
- Real-time updates
- Multiple dog profiles
- Photo/video galleries
- Push notifications

Enjoy sharing your dog sitting adventures! 🐾
