
import React, { useState } from 'react';
import { 
  Image, 
  Paperclip, 
  Github, 
  Globe, 
  Eye,
  Lock,
  ChevronDown
} from 'lucide-react';
import { UserRole } from '../types';

interface PostComposerProps {
  userRole: UserRole;
}

export const PostComposer: React.FC<PostComposerProps> = ({ userRole }) => {
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('Public');

  const studentPostTypes = [
    'Showcase', 'Skill Demo', 'Learning Update', 'Opportunity Request', 
    'Resource Share', 'Collaboration Request', 'Impact/Community'
  ];

  const orgPostTypes = [
    'Update', 'Talent Call', 'Opportunity Spotlight', 'Event / Training',
    'Impact / Success Story', 'Collaboration Request', 'Resource Share'
  ];

  const currentTypes = userRole === UserRole.STUDENT ? studentPostTypes : orgPostTypes;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center gap-4">
        <img 
          src={userRole === UserRole.STUDENT ? "https://picsum.photos/seed/alex/100" : "https://picsum.photos/seed/lab/100"} 
          className="w-10 h-10 rounded-full border-2 border-gray-100" 
          alt="User"
        />
        <div className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide py-1">
          {currentTypes.slice(0, 4).map(type => (
            <button 
              key={type} 
              className="px-3 py-1.5 bg-gray-50 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider hover:bg-[#facc15] hover:text-black transition-all border border-gray-200 whitespace-nowrap"
            >
              {type}
            </button>
          ))}
          <button className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full uppercase transition-all flex items-center gap-1 border border-gray-200">
            More <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={userRole === UserRole.STUDENT ? "Showcase your latest project or skill..." : "Share a company update or talent call..."}
          className="w-full min-h-[100px] text-sm focus:outline-none resize-none placeholder:text-gray-400"
        />
        
        <div className="flex flex-wrap gap-2 mt-4">
           {['#design', '#tech', '#internship'].map(tag => (
             <span key={tag} className="text-xs font-bold text-black bg-gray-100 px-2 py-1 rounded">
               {tag} <span className="text-gray-400 cursor-pointer">×</span>
             </span>
           ))}
           <button className="text-xs font-bold text-[#facc15]">+ Add Tags</button>
        </div>
      </div>

      <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-black transition-colors"><Image className="w-5 h-5" /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Paperclip className="w-5 h-5" /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Github className="w-5 h-5" /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Globe className="w-5 h-5" /></button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold rounded-lg text-gray-600 hover:bg-gray-50">
              {visibility === 'Public' ? <Eye className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
              {visibility}
              <ChevronDown className="w-3 h-3" />
            </button>
            {/* Simple Dropdown Mock */}
          </div>
          <button 
            disabled={!content}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-md ${
              content ? 'bg-black text-[#facc15] hover:bg-gray-900 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};
