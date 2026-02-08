import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const Voice: React.FC = () => {
    const [isListening, setIsListening] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Namaste! I am SmartGrow Assistant. Ask me anything about your crops in English, Hindi, or Telugu." }
    ]);

    const toggleListening = () => {
        if (!isListening) {
            setIsListening(true);
            // Simulate listening and response
            setTimeout(() => {
                setIsListening(false);
                addMessage('user', "How do I clear pests from my tomato plants?");
                setTimeout(() => {
                    addMessage('bot', "For tomato pests like aphids, you can spray a mixture of neem oil and water. For severe infestation, consult a local expert.");
                    speakResponse("For tomato pests like aphids, you can spray a mixture of neem oil and water.");
                }, 1000);
            }, 3000);
        } else {
            setIsListening(false);
        }
    };

    const addMessage = (role: 'user' | 'bot', text: string) => {
        setMessages(prev => [...prev, { role, text }]);
    };

    const speakResponse = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="h-full flex flex-col bg-gray-50">
            <div className="bg-white p-4 shadow-sm border-b z-10">
                <h1 className="text-xl font-bold text-center">Voice Assistant</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                            ? 'bg-primary text-white rounded-br-none'
                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                            }`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isListening && (
                    <div className="flex justify-end">
                        <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-full text-sm animate-pulse">
                            Listening...
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-20 left-0 right-0 p-4 flex justify-center pointer-events-none">
                <button
                    onClick={toggleListening}
                    className={`nav-item pointer-events-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening ? 'bg-red-500 animate-pulse' : 'bg-primary'
                        }`}
                >
                    {isListening ? <MicOff className="text-white" size={28} /> : <Mic className="text-white" size={28} />}
                </button>
            </div>
        </div>
    );
};

export default Voice;
