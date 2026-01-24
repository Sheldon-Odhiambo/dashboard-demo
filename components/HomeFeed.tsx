
import React from 'react';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Briefcase,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PostComposer } from './PostComposer';
import { PostCard } from './PostCard';
import { MOCK_POSTS, MOCK_OPPORTUNITIES } from '../constants';
import { UserRole } from '../types';
import { ViewState } from '../App';

interface HomeFeedProps {
  userRole: UserRole;
  onNavigate: (view: ViewState) => void;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ userRole, onNavigate }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT COLUMN: Mini Profile Summary */}
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-14 bg-black"></div>
          <div className="px-4 pb-4 -mt-8 flex flex-col items-center text-center">
            <img 
              src={userRole === UserRole.STUDENT ? "https://picsum.photos/seed/alex/100" : "https://picsum.photos/seed/lab/100"} 
              className="w-16 h-16 rounded-xl border-4 border-white object-cover bg-white mb-2" 
              alt="Avatar"
            />
            <h3 className="font-bold text-black text-sm">
              {userRole === UserRole.STUDENT ? 'Alex Rivers' : 'Innovate Labs'}
            </h3>
            <p className="text-[10px] text-gray-500 font-medium">
              {userRole === UserRole.STUDENT ? 'UX Design Student @ Tech Uni' : 'Pioneering Future Tech'}
            </p>
            
            <div className="w-full border-t border-gray-100 mt-4 pt-4 space-y-2 text-left">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-gray-400 uppercase">Profile Views</span>
                <span className="text-[#facc15]">142</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-gray-400 uppercase">Connections</span>
                <span className="text-[#facc15]">482</span>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate('DASHBOARD')}
              className="w-full mt-4 py-2 text-[10px] font-bold bg-black text-[#facc15] rounded-lg hover:bg-gray-900 transition-colors shadow-sm"
            >
              Access Dashboard
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <h4 className="text-xs font-bold text-black flex items-center gap-2 mb-3 uppercase tracking-wider">
            <TrendingUp className="w-3 h-3 text-[#facc15]" /> Trending Topics
          </h4>
          <div className="space-y-3">
            {['#SpatialComputing', '#UXDesign', '#TalentEconomy', '#AIResearch'].map(tag => (
              <div key={tag} className="text-xs font-semibold text-gray-700 hover:text-black cursor-pointer">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: The Feed */}
      <div className="lg:col-span-6 space-y-6">
        <PostComposer userRole={userRole} />
        
        <div className="flex items-center gap-4">
           <div className="h-px flex-1 bg-gray-200"></div>
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Community Feed</span>
           <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="space-y-6">
          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Opportunities & Who to Follow */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
           <h4 className="text-xs font-bold text-black flex items-center gap-2 mb-4 uppercase tracking-wider">
             <Briefcase className="w-3 h-3 text-[#facc15]" /> Top Opportunities
           </h4>
           <div className="space-y-4">
              {MOCK_OPPORTUNITIES.slice(0, 3).map((opp, i) => (
                <div key={i} className="group border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                  <h5 className="text-xs font-bold text-black group-hover:text-[#facc15] transition-colors cursor-pointer">{opp.role}</h5>
                  <p className="text-[10px] text-gray-500">{opp.orgName} • {opp.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-black text-green-500 bg-green-50 px-1 rounded">{opp.matchScore}% Match</span>
                    <ChevronRight className="w-3 h-3 text-gray-300 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
           </div>
           <button className="w-full mt-3 py-2 text-[10px] font-bold text-gray-500 hover:text-black border border-gray-200 rounded-lg">
             See all opportunities
           </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
           <h4 className="text-xs font-bold text-black flex items-center gap-2 mb-4 uppercase tracking-wider">
             <Users className="w-3 h-3 text-[#facc15]" /> People to Follow
           </h4>
           <div className="space-y-4">
              {[
                { name: 'Sarah Chen', role: 'UI Lead @ Meta', avatar: 'Sarah' },
                { name: 'Future Design Co', role: 'Agency', avatar: 'Future' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={`https://picsum.photos/seed/${item.avatar}/40`} className="w-9 h-9 rounded-full" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-black leading-tight">{item.name}</p>
                    <p className="text-[10px] text-gray-500 leading-tight">{item.role}</p>
                  </div>
                  <button className="text-[10px] font-bold text-black bg-[#facc15] px-2 py-1 rounded">Follow</button>
                </div>
              ))}
           </div>
        </div>

        <footer className="px-4 text-[10px] text-gray-400 flex flex-wrap gap-x-4 gap-y-2 font-medium">
          <span>About</span>
          <span>Help Center</span>
          <span>Privacy & Terms</span>
          <span>© 2024 Crat Lab</span>
        </footer>
      </div>
    </div>
  );
};

export default HomeFeed;
