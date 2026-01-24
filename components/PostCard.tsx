
import React, { useState } from 'react';
import { 
  ThumbsUp, 
  MessageSquare, 
  Bookmark, 
  Share2, 
  MoreHorizontal,
  CheckCircle,
  Link,
  Send
} from 'lucide-react';
import { Post, UserRole } from '../types';

interface PostCardProps {
  post: Post;
  isOrgView?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, isOrgView }) => {
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={post.authorAvatar} alt={post.authorName} className="w-10 h-10 rounded-full border border-gray-100" />
            {post.authorVerified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <CheckCircle className="w-3 h-3 text-[#facc15]" fill="currentColor" />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-black">{post.authorName}</h4>
              <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                post.authorRole === UserRole.STUDENT ? 'bg-gray-100 text-gray-500' : 'bg-black text-[#facc15]'
              }`}>
                {post.authorRole}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">{post.timestamp}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[10px] font-bold text-black bg-[#facc15] px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform">Follow</button>
          <button className="text-gray-400 hover:text-black transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pb-4 space-y-3">
        <h3 className="text-base font-bold text-black">{post.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
          {post.content}
        </p>
        
        {/* Attachment Placeholder */}
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50 h-48 flex flex-col items-center justify-center gap-2 group cursor-pointer relative">
          <img src={`https://picsum.photos/seed/${post.id}/600/300`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Post content" />
          <div className="z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-xs font-bold text-black flex items-center gap-2">
            <Link className="w-3 h-3" /> View Showcase
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Analytics & Actions */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-1.5 text-xs font-bold transition-all ${isLiked ? 'text-[#facc15]' : 'text-gray-500 hover:text-black'}`}
          >
            <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} /> {post.likes + (isLiked ? 1 : 0)}
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black transition-all"
          >
            <MessageSquare className="w-4 h-4" /> {post.comments.length}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <button className="text-gray-400 hover:text-[#facc15] transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className="bg-gray-50/50 border-t border-gray-100 p-4 space-y-4">
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
            {post.comments.map(comment => (
              <div key={comment.id} className="flex gap-3">
                <img src={`https://picsum.photos/seed/${comment.userName}/40`} className="w-8 h-8 rounded-full shrink-0" alt="User" />
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-black">{comment.userName}</span>
                    <span className="text-[9px] font-bold text-gray-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-700">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-1">
              "Keep it constructive and career-focused."
            </p>
            <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-2 focus-within:border-black transition-all shadow-sm">
              <input 
                type="text" 
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a professional comment..." 
                className="flex-1 bg-transparent text-xs px-2 focus:outline-none"
              />
              <button 
                disabled={!commentText}
                className={`p-2 rounded-lg transition-all ${commentText ? 'bg-black text-[#facc15]' : 'bg-gray-100 text-gray-300'}`}
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
