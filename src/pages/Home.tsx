import React from 'react';
import { CloudSun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-6 pb-20">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Hello, Farmer!</h1>
                    <p className="text-gray-500 text-sm">Welcome back to SmartGrow</p>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Farmer+User&background=2E7D32&color=fff" alt="Profile" />
                </div>
            </div>

            {/* Weather Widget (Mock) */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-blue-100 font-medium">Hyderabad, IN</p>
                        <h2 className="text-4xl font-bold mt-1">28°C</h2>
                        <p className="text-blue-100 mt-1">Partly Cloudy</p>
                    </div>
                    <CloudSun size={48} className="text-yellow-300" />
                </div>
                <div className="mt-6 flex gap-4 text-sm font-medium text-blue-100">
                    <div className="flex items-center gap-1">
                        <span>Humidity: 65%</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Wind: 12km/h</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div>
                <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => navigate('/scan')}
                        className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center gap-2 hover:bg-green-100 transition-colors"
                    >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" /><path d="M3 12h18" /><path d="M12 22a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7z" /></svg>
                        </div>
                        <span className="font-semibold text-gray-700">Detect Disease</span>
                    </button>
                    <button
                        onClick={() => navigate('/voice')}
                        className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex flex-col items-center gap-2 hover:bg-yellow-100 transition-colors"
                    >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-yellow-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </div>
                        <span className="font-semibold text-gray-700">Ask Assistant</span>
                    </button>
                </div>
            </div>

            {/* Recent Activity / Tips */}
            <div>
                <h3 className="font-bold text-gray-800 mb-4">Farming Tips</h3>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-green-700 mb-1">Preventing Root Rot</h4>
                    <p className="text-gray-500 text-sm">Ensure proper drainage in your fields to prevent waterlogging, which causes root rot in crops.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
