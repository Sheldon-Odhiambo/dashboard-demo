
import React from 'react';
import { UserRole } from '../types';
import { ViewState } from '../App';
import { ArrowLeft, Save, User, Camera, MapPin, Globe, Briefcase } from 'lucide-react';

interface EditProfileProps {
  userRole: UserRole;
  onNavigate: (view: ViewState) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ userRole, onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => onNavigate('DASHBOARD')}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <h1 className="text-2xl font-black text-black">Edit {userRole === UserRole.STUDENT ? 'Student' : 'Organization'} Profile</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Placeholder */}
        <div className="h-32 bg-black relative">
          <button className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all">
            <Camera className="w-4 h-4" /> Change Cover
          </button>
          <div className="absolute -bottom-10 left-8 p-1.5 bg-white rounded-2xl shadow-lg">
             <div className="relative group cursor-pointer">
               <img 
                 src={userRole === UserRole.STUDENT ? "https://picsum.photos/seed/alex/120" : "https://picsum.photos/seed/lab/120"} 
                 className="w-24 h-24 rounded-xl object-cover" 
                 alt="Profile" 
               />
               <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera className="w-6 h-6 text-white" />
               </div>
             </div>
          </div>
        </div>

        <div className="pt-16 p-8 space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Display Name</label>
              <input 
                type="text" 
                defaultValue={userRole === UserRole.STUDENT ? "Alex Rivers" : "Innovate Labs"}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Headline / Tagline</label>
              <input 
                type="text" 
                defaultValue={userRole === UserRole.STUDENT ? "UX Design Student @ Tech Uni" : "Pioneering Future Tech"}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</label>
              <input 
                type="text" 
                defaultValue="San Francisco, CA"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1"><Globe className="w-3 h-3" /> Website / Portfolio</label>
              <input 
                type="url" 
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest">About / Summary</label>
            <textarea 
              rows={4}
              defaultValue={userRole === UserRole.STUDENT ? "Passionate about building intuitive digital experiences..." : "We focus on building the next generation of spatial computing..."}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold resize-none"
            />
          </div>

          {userRole === UserRole.STUDENT ? (
             <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1"><Briefcase className="w-3 h-3" /> Education</label>
                  <input 
                    type="text" 
                    defaultValue="B.S. Interaction Design, Tech Uni"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Top Skills (comma separated)</label>
                  <input 
                    type="text" 
                    defaultValue="Figma, React, User Research"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
                  />
               </div>
             </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Industry Tags</label>
                  <input 
                    type="text" 
                    defaultValue="XR, AI, Web3"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Mission Statement</label>
                  <textarea 
                    rows={2}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors font-semibold resize-none"
                    placeholder="Briefly state your company's mission..."
                  />
               </div>
            </div>
          )}

          <div className="pt-8 border-t border-gray-100 flex justify-end gap-4">
            <button 
              onClick={() => onNavigate('DASHBOARD')}
              className="px-8 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-95"
            >
              Cancel
            </button>
            <button 
              onClick={() => onNavigate('DASHBOARD')}
              className="px-8 py-3 bg-black text-[#facc15] font-bold rounded-xl flex items-center gap-2 hover:bg-gray-900 shadow-lg active:scale-95 transition-all"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
