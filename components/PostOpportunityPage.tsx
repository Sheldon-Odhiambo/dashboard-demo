
import React from 'react';
import { UserRole } from '../types';
import { ViewState } from '../App';
import { ArrowLeft, Target, Briefcase, Calendar, Clock, MapPin, Zap, CheckCircle } from 'lucide-react';

interface PostOpportunityPageProps {
  userRole: UserRole;
  onNavigate: (view: ViewState) => void;
}

const PostOpportunityPage: React.FC<PostOpportunityPageProps> = ({ userRole, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => onNavigate('DASHBOARD')}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </button>
        <h1 className="text-2xl font-black text-black flex items-center gap-2">
          <Target className="w-6 h-6 text-[#facc15]" /> Post New Opportunity
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-8">
            {/* Section 1: Basics */}
            <div className="space-y-6">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                <Briefcase className="w-4 h-4" /> Opportunity Basics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">Role Title</label>
                  <input type="text" placeholder="e.g. UX Designer Intern" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black appearance-none cursor-pointer">
                    <option>Internship</option>
                    <option>Attachment</option>
                    <option>Volunteer</option>
                    <option>Apprenticeship</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Description</label>
                <textarea rows={5} placeholder="Describe the role, responsibilities, and impact..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black resize-none" />
              </div>
            </div>

            {/* Section 2: Requirements */}
            <div className="space-y-6">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                <Zap className="w-4 h-4" /> Skills & Requirements
              </h2>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Required Skills</label>
                <input type="text" placeholder="e.g. React, Figma, User Testing" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Preferred Institution (Optional)</label>
                <input type="text" placeholder="Specify if searching for specific students" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
              </div>
            </div>

            {/* Section 3: Timeline */}
            <div className="space-y-6">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                <Calendar className="w-4 h-4" /> Timeline & Commitment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1"><Calendar className="w-3 h-3" /> Start Date</label>
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1"><Clock className="w-3 h-3" /> Duration</label>
                  <input type="text" placeholder="e.g. 3 Months" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">Hours per week</label>
                  <input type="number" placeholder="20" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1"><MapPin className="w-3 h-3" /> Work Mode</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black appearance-none cursor-pointer">
                    <option>Remote</option>
                    <option>On-site</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex justify-end gap-4">
               <button onClick={() => onNavigate('DASHBOARD')} className="px-8 py-3 font-bold text-gray-500 hover:text-black transition-colors">Cancel</button>
               <button onClick={() => onNavigate('DASHBOARD')} className="px-10 py-3 bg-black text-[#facc15] font-black rounded-xl hover:bg-gray-900 transition-all shadow-lg active:scale-95">Publish Opportunity</button>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-black text-white rounded-2xl p-6 shadow-xl space-y-6">
            <h3 className="font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#facc15]" /> Publishing Options
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-black focus:ring-0" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">Make opportunity public</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-black focus:ring-0" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">Also create social post</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded text-black focus:ring-0" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">Allow direct messaging</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
            <h3 className="font-bold text-black text-sm uppercase tracking-widest">AI Preview</h3>
            <p className="text-xs text-gray-500 italic leading-relaxed">
              "Based on your requirements, we see approximately <span className="text-black font-bold">42 matches</span> in our database with a 90%+ match score."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOpportunityPage;
