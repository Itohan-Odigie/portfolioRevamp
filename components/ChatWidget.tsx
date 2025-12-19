import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi hi! ❄️ I\'m Berry, your virtual coding companion! Ask me anything about this portfolio! 🐻💻' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const apiHistory = messages.map(m => ({
      role: m.role,
      parts: m.text
    }));

    const responseText = await sendMessageToGemini(apiHistory, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden flex flex-col h-[400px] animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-200 to-blue-300 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-full">
                <span className="text-xl">🐻</span>
              </div>
              <span className="font-bold text-lg">Berry AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-blue-50/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-400 text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 border border-blue-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-blue-100 flex gap-1">
                  <span className="animate-bounce delay-0 text-blue-400">●</span>
                  <span className="animate-bounce delay-150 text-blue-400">●</span>
                  <span className="animate-bounce delay-300 text-blue-400">●</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-blue-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something cute..."
              className="flex-1 bg-blue-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 placeholder-blue-300"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-gray-200 text-gray-500' : 'bg-gradient-to-tr from-blue-300 to-blue-500 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <div className="relative"><MessageCircle size={28} /><Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-200 animate-spin-slow" /></div>}
      </button>
    </div>
  );
};

export default ChatWidget;