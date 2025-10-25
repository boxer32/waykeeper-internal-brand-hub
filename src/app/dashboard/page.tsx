import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Check, AlertCircle, BarChart3, Calendar, User } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  emoji: string;
  owner: string;
  dueDate: string;
  domain: 'Platform' | 'Hub' | 'Brand' | 'Ecosystem' | 'Launch';
  status: 'To Do' | 'Doing' | 'Done';
}

const domains = {
  Platform: { color: 'bg-blue-100 text-blue-800', border: 'border-blue-200' },
  Hub: { color: 'bg-yellow-100 text-yellow-800', border: 'border-yellow-200' },
  Brand: { color: 'bg-gray-100 text-gray-800', border: 'border-gray-200' },
  Ecosystem: { color: 'bg-neutral-100 text-neutral-800', border: 'border-neutral-200' },
  Launch: { color: 'bg-orange-100 text-orange-800', border: 'border-orange-200' },
} as const;

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [aiSummary, setAiSummary] = useState({
    focuses: ['Review platform API endpoints', 'Update brand guidelines', 'Test hub deployment'],
    risk: 'Potential delay in ecosystem integration due to API changes',
    highlight: 'Completed launch checklist milestone ahead of schedule',
  });

  useEffect(() => {
    const saved = localStorage.getItem('waykeeper-tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      // Initial sample tasks
      const initialTasks: Task[] = [
        { id: '1', title: 'Set up booking API', emoji: '🔧', owner: 'Dev Team', dueDate: '2025-10-28', domain: 'Platform', status: 'To Do' },
        { id: '2', title: 'Design narrative book layout', emoji: '🎨', owner: 'Design', dueDate: '2025-10-30', domain: 'Brand', status: 'Doing' },
        { id: '3', title: 'Deploy internal hub v2.0', emoji: '🚀', owner: 'Ops', dueDate: '2025-11-01', domain: 'Hub', status: 'Done' },
        { id: '4', title: 'Map ecosystem partnerships', emoji: '🌐', owner: 'Business', dueDate: '2025-11-05', domain: 'Ecosystem', status: 'To Do' },
        { id: '5', title: 'Prepare launch timeline', emoji: '📅', owner: 'PM', dueDate: '2025-10-27', domain: 'Launch', status: 'Doing' },
      ];
      setTasks(initialTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('waykeeper-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTaskInput.trim()) return;
    // Simulate AI extraction: simple parsing
    const words = newTaskInput.toLowerCase().split(' ');
    const domainMatch = words.find(w => Object.keys(domains).some(d => w.includes(d.toLowerCase()))) || 'Platform';
    const domain = (Object.keys(domains).find(d => domainMatch.includes(d.toLowerCase())) as any) || 'Platform';
    const dueMatch = words.find(w => w.match(/\d{1,2}/)); // Simple due date
    const dueDate = dueMatch ? `2025-10-${parseInt(dueMatch) + 25}`.slice(-2) : '2025-11-01'; // Mock
    const owner = words.slice(-2).join(' ') || 'Team';

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskInput,
      emoji: '📝',
      owner,
      dueDate,
      domain: domain as Task['domain'],
      status: 'To Do',
    };
    setTasks([...tasks, newTask]);
    setNewTaskInput('');
  };

  const updateTaskStatus = (id: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
    // Simulate micro-interaction feedback
    if (newStatus === 'Done') {
      // Could add toast or sound here
      console.log('Task completed! 🎉');
    }
  };

  const tasksByStatus = {
    'To Do': tasks.filter(t => t.status === 'To Do'),
    'Doing': tasks.filter(t => t.status === 'Doing'),
    'Done': tasks.filter(t => t.status === 'Done'),
  };

  const progressByDomain = Object.keys(domains).reduce((acc, d) => {
    const domainTasks = tasks.filter(t => t.domain === d);
    const done = domainTasks.filter(t => t.status === 'Done').length;
    const total = domainTasks.length;
    acc[d as Task['domain']] = total > 0 ? (done / total) * 100 : 0;
    return acc;
  }, {} as Record<Task['domain'], number>);

  return (
    <div className="min-h-screen bg-morning-light text-deep-earth p-4">
      {/* AI Summary Banner */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 mb-8 p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <BarChart3 className="mr-2" size={20} /> AI Morning Summary
        </h2>
        <div className="space-y-2 text-sm">
          <p><strong>3 Things to Focus Today:</strong></p>
          <ul className="ml-4 list-disc space-y-1">
            {aiSummary.focuses.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <p className="text-orange-600"><AlertCircle className="inline mr-1" size={16} /> Risk: {aiSummary.risk}</p>
          <p className="text-green-600"><Check className="inline mr-1" size={16} /> Highlight: {aiSummary.highlight}</p>
        </div>
      </div>

      {/* Add Task Input */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 mb-8 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            placeholder="e.g., Fix payment webhook before Friday (Platform)"
            className="flex-1 px-4 py-2 border border-soft-stone/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-skypath-blue"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button
            onClick={addTask}
            className="px-6 py-2 bg-skypath-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            <Plus className="mr-2" size={16} /> Add
          </button>
        </div>
        <p className="text-xs text-deep-earth/60 mt-1">AI will extract domain, owner, and due date automatically.</p>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {['To Do', 'Doing', 'Done'].map((status) => (
          <div key={status} className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-deep-earth">
              {status} ({tasksByStatus[status as Task['status']].length})
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {tasksByStatus[status as Task['status']].map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border ${domains[task.domain].border} ${domains[task.domain].color} cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => updateTaskStatus(task.id, status === 'To Do' ? 'Doing' : status === 'Doing' ? 'Done' : 'To Do')}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{task.emoji} {task.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full bg-white/50 ${status === 'Done' ? 'bg-green-100 text-green-800' : ''}`}>
                      {task.domain}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-deep-earth/70">
                    <div className="flex items-center">
                      <User className="mr-1" size={12} /> {task.owner}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={12} /> {task.dueDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <BarChart3 className="mr-2" size={20} /> Domain Progress
        </h3>
        <div className="space-y-4">
          {Object.entries(progressByDomain).map(([domain, progress]) => (
            <div key={domain} className="flex items-center justify-between">
              <span className="text-sm font-medium">{domain}</span>
              <div className="flex-1 mx-4">
                <div className="bg-soft-stone/30 rounded-full h-2">
                  <div
                    className={`bg-skypath-blue h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm">{Math.round(progress)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Digest Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 mt-8 p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Digest (Auto-generated every Friday)</h3>
        <p className="text-sm text-deep-earth/60 italic">Wins: 5 tasks completed this week | Risks: Monitor Launch domain | Next Week: Focus on Ecosystem integrations</p>
      </div>
    </div>
  );
};

export default Dashboard;
