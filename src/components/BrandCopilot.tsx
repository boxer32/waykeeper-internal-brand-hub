'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Loader2, Bot, User, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function BrandCopilot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "What's our brand voice?", icon: "💬" },
    { label: "Help me write an email", icon: "✉️" },
    { label: "What colors should I use?", icon: "🎨" },
    { label: "Suggest a tagline", icon: "💡" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickAction = (question: string) => {
    setInput(question);
    // Auto-send
    setTimeout(() => {
      const fakeEvent = { target: { value: question } };
      setInput(question);
      sendMessageWithText(question);
    }, 100);
  };

  const sendMessageWithText = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = async (content: string) => {
    await copyToClipboard(content);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-br from-skypath-blue to-journey-coral text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 group"
          title="Open Brand Copilot"
        >
          <MessageCircle size={24} />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-sunrise-gold rounded-full flex items-center justify-center text-xs font-bold text-deep-earth">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-soft-stone/30 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-skypath-blue to-journey-coral text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <div>
                <h3 className="font-headline font-bold">Brand Copilot</h3>
                <p className="text-xs opacity-90">AI brand assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-morning-light/30">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-deep-earth/60">
                <Bot size={48} className="mx-auto mb-4 text-skypath-blue opacity-50" />
                <p className="font-medium mb-2">Hi! I'm your Brand Copilot</p>
                <p className="text-sm mb-4">Click a quick action or ask anything:</p>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.label)}
                      className="w-full bg-white hover:bg-skypath-blue/10 border border-soft-stone/30 hover:border-skypath-blue/30 p-3 rounded-lg transition-all text-left group"
                    >
                      <span className="text-base mr-2">{action.icon}</span>
                      <span className="text-sm text-deep-earth group-hover:text-skypath-blue">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg ${
                      message.role === 'user'
                        ? 'bg-skypath-blue text-white p-3'
                        : 'bg-white text-deep-earth border border-soft-stone/30'
                    }`}
                  >
                    <div className={`flex items-center ${message.role === 'assistant' ? 'justify-between' : 'justify-start'} space-x-2 mb-1 ${message.role === 'assistant' ? 'px-3 pt-2' : ''}`}>
                      <div className="flex items-center space-x-2">
                        {message.role === 'assistant' && <Bot size={14} className="text-skypath-blue" />}
                        {message.role === 'user' && <User size={14} />}
                        <span className="text-xs opacity-70">
                          {message.role === 'assistant' ? 'Copilot' : 'You'}
                        </span>
                      </div>
                      {message.role === 'assistant' && (
                        <button
                          onClick={() => copyMessage(message.content)}
                          className="p-1 hover:bg-skypath-blue/10 rounded transition-colors"
                          title="Copy message"
                        >
                          <Copy size={12} className="text-skypath-blue" />
                        </button>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap ${message.role === 'assistant' ? 'px-3 pb-2' : ''}`}>
                      {message.content}
                    </p>
                  </div>
                </div>
              ))
            )}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-deep-earth border border-soft-stone/30 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 size={16} className="animate-spin text-skypath-blue" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-soft-stone/30 bg-white rounded-b-lg">
            {error && (
              <div className="mb-2 p-2 bg-heart-rose/10 border border-heart-rose/30 rounded text-heart-rose text-xs">
                {error}
              </div>
            )}
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about the brand..."
                className="flex-1 px-4 py-2 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all text-sm"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="p-2 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-deep-earth/50 mt-2">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}

