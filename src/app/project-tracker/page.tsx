'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Circle, Clock, AlertTriangle, TrendingUp, Calendar, User, Plus, Filter, Download, MessageCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  emoji: string;
  owner: string;
  dueDate: string;
  status: 'todo' | 'doing' | 'done';
  domain: 'platform' | 'hub' | 'brand' | 'ecosystem' | 'launch';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  completedAt?: string;
}

interface AISummary {
  focusToday: string[];
  risk: string;
  highlight: string;
  lastUpdated: string;
}

interface WeeklyDigest {
  wins: string[];
  risks: string[];
  nextWeek: string[];
  weekEnding: string;
}

const domainColors = {
  platform: 'bg-skypath-blue/10 text-skypath-blue border-skypath-blue/20',
  hub: 'bg-sunrise-gold/10 text-sunrise-gold border-sunrise-gold/20',
  brand: 'bg-journey-coral/10 text-journey-coral border-journey-coral/20',
  ecosystem: 'bg-heart-rose/10 text-heart-rose border-heart-rose/20',
  launch: 'bg-forest-green/10 text-forest-green border-forest-green/20',
};

const domainEmojis = {
  platform: '⚙️',
  hub: '🏠',
  brand: '🎨',
  ecosystem: '🌱',
  launch: '🚀',
};

export default function ProjectTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [aiSummary, setAiSummary] = useState<AISummary | null>(null);
  const [weeklyDigest, setWeeklyDigest] = useState<WeeklyDigest | null>(null);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);
  const [filterDomain, setFilterDomain] = useState<string>('all');

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('waykeeper-tasks');
    const savedSummary = localStorage.getItem('waykeeper-ai-summary');
    const savedDigest = localStorage.getItem('waykeeper-weekly-digest');

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Initialize with sample data
      const sampleTasks: Task[] = [
        {
          id: '1',
          title: 'Fix payment webhook integration',
          emoji: '💳',
          owner: 'Dev Team',
          dueDate: '2024-01-15',
          status: 'doing',
          domain: 'platform',
          priority: 'high',
          createdAt: '2024-01-10',
        },
        {
          id: '2',
          title: 'Update brand colors in CSS variables',
          emoji: '🎨',
          owner: 'Design Team',
          dueDate: '2024-01-12',
          status: 'done',
          domain: 'brand',
          priority: 'medium',
          createdAt: '2024-01-08',
          completedAt: '2024-01-11',
        },
        {
          id: '3',
          title: 'Create partner onboarding flow',
          emoji: '🤝',
          owner: 'Product Team',
          dueDate: '2024-01-20',
          status: 'todo',
          domain: 'ecosystem',
          priority: 'medium',
          createdAt: '2024-01-09',
        },
        {
          id: '4',
          title: 'Deploy internal brand hub to production',
          emoji: '🚀',
          owner: 'Dev Team',
          dueDate: '2024-01-14',
          status: 'done',
          domain: 'hub',
          priority: 'high',
          createdAt: '2024-01-05',
          completedAt: '2024-01-13',
        },
        {
          id: '5',
          title: 'Prepare launch announcement materials',
          emoji: '📢',
          owner: 'Marketing Team',
          dueDate: '2024-01-25',
          status: 'todo',
          domain: 'launch',
          priority: 'low',
          createdAt: '2024-01-11',
        },
      ];
      setTasks(sampleTasks);
    }

    if (savedSummary) {
      setAiSummary(JSON.parse(savedSummary));
    } else {
      // Generate AI summary
      generateAISummary();
    }

    if (savedDigest) {
      setWeeklyDigest(JSON.parse(savedDigest));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('waykeeper-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const generateAISummary = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayTasks = tasks.filter(task => task.dueDate === today);
    const overdueTasks = tasks.filter(task => task.dueDate < today && task.status !== 'done');
    const recentCompleted = tasks.filter(task => task.completedAt === today);

    const focusToday = todayTasks.slice(0, 3).map(task => task.title);
    const risk = overdueTasks.length > 0 ? `Overdue: ${overdueTasks[0].title}` : 'All on track';
    const highlight = recentCompleted.length > 0 ? recentCompleted[0].title : 'No completions today';

    const summary: AISummary = {
      focusToday,
      risk,
      highlight,
      lastUpdated: new Date().toISOString(),
    };

    setAiSummary(summary);
    localStorage.setItem('waykeeper-ai-summary', JSON.stringify(summary));
  };

  const addTask = () => {
    if (!newTaskInput.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskInput,
      emoji: '📝',
      owner: 'You',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      status: 'todo',
      domain: 'platform', // Default domain
      priority: 'medium',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTasks([...tasks, newTask]);
    setNewTaskInput('');
    setShowAddTask(false);
  };

  const updateTaskStatus = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus,
          completedAt: newStatus === 'done' ? new Date().toISOString().split('T')[0] : undefined,
        };
      }
      return task;
    }));
  };

  const getTasksByStatus = (status: Task['status']) => {
    let filteredTasks = tasks.filter(task => task.status === status);
    
    if (filterDomain !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.domain === filterDomain);
    }
    
    return filteredTasks;
  };

  const getProgressByDomain = (domain: Task['domain']) => {
    const domainTasks = tasks.filter(task => task.domain === domain);
    const completedTasks = domainTasks.filter(task => task.status === 'done');
    return domainTasks.length > 0 ? Math.round((completedTasks.length / domainTasks.length) * 100) : 0;
  };

  const getOverallProgress = () => {
    const completedTasks = tasks.filter(task => task.status === 'done');
    return tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;
  };

  const exportWeeklyDigest = () => {
    const digest: WeeklyDigest = {
      wins: tasks.filter(task => task.status === 'done' && task.completedAt).map(task => task.title),
      risks: tasks.filter(task => task.dueDate < new Date().toISOString().split('T')[0] && task.status !== 'done').map(task => task.title),
      nextWeek: tasks.filter(task => task.status === 'todo').slice(0, 3).map(task => task.title),
      weekEnding: new Date().toISOString().split('T')[0],
    };
    
    setWeeklyDigest(digest);
    localStorage.setItem('waykeeper-weekly-digest', JSON.stringify(digest));
  };

  return (
    <div className="min-h-screen bg-morning-light">
      {/* Header */}
      <div className="bg-white border-b border-soft-stone/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-headline font-bold text-deep-earth">
                Waykeeper Project Tracker
              </h1>
              <p className="text-sm text-deep-earth/60">
                Calm productivity for the 3-month ecosystem build
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowAddTask(!showAddTask)}
                className="flex items-center space-x-2 px-4 py-2 bg-skypath-blue text-white rounded-lg hover:bg-skypath-blue/90 transition-colors"
              >
                <Plus size={16} />
                <span>Add Task</span>
              </button>
              <button
                onClick={exportWeeklyDigest}
                className="flex items-center space-x-2 px-4 py-2 bg-sunrise-gold text-white rounded-lg hover:bg-sunrise-gold/90 transition-colors"
              >
                <Download size={16} />
                <span>Weekly Digest</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* AI Summary Banner */}
        {aiSummary && (
          <div className="bg-gradient-to-r from-skypath-blue/10 to-sunrise-gold/10 border border-skypath-blue/20 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-skypath-blue/20 rounded-lg">
                <MessageCircle className="text-skypath-blue" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-deep-earth mb-3">Today's Focus</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-deep-earth/80 mb-2">3 Things to Focus On</h4>
                    <ul className="text-sm text-deep-earth/60 space-y-1">
                      {aiSummary.focusToday.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-deep-earth/80 mb-2">Possible Risk</h4>
                    <p className="text-sm text-deep-earth/60">{aiSummary.risk}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-deep-earth/80 mb-2">Today's Highlight</h4>
                    <p className="text-sm text-deep-earth/60">{aiSummary.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Form */}
        {showAddTask && (
          <div className="bg-white border border-soft-stone/30 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-deep-earth mb-4">Add New Task</h3>
            <div className="flex space-x-3">
              <input
                type="text"
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
                placeholder="Fix payment webhook before Friday"
                className="flex-1 px-4 py-2 border border-soft-stone/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-skypath-blue/20"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <button
                onClick={addTask}
                className="px-6 py-2 bg-skypath-blue text-white rounded-lg hover:bg-skypath-blue/90 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* Progress Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(domainEmojis).map(([domain, emoji]) => (
            <div key={domain} className="bg-white border border-soft-stone/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{emoji}</span>
                <span className="text-sm font-medium text-deep-earth capitalize">{domain}</span>
              </div>
              <div className="w-full bg-soft-stone/30 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    domain === 'platform' ? 'bg-skypath-blue' :
                    domain === 'hub' ? 'bg-sunrise-gold' :
                    domain === 'brand' ? 'bg-journey-coral' :
                    domain === 'ecosystem' ? 'bg-heart-rose' :
                    'bg-forest-green'
                  }`}
                  style={{ width: `${getProgressByDomain(domain as Task['domain'])}%` }}
                />
              </div>
              <div className="text-xs text-deep-earth/60 mt-1">
                {getProgressByDomain(domain as Task['domain'])}% complete
              </div>
            </div>
          ))}
        </div>

        {/* Overall Progress */}
        <div className="bg-white border border-soft-stone/30 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-deep-earth">Overall Progress</h3>
            <span className="text-2xl font-bold text-skypath-blue">{getOverallProgress()}%</span>
          </div>
          <div className="w-full bg-soft-stone/30 rounded-full h-3">
            <div
              className="h-3 bg-gradient-to-r from-skypath-blue to-sunrise-gold rounded-full transition-all duration-500"
              style={{ width: `${getOverallProgress()}%` }}
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <Filter size={16} className="text-deep-earth/60" />
          <select
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
            className="px-3 py-2 border border-soft-stone/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-skypath-blue/20"
          >
            <option value="all">All Domains</option>
            <option value="platform">Platform</option>
            <option value="hub">Hub</option>
            <option value="brand">Brand</option>
            <option value="ecosystem">Ecosystem</option>
            <option value="launch">Launch</option>
          </select>
        </div>

        {/* Kanban Board */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* To Do */}
          <div className="bg-white border border-soft-stone/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Circle className="text-deep-earth/60" size={20} />
              <h3 className="font-semibold text-deep-earth">To Do</h3>
              <span className="bg-soft-stone/30 text-deep-earth/60 text-xs px-2 py-1 rounded-full">
                {getTasksByStatus('todo').length}
              </span>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('todo').map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border ${domainColors[task.domain]} cursor-pointer hover:shadow-sm transition-all`}
                  onClick={() => updateTaskStatus(task.id, 'doing')}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">{task.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-deep-earth">{task.title}</p>
                      <div className="flex items-center space-x-2 mt-2 text-xs text-deep-earth/60">
                        <User size={12} />
                        <span>{task.owner}</span>
                        <Calendar size={12} />
                        <span>{task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doing */}
          <div className="bg-white border border-soft-stone/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="text-sunrise-gold" size={20} />
              <h3 className="font-semibold text-deep-earth">Doing</h3>
              <span className="bg-sunrise-gold/20 text-sunrise-gold text-xs px-2 py-1 rounded-full">
                {getTasksByStatus('doing').length}
              </span>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('doing').map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border ${domainColors[task.domain]} cursor-pointer hover:shadow-sm transition-all`}
                  onClick={() => updateTaskStatus(task.id, 'done')}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">{task.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-deep-earth">{task.title}</p>
                      <div className="flex items-center space-x-2 mt-2 text-xs text-deep-earth/60">
                        <User size={12} />
                        <span>{task.owner}</span>
                        <Calendar size={12} />
                        <span>{task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Done */}
          <div className="bg-white border border-soft-stone/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="text-forest-green" size={20} />
              <h3 className="font-semibold text-deep-earth">Done</h3>
              <span className="bg-forest-green/20 text-forest-green text-xs px-2 py-1 rounded-full">
                {getTasksByStatus('done').length}
              </span>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('done').map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border ${domainColors[task.domain]} opacity-75`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">{task.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-deep-earth line-through">{task.title}</p>
                      <div className="flex items-center space-x-2 mt-2 text-xs text-deep-earth/60">
                        <User size={12} />
                        <span>{task.owner}</span>
                        <Calendar size={12} />
                        <span>Completed {task.completedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Digest */}
        {weeklyDigest && (
          <div className="mt-8 bg-white border border-soft-stone/30 rounded-lg p-6">
            <h3 className="font-semibold text-deep-earth mb-4">Weekly Digest</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-forest-green mb-2">Wins</h4>
                <ul className="text-sm text-deep-earth/60 space-y-1">
                  {weeklyDigest.wins.map((win, index) => (
                    <li key={index}>• {win}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-heart-rose mb-2">Risks</h4>
                <ul className="text-sm text-deep-earth/60 space-y-1">
                  {weeklyDigest.risks.map((risk, index) => (
                    <li key={index}>• {risk}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-skypath-blue mb-2">Next Week</h4>
                <ul className="text-sm text-deep-earth/60 space-y-1">
                  {weeklyDigest.nextWeek.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
