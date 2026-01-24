
import React, { useState } from 'react';
import { 
  Plus, 
  FileText, 
  RefreshCw, 
  Edit3, 
  Download, 
  ExternalLink,
  Users,
  Briefcase,
  Zap,
  Calendar,
  Filter,
  BarChart2
} from 'lucide-react';
import { PostComposer } from './PostComposer';
import { PostCard } from './PostCard';
import { MOCK_POSTS, MOCK_OPPORTUNITIES } from '../constants';
import { UserRole } from '../types';
import { ViewState } from '../App';

interface StudentDashboardProps {
  onNavigate: (view: ViewState) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onNavigate }) => {
  const [activeFeedTab, setActiveFeedTab] = useState('Your Posts');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* LEFT COLUMN: Profile + Availability + Network */}
      <div className="lg:col-span-3 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-20 bg-black relative">
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 p-1.5 bg-white rounded-2xl shadow-lg">
               <img src="https://picsum.photos/seed/alex/120" className="w-20 h-20 rounded-xl object-cover" alt="Student" />
            </div>
          </div>
          <div className="pt-10 px-4 pb-4 space-y-4 text-center">
            <div>
              <h2 className="text-xl font-bold text-black">Alex Rivers</h2>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">UX Design Student • San Francisco</p>
            </div>
            
            <div className="space-y-1 text-left px-2">
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className="text-gray-400">PROFILE COMPLETENESS</span>
                <span className="text-[#facc15]">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#facc15]" style={{ width: '75%' }}></div>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Passionate about building intuitive digital experiences and user-centric systems."
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {['Figma', 'React', 'User Research'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded border border-gray-100">
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              <button 
                onClick={() => onNavigate('EDIT_PROFILE')}
                className="py-2 bg-black text-[#facc15] font-bold rounded-lg text-xs hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
              <button className="py-2 bg-gray-100 text-gray-700 font-bold rounded-lg text-xs hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95">
                <Download className="w-3.5 h-3.5" /> CV
              </button>
            </div>
          </div>
        </div>

        {/* Availability Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-black flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-[#facc15]" /> Availability
            </h3>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">OPEN</span>
          </div>
          
          <div className="space-y-3">
            <div className="text-xs text-gray-600">
              <p className="font-semibold text-black">Available: Jul 2024 - Dec 2024</p>
              <p>20 hours/week • Hybrid</p>
            </div>
            {/* Availability Bar */}
            <div className="flex gap-1 h-2">
              {[1,1,1,1,0,0,0,1,1,1].map((active, i) => (
                <div key={i} className={`flex-1 rounded-sm ${active ? 'bg-[#facc15]' : 'bg-gray-100'}`}></div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 italic font-medium">"Flexible around exam periods (late Oct)."</p>
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: Feed + Showcase */}
      <div className="lg:col-span-6 space-y-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-black">Your Dashboard</h2>
             <div className="flex items-center gap-2">
               <button className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <BarChart2 className="w-5 h-5 text-gray-400" />
               </button>
               <button 
                 onClick={() => onNavigate('CREATE_POST')}
                 className="flex items-center gap-2 px-4 py-2 bg-black text-[#facc15] font-bold rounded-lg text-sm shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" /> New Post
               </button>
             </div>
           </div>
           
           <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Post Impressions</p>
                <p className="text-xl font-black text-black">2.4k</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">New Matches</p>
                <p className="text-xl font-black text-black">14</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Applications</p>
                <p className="text-xl font-black text-black">8</p>
              </div>
           </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 border-b border-gray-200">
            {['Your Posts', 'Community Activity', 'Saved'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveFeedTab(tab)}
                className={`text-sm font-bold pb-2 transition-all border-b-2 ${activeFeedTab === tab ? 'border-[#facc15] text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {MOCK_POSTS.filter(p => activeFeedTab === 'Your Posts' ? p.authorRole === UserRole.STUDENT : true).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Matches + Timeline Fit */}
      <div className="lg:col-span-3 space-y-6">
        {/* AI Matches Card */}
        <div className="bg-black text-white rounded-xl shadow-lg p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-[#facc15]" /> Talent Matcher
            </h3>
            <button 
              onClick={handleRefresh}
              className={`p-1 rounded-full transition-all ${isRefreshing ? 'animate-spin text-[#facc15]' : 'text-gray-500 hover:text-[#facc15]'}`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {MOCK_OPPORTUNITIES.map((opp, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-3 space-y-2 hover:border-[#facc15]/30 transition-colors group">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white leading-tight">{opp.role}</h4>
                    <p className="text-[10px] text-gray-500">{opp.orgName}</p>
                  </div>
                  <span className="text-[10px] font-black text-[#facc15] ml-2">{opp.matchScore}%</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                   <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                     opp.fit === 'Fits' ? 'bg-green-900/40 text-green-400' : 'bg-orange-900/40 text-orange-400'
                   }`}>
                     {opp.fit} Timeline
                   </span>
                   <button 
                    onClick={() => onNavigate('MESSAGES')}
                    className="text-[10px] font-bold text-[#facc15] hover:underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity"
                   >
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => onNavigate('VIEW_MATCHES')}
            className="w-full py-2 bg-[#facc15] text-black font-black rounded-lg text-xs hover:scale-105 transition-transform shadow-md"
          >
            Review All Matches
          </button>
        </div>

        {/* Timeline Fit Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
          <h3 className="font-bold text-black text-xs uppercase tracking-widest">Timeline Alignment</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-black uppercase text-gray-400">
                <span>Your Schedule</span>
                <span className="text-black">OCT - DEC</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-black" style={{ width: '60%', marginLeft: '20%' }}></div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-black uppercase text-gray-400">
                <span>Meta Design Lab</span>
                <span className="text-green-500">MATCH</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#facc15]" style={{ width: '50%', marginLeft: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentDashboard;
