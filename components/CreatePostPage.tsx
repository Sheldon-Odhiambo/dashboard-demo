
import React from 'react';
import { UserRole } from '../types';
import { ViewState } from '../App';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import { PostComposer } from './PostComposer';

interface CreatePostPageProps {
  userRole: UserRole;
  onNavigate: (view: ViewState) => void;
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ userRole, onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => onNavigate('DASHBOARD')}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="text-2xl font-black text-black flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#facc15]" /> Create Professional Post
        </h1>
      </div>

      <div className="space-y-6">
        <div className="bg-[#facc15]/10 border border-[#facc15]/30 rounded-2xl p-4">
          <p className="text-xs font-bold text-black flex items-center gap-2">
            💡 Tip: Professional posts help you stand out to {userRole === UserRole.STUDENT ? 'organizations' : 'talented students'}. 
            Share your work, milestones, or questions.
          </p>
        </div>

        {/* Use the existing PostComposer but wrapped in a page context */}
        <div className="shadow-xl">
          <PostComposer userRole={userRole} />
        </div>

        <div className="flex items-center justify-center pt-8">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Your post will be visible based on the visibility settings you choose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
