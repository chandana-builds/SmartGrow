import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
];

const LanguageSelection: React.FC = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = React.useState('en');

    const handleContinue = () => {
        // Here we would persist the selection
        navigate('/home');
    };

    return (
        <div className="h-full flex flex-col bg-white p-6 justify-between">
            <div className="mt-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Language</h1>
                <p className="text-gray-500 mb-8">Select your preferred language for SmartGrow assistant.</p>

                <div className="space-y-4">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setSelected(lang.code)}
                            className={clsx(
                                "w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all",
                                selected === lang.code
                                    ? "border-primary bg-green-50 text-primary"
                                    : "border-gray-100 hover:border-gray-200 text-gray-700"
                            )}
                        >
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-lg">{lang.native}</span>
                                <span className="text-sm opacity-80">{lang.name}</span>
                            </div>
                            {selected === lang.code && (
                                <div className="bg-primary text-white rounded-full p-1">
                                    <Check size={16} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={handleContinue}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 active:scale-95 transition-transform mb-4"
            >
                Continue
            </button>
        </div>
    );
};

export default LanguageSelection;
