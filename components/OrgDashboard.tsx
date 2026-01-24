
import React, { useState } from 'react';
import { 
  Plus, 
  Target, 
  Users, 
  Calendar, 
  Filter,
  CheckCircle,
  BarChart2,
  Share2,
  Mail,
  MoreVertical
} from 'lucide-react';
import { PostComposer } from './PostComposer';
import { PostCard } from './PostCard';
import { MOCK_POSTS } from '../constants';
import { UserRole } from '../types';
import { ViewState } from '../App';

interface OrgDashboardProps {
  onNavigate: (view: ViewState) => void;
}

const OrgDashboard: React.FC<OrgDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('All matches');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* LEFT COLUMN: Profile + Network + Hiring Calendar */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-16 bg-gray-900 relative">
            <div className="absolute -bottom-6 left-4 p-1 bg-white rounded-lg">
               <img src="https://picsum.photos/seed/lab/100" className="w-16 h-16 rounded-lg object-cover" alt="Org" />
            </div>
          </div>
          <div className="pt-8 px-4 pb-4 space-y-4">
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-lg font-bold text-black">Innovate Labs</h2>
                <CheckCircle className="w-4 h-4 text-[#facc15]" fill="currentColor" />
              </div>
              <p className="text-sm text-gray-500">Technology & Research • SF</p>
            </div>
            
            <p className="text-xs text-gray-700 leading-relaxed">
              We focus on building the next generation of spatial computing tools. Join us to build the future.
            </p>

            <div className="space-y-2 pt-2 border-t border-gray-100">
               <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                 <Target className="w-3 h-3" /> Industry: XR, AI, Web3
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                 <Users className="w-3 h-3" /> Skills: React, Unity, Rust
               </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('EDIT_PROFILE')}
                className="w-full py-2 bg-black text-[#facc15] font-bold rounded-lg text-sm hover:bg-gray-900 transition-colors shadow-sm active:scale-95"
              >
                Edit Profile
              </button>
              <button className="w-full py-2 bg-gray-100 text-gray-700 font-bold rounded-lg text-xs hover:bg-gray-200 transition-colors shadow-sm active:scale-95">
                View Public Page
              </button>
            </div>
          </div>
        </div>

        {/* Network & Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
            <h3 className="font-bold text-black flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#facc15]" /> Stats & Network
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-black">4.8k</p>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">Followers</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">+12</p>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">New This Wk</p>
              </div>
            </div>
            <button className="w-full text-xs font-bold text-gray-500 hover:text-black">Find Students</button>
        </div>

        {/* Hiring Calendar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
           <div className="flex items-center justify-between">
              <h3 className="font-bold text-black flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-[#facc15]" /> Hiring Calendar
              </h3>
              <Plus className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black" />
           </div>
           <div className="space-y-3">
              <div className="border-l-2 border-[#facc15] pl-3 py-1">
                <p className="text-xs font-bold">Summer Internships</p>
                <p className="text-[10px] text-gray-500">Active Pipeline • Ends Aug 15</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-3 py-1">
                <p className="text-xs font-bold text-gray-400">Grad Trainee Scheme</p>
                <p className="text-[10px] text-gray-300">Opens Sept 1</p>
              </div>
           </div>
        </div>
      </div>

      {/* CENTER COLUMN: Feed */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button 
            onClick={() => onNavigate('CREATE_POST')}
            className="flex items-center gap-2 px-4 py-2 bg-black text-[#facc15] font-bold rounded-lg text-sm shadow-md active:scale-95 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" /> Create Post
          </button>
          <button 
            onClick={() => onNavigate('POST_OPPORTUNITY')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg text-sm shrink-0 active:scale-95 transition-all"
          >
            <Target className="w-4 h-4" /> Post Opportunity
          </button>
          <button 
            onClick={() => onNavigate('VIEW_MATCHES')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg text-sm shrink-0 active:scale-95 transition-all"
          >
            <Users className="w-4 h-4" /> View Matches
          </button>
        </div>

        <PostComposer userRole={UserRole.ORGANIZATION} />

        <div className="flex gap-4 border-b border-gray-200">
           {['Community Feed', 'Your Org Feed', 'Analytics'].map(tab => (
             <button key={tab} className={`pb-2 text-sm font-bold ${tab === 'Community Feed' ? 'border-b-2 border-[#facc15] text-black' : 'text-gray-400 hover:text-gray-600'}`}>
               {tab}
             </button>
           ))}
        </div>

        <div className="space-y-6">
          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={post} isOrgView />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Pipeline + Matches */}
      <div className="lg:col-span-3 space-y-6">
        {/* Quick Post Opportunity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
           <div className="flex items-center justify-between">
             <h3 className="font-bold text-black flex items-center gap-2 text-sm">
               <Target className="w-4 h-4 text-[#facc15]" /> Talent Pipeline
             </h3>
           </div>
           <button 
            onClick={() => onNavigate('POST_OPPORTUNITY')}
            className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all text-gray-400 hover:text-black flex flex-col items-center gap-1"
           >
             <Plus className="w-6 h-6" />
             <span className="text-xs font-bold uppercase tracking-widest">Post New Request</span>
           </button>
        </div>

        {/* Matched Candidates Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-black text-sm">Candidate Matches</h3>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-black text-[#facc15] rounded">UX INTERN</span>
          </div>
          
          <div className="flex border-b border-gray-100 overflow-x-auto bg-gray-50/50">
             {['All matches', 'Shortlisted', 'Invited'].map(tab => (
               <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === tab ? 'bg-white border-b-2 border-[#facc15] text-black' : 'text-gray-400'}`}
               >
                 {tab}
               </button>
             ))}
          </div>

          <div className="p-4 space-y-4">
             {[
               { name: 'Sarah Miller', score: 94, institution: 'Stanford', status: 'Fits' },
               { name: 'David Kim', score: 88, institution: 'Berkeley', status: 'Partial' }
             ].map((candidate, i) => (
               <div key={i} className="group relative border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow">
                 <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={`https://picsum.photos/seed/${candidate.name}/50`} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-xs font-bold">{candidate.name}</p>
                        <p className="text-[10px] text-gray-400">{candidate.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-black text-black">{candidate.score}%</p>
                       <p className={`text-[8px] font-bold ${candidate.status === 'Fits' ? 'text-green-500' : 'text-orange-400'}`}>{candidate.status}</p>
                    </div>
                 </div>
                 <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onNavigate('MESSAGES')}
                      className="flex-1 py-1 bg-black text-[#facc15] text-[10px] font-bold rounded shadow-sm hover:scale-105 transition-all"
                    >
                      Invite
                    </button>
                    <button 
                      onClick={() => onNavigate('MESSAGES')}
                      className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="w-3 h-3 text-gray-500" />
                    </button>
                 </div>
               </div>
             ))}
          </div>
          <button 
            onClick={() => onNavigate('VIEW_MATCHES')}
            className="w-full p-3 text-center text-xs font-bold text-gray-400 hover:text-black border-t border-gray-100"
          >
            View All Talent Pipeline
          </button>
        </div>

        {/* Inbox / Invites Widget */}
        <div className="bg-black text-white rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 
              onClick={() => onNavigate('MESSAGES')}
              className="font-bold flex items-center gap-2 text-sm cursor-pointer hover:text-[#facc15]"
            >
              <Mail className="w-4 h-4 text-[#facc15]" /> Inbox
            </h3>
            <span className="w-5 h-5 bg-[#facc15] text-black text-[10px] font-black rounded-full flex items-center justify-center">2</span>
          </div>
          <div className="space-y-3">
             <div 
               onClick={() => onNavigate('MESSAGES')}
               className="flex items-center justify-between text-xs p-2 rounded bg-gray-900 border border-gray-800 cursor-pointer hover:border-[#facc15]/30"
              >
                <span>New application: Sarah M.</span>
                <span className="text-[#facc15]">Now</span>
             </div>
             <div 
               onClick={() => onNavigate('MESSAGES')}
               className="flex items-center justify-between text-xs p-2 rounded bg-gray-900 border border-gray-800 cursor-pointer hover:border-[#facc15]/30"
              >
                <span>Collab request: Meta Lab</span>
                <span className="text-gray-500">2h</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrgDashboard;
