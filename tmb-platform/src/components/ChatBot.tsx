import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { clsx } from 'clsx';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {/* Chat Window */}
            <div className={clsx(
                "bg-slate-50 w-80 h-96 rounded-2xl shadow-2xl border border-slate-200 mb-4 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right",
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
            )}>
                <div className="bg-green-600 p-4 text-white flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><MessageCircle className="w-5 h-5" /></div>
                        <div>
                            <h4 className="font-bold text-sm">TBZ Assistant</h4>
                            <p className="text-[10px] text-green-100 flex items-center"><span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1"></span> Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded"><X className="w-4 h-4" /></button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-2xl rounded-tl-none text-sm max-w-[85%] shadow-sm">
                            Mwagwan! How can I help you today?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-2xl rounded-tl-none text-sm max-w-[85%] shadow-sm">
                            Select an option below:
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        {["📝 How to register?", "💰 Check market prices", "📍 Locate sales floor"].map(opt => (
                            <button key={opt} className="bg-green-100 text-green-800 text-xs py-2 px-3 rounded-lg text-left hover:bg-green-200 transition">{opt}</button>
                        ))}
                    </div>
                </div>

                <div className="p-3 bg-white border-t border-slate-200">
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Type a message..." className="flex-1 text-sm border border-slate-200 rounded-full px-4 py-2 outline-none focus:border-green-500 transition" />
                        <button className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition"><Send className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            {/* Float Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:bg-[#20bd5a] transition flex items-center justify-center transform hover:scale-110">
                <MessageCircle className="w-8 h-8" />
            </button>
        </div>
    );
}
