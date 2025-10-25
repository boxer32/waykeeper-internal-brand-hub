import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, RefreshCw, BarChart3, TrendingUp, AlertCircle, FileText, Download, Share2, Clock, CheckCircle, XCircle, Move } from 'lucide-react';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-libre-baskerville' 
});

const domains = [
  { name: 'Digital Platform', progress: 65, phase: 'Beta Testing', milestone: 'API Integration Complete', status: 'healthy' },
  { name: 'Hub Construction', progress: 45, phase: 'Procurement', milestone: 'Vendor Contracts Signed', status: 'watch' },
  { name: 'Branding & Media', progress: 82, phase: 'Content Production', milestone: 'Narrative Book Finalized', status: 'healthy' },
  { name: 'Ecosystem Expansion', progress: 35, phase: 'Partner Onboarding', milestone: 'Affiliate Network Live', status: 'delayed' },
  { name: 'Launch Operations', progress: 22, phase: 'Planning', milestone: 'Timeline Approved', status: 'watch' },
];

const tasks = [
  { id: 1, title: 'Finalize API endpoints', domain: 'Digital Platform', owner: 'Alice', priority: 'High', progress: 80, status: 'Active' },
  { id: 2, title: 'Source construction materials', domain: 'Hub Construction', owner: 'Bob', priority: 'Medium', progress: 50, status: 'Blocked' },
  { id: 3, title: 'Create social media assets', domain: 'Branding & Media', owner: 'Carol', priority: 'Low', progress: 100, status: 'Done' },
  { id: 4, title: 'Negotiate car rental partnerships', domain: 'Ecosystem Expansion', owner: 'David', priority: 'High', progress: 30, status: 'Planned' },
  { id: 5, title: 'Develop launch checklist', domain: 'Launch Operations', owner: 'Eve', priority: 'High', progress: 10, status: 'Active' },
];

const aiSummary = {
  highlights: "Completed API integration for Digital Platform ahead of schedule. Branding team finalized the Narrative Book, ready for partner distribution.",
  risks: "Hub Construction procurement delays due to vendor availability. Ecosystem Expansion partner negotiations moving slower than projected.",
  focus: "Prioritize resolving procurement issues and accelerating partner onboarding. Review launch operations timeline for adjustments."
};

export default function Dashboard() {
  const [dateRange, setDateRange] = useState('3-months');
  const [overallProgress, setOverallProgress] = useState(48);
  const [sentiment, setSentiment] = useState('steady');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800 border-green-200';
      case 'watch': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'delayed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getColumnTasks = (status: string) => tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());

  const regenerateSummary = () => {
    // Simulate AI refresh
    setOverallProgress(Math.random() * 100);
  };

  return (
    <div className={`${libreBaskerville.variable} font-sans bg-[#F3EDE3] min-h-screen`}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className={`${libreBaskerville.className} text-3xl md:text-4xl font-bold text-[#4A3B2E]`}>
              Waykeeper Ecosystem Tracker
            </h1>
            <p className="text-sm text-gray-600 mt-1">Unified progress across all initiatives</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="3-months">3-Month Horizon</option>
                <option value="6-months">6-Month Horizon</option>
              </select>
            </div>
            <button 
              onClick={regenerateSummary}
              className="flex items-center gap-2 px-4 py-2 bg-[#D1A45A] text-white rounded-lg hover:bg-[#B89C4A] transition-colors"
            >
              <RefreshCw size={16} />
              Regenerate Insight
            </button>
          </div>
        </div>
        {/* Global KPI Bar */}
        <div className="max-w-7xl mx-auto mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-lg font-semibold text-[#4A3B2E]">{overallProgress.toFixed(0)}% Overall Completion</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className={`px-2 py-1 rounded-full ${sentiment === 'calm' ? 'bg-green-100' : sentiment === 'steady' ? 'bg-blue-100' : 'bg-amber-100'}`}>
                {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Overview Summary Panel */}
        <section>
          <h2 className={`${libreBaskerville.className} text-2xl font-bold text-[#4A3B2E] mb-6`}>Overview Summary</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className={`p-6 rounded-lg border ${getStatusColor(domain.status)} shadow-sm`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-[#4A3B2E]">{domain.name}</h3>
                  <div className={`w-2 h-2 rounded-full ${domain.status === 'healthy' ? 'bg-green-500' : domain.status === 'watch' ? 'bg-amber-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#D1A45A] h-2 rounded-full" style={{width: `${domain.progress}%`}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{domain.progress}%</p>
                </div>
                <p className="text-sm font-medium mb-2">Phase: {domain.phase}</p>
                <p className="text-xs text-gray-500 italic">Milestone: {domain.milestone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Assisted Timeline View */}
        <section>
          <h2 className={`${libreBaskerville.className} text-2xl font-bold text-[#4A3B2E] mb-6`}>Timeline View (12 Weeks)</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
            <div className="grid grid-cols-13 gap-2" style={{gridTemplateColumns: '120px repeat(12, 1fr)'}}>
              <div className="font-semibold text-[#4A3B2E] text-center py-2 border-b">Domain</div>
              {Array.from({length: 12}, (_, i) => (
                <div key={i} className="font-semibold text-sm text-gray-600 text-center py-2 border-b">Week {i+1}</div>
              ))}
              {domains.map((domain, dIndex) => (
                <>
                  <div key={dIndex} className="border-b py-2 font-medium text-sm text-[#4A3B2E] bg-gray-50">{domain.name}</div>
                  {Array.from({length: 12}, (_, wIndex) => (
                    <div key={wIndex} className={`h-8 border border-gray-200 rounded ${Math.random() > 0.5 ? 'bg-[#D1A45A]/20' : 'bg-transparent'}`}></div>
                  ))}
                </>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Dotted lines represent dependencies. Pulsing areas indicate bottlenecks.</p>
          </div>
        </section>

        {/* Task Board Section */}
        <section>
          <h2 className={`${libreBaskerville.className} text-2xl font-bold text-[#4A3B2E] mb-6`}>Task Board</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Planned', 'Active', 'Blocked', 'Done'].map((column) => (
              <div key={column} className="bg-white rounded-lg shadow-sm p-4 min-h-[400px]">
                <h3 className={`${libreBaskerville.className} font-semibold text-[#4A3B2E] mb-4 flex items-center gap-2`}>
                  {column}
                  <span className="text-sm text-gray-500">({getColumnTasks(column).length})</span>
                </h3>
                <div className="space-y-3">
                  {getColumnTasks(column).map((task) => (
                    <div key={task.id} className="p-3 bg-gray-50 rounded border-l-4 border-[#D1A45A] hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-sm text-[#4A3B2E]">{task.title}</h4>
                      <p className="text-xs text-gray-600">Domain: {task.domain}</p>
                      <p className="text-xs text-gray-500">Owner: {task.owner} | Priority: {task.priority}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                        <div className="bg-[#D1A45A] h-1 rounded-full" style={{width: `${task.progress}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Summary Drawer */}
        <section>
          <h2 className={`${libreBaskerville.className} text-2xl font-bold text-[#4A3B2E] mb-6`}>AI Weekly Summary</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <div>
                <h3 className={`${libreBaskerville.className} font-semibold text-lg text-[#4A3B2E] mb-2 flex items-center gap-2`}>
                  <CheckCircle className="text-green-500" size={20} />
                  This Week's Highlights
                </h3>
                <p className="text-gray-700 leading-relaxed">{aiSummary.highlights}</p>
              </div>
              <div>
                <h3 className={`${libreBaskerville.className} font-semibold text-lg text-[#4A3B2E] mb-2 flex items-center gap-2`}>
                  <AlertCircle className="text-amber-500" size={20} />
                  Risks & Blockers
                </h3>
                <p className="text-gray-700 leading-relaxed">{aiSummary.risks}</p>
              </div>
              <div>
                <h3 className={`${libreBaskerville.className} font-semibold text-lg text-[#4A3B2E] mb-2 flex items-center gap-2`}>
                  <TrendingUp className="text-blue-500" size={20} />
                  Next 7-Day Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">{aiSummary.focus}</p>
              </div>
              <button className="px-4 py-2 bg-[#D1A45A] text-white rounded hover:bg-[#B89C4A] transition-colors">
                Regenerate Summary
              </button>
            </div>
          </div>
        </section>

        {/* Metrics & Insight Dashboard */}
        <section>
          <h2 className={`${libreBaskerville.className} text-2xl font-bold text-[#4A3B2E] mb-6`}>Metrics & Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#4A3B2E] mb-4">Domain Progress</h3>
              <div className="space-y-4">
                {domains.slice(0,4).map((d, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm">{d.name}</span>
                    <span className="font-medium">{d.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#4A3B2E] mb-4">Trend Over Time</h3>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Trend Line Placeholder</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#4A3B2E] mb-4">Anomalies</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <AlertCircle size={16} />
                  Hub Construction velocity drop
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#4A3B2E] mb-4">ETA Projection</h3>
              <p className="text-lg font-bold text-[#D1A45A]">Launch: Q1 2026</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3B2E] text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">Version 1.0 • Updated: {new Date().toLocaleDateString()}</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white text-[#4A3B2E] rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Download size={16} /> Export PDF
            </button>
            <button className="px-4 py-2 bg-white text-[#4A3B2E] rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Download size={16} /> Export CSV
            </button>
            <button className="px-4 py-2 bg-white text-[#4A3B2E] rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Share2 size={16} /> Share Live View
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
