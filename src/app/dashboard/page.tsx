import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, RefreshCw, BarChart3, Download, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Sample Data
const domains = [
  {
    name: 'Digital Platform',
    progress: 65,
    phase: 'Development',
    milestone: 'API Integration Complete',
    color: 'green',
    status: 'healthy',
  },
  {
    name: 'Hub Construction',
    progress: 45,
    phase: 'Design',
    milestone: 'Site Plan Approval',
    color: 'amber',
    status: 'watch',
  },
  {
    name: 'Branding & Media',
    progress: 80,
    phase: 'Launch',
    milestone: 'Narrative Book Complete',
    color: 'green',
    status: 'healthy',
  },
  {
    name: 'Ecosystem Expansion',
    progress: 30,
    phase: 'Planning',
    milestone: 'Partner Outreach Started',
    color: 'red',
    status: 'delayed',
  },
  {
    name: 'Launch Operations',
    progress: 20,
    phase: 'Prep',
    milestone: 'Timeline Finalized',
    color: 'amber',
    status: 'watch',
  },
];

const timelineData = [
  { week: 1, 'Digital Platform': 10, 'Hub Construction': 5, 'Branding': 20, Ecosystem: 0, Launch: 0 },
  { week: 2, 'Digital Platform': 15, 'Hub Construction': 10, 'Branding': 30, Ecosystem: 5, Launch: 0 },
  // ... mock up to week 12
  { week: 12, 'Digital Platform': 65, 'Hub Construction': 45, 'Branding': 80, Ecosystem: 30, Launch: 20 },
];

const kanbanColumns = {
  Planned: [
    { id: 1, title: 'Finalize Partner Contracts', domain: 'Ecosystem', owner: 'Alice', priority: 'High', progress: 0 },
    { id: 2, title: 'Design Launch Event', domain: 'Launch', owner: 'Bob', priority: 'Medium', progress: 0 },
  ],
  Active: [
    { id: 3, title: 'Build User Dashboard', domain: 'Digital', owner: 'Charlie', priority: 'High', progress: 40 },
    { id: 4, title: 'Media Asset Creation', domain: 'Branding', owner: 'Diana', priority: 'High', progress: 70 },
  ],
  Blocked: [
    { id: 5, title: 'Site Procurement', domain: 'Hub', owner: 'Eve', priority: 'High', progress: 30 },
  ],
  Done: [
    { id: 6, title: 'Brand Guidelines Approved', domain: 'Branding', owner: 'Frank', priority: 'Low', progress: 100 },
  ],
};

const aiSummary = {
  highlights: 'Completed API integration for Digital Platform and finalized Narrative Book for Branding.',
  risks: 'Delays in Hub Construction due to procurement; Ecosystem partner outreach behind schedule.',
  focus: 'Prioritize site approvals and initiate 5 key partner meetings this week.',
};

const domainColors = ['#4CAF50', '#FF9800', '#F44336']; // green, amber, red

export default function Dashboard() {
  const [dateRange, setDateRange] = useState('3 months');
  const [showSummary, setShowSummary] = useState(false);

  const overallProgress = Math.round(domains.reduce((sum, d) => sum + d.progress, 0) / domains.length);
  const globalSentiment = 'steady'; // calm, steady, risk

  return (
    <div className="min-h-screen bg-sand-beige text-forest-brown">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-headline font-bold">Waykeeper Ecosystem Tracker</h1>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Calendar size={16} />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-transparent border-none outline-none"
              >
                <option value="3 months">3-Month Horizon</option>
                <option value="6 months">6-Month Horizon</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="flex items-center gap-2 bg-accent-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <RefreshCw size={16} />
              Regenerate Insight
            </button>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
              {overallProgress}% Complete
              <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                globalSentiment === 'calm' ? 'bg-green-100 text-green-800' :
                globalSentiment === 'steady' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
              }`}>
                {globalSentiment}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Overview Summary Panel */}
        <section>
          <h2 className="text-2xl font-headline font-semibold mb-6">Overview Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold mb-2">{domain.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${domain.progress}%`, backgroundColor: domain.color === 'green' ? '#4CAF50' : domain.color === 'amber' ? '#FF9800' : '#F44336' }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Phase: {domain.phase}</p>
                <p className="text-sm font-medium text-accent-gold">{domain.milestone}</p>
                <div className={`mt-2 px-2 py-1 rounded-full text-xs ${
                  domain.status === 'healthy' ? 'bg-green-100 text-green-800' :
                  domain.status === 'watch' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {domain.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Assisted Timeline View */}
        <section>
          <h2 className="text-2xl font-headline font-semibold mb-6">Timeline (12 Weeks)</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 overflow-x-auto">
            <div className="grid grid-cols-13 gap-2 min-w-max">
              <div className="font-semibold text-center border-r border-gray-200 pr-4">Tasks</div>
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="font-semibold text-center py-2 border-l border-gray-200">
                  Week {i + 1}
                </div>
              ))}
              {domains.map((domain) => (
                <React.Fragment key={domain.name}>
                  <div className="border-t border-gray-200 pl-4 py-2 font-medium">{domain.name}</div>
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className="py-2 border-l border-gray-200"
                      style={{ backgroundColor: i < (domain.progress / 100 * 12) ? domain.color === 'green' ? '#4CAF50' : domain.color === 'amber' ? '#FF9800' : '#F44336' : 'transparent', opacity: 0.3 }}
                    >
                      {i < (domain.progress / 100 * 12) && <div className="h-4 bg-current rounded" style={{ width: '100%' }} />}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Task Board Section */}
        <section>
          <h2 className="text-2xl font-headline font-semibold mb-6">Task Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto">
            {Object.entries(kanbanColumns).map(([column, tasks]) => (
              <div key={column} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 min-w-[250px]">
                <h3 className="font-semibold mb-4 text-center">{column}</h3>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="bg-gray-50 p-3 rounded border">
                      <h4 className="font-medium text-sm mb-1">{task.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">Domain: {task.domain}</p>
                      <p className="text-xs text-gray-600 mb-1">Owner: {task.owner}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">P{task.priority === 'High' ? '1' : '2'}</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${task.progress}%` }}></div>
                        </div>
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
          <h2 className="text-2xl font-headline font-semibold mb-6">AI Insights</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="mb-4 flex items-center gap-2 text-accent-gold hover:text-yellow-600"
            >
              {showSummary ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              Toggle Weekly Summary
            </button>
            {showSummary && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">This Week's Highlights</h3>
                  <p className="text-sm text-gray-700">{aiSummary.highlights}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Risks & Blockers</h3>
                  <p className="text-sm text-gray-700">{aiSummary.risks}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Next 7-Day Focus</h3>
                  <p className="text-sm text-gray-700">{aiSummary.focus}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Metrics & Insight Dashboard */}
        <section>
          <h2 className="text-2xl font-headline font-semibold mb-6">Metrics & Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold mb-4">Domain Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={domains.map(d => ({ name: d.name, value: d.progress }))}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {domains.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={domainColors[index % 3]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold mb-4">Performance Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Digital Platform" stroke="#4CAF50" />
                  <Line type="monotone" dataKey="Hub Construction" stroke="#FF9800" />
                  <Line type="monotone" dataKey="Branding" stroke="#F44336" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm border-t border-gray-200 p-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">Version 1.0 • Updated {new Date().toLocaleDateString()}</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-accent-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
              <Download size={16} />
              Export PDF
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              <Share2 size={16} />
              Share Live View
            </button>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .bg-sand-beige { background-color: #F3EDE3; }
        .text-forest-brown { color: #4A3B2E; }
        .text-accent-gold { color: #D1A45A; }
      `}</style>
    </div>
  );
}
