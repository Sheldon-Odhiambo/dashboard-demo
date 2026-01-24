
import React, { useState } from 'react';
import { UserRole } from '../types';
import { ViewState } from '../App';
import { ArrowLeft, Search, Filter, Mail, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';
import { MOCK_OPPORTUNITIES } from '../constants';

interface ViewMatchesPageProps {
  userRole: UserRole;
  onNavigate: (view: ViewState) => void;
}

const ViewMatchesPage: React.FC<ViewMatchesPageProps> = ({ userRole, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('High Match');

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => onNavigate('DASHBOARD')}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <h1 className="text-2xl font-black text-black">
          {userRole === UserRole.STUDENT ? 'My Opportunity Matches' : 'Candidate Matches'}
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {['All', 'High Match', 'Perfect Fit', 'Partial Fit'].map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all whitespace-nowrap ${
                  activeFilter === f ? 'bg-black text-[#facc15] border-black shadow-md' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search matches..." className="w-full bg-white border border-gray-200 pl-9 pr-4 py-1.5 rounded-xl text-xs focus:outline-none focus:border-black shadow-sm" />
            </div>
            <button className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors shadow-sm">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-100">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 hover:bg-gray-50/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <img src={`https://picsum.photos/seed/${i + 20}/60`} className="w-full h-full rounded-2xl object-cover" alt="Match" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-black text-black hover:text-[#facc15] cursor-pointer transition-colors">
                        {userRole === UserRole.STUDENT ? 'Product Design Associate' : 'Alex Rivers'}
                      </h3>
                      <CheckCircle className="w-3.5 h-3.5 text-[#facc15]" fill="currentColor" />
                    </div>
                    <p className="text-xs font-bold text-gray-500">
                      {userRole === UserRole.STUDENT ? 'Meta Design Lab • San Francisco' : 'Tech University • UX Student'}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] font-black uppercase text-green-500 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">98% Match</span>
                      <span className="text-[10px] font-black uppercase text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">Full Time</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none px-6 py-2.5 bg-black text-[#facc15] font-black rounded-xl text-xs hover:bg-gray-900 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> {userRole === UserRole.STUDENT ? 'Apply Now' : 'Invite to Interview'}
                  </button>
                  <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-black transition-all shadow-sm">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Match Insights Dropdown Mock */}
              <div className="mt-4 pt-4 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Top Alignment</p>
                    <p className="text-xs font-semibold text-gray-700">Figma, React, User Testing</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
                    <p className="text-xs font-semibold text-green-600">Perfect Fit (Oct - Dec)</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Institution</p>
                    <p className="text-xs font-semibold text-gray-700">Tech University Match</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <button className="text-xs font-black text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
            Load More Matches
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMatchesPage;
