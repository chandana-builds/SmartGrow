import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Scan, Mic, BookOpen } from 'lucide-react';
import clsx from 'clsx';

const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Hide bottom nav on onboarding or if needed
    const showNav = location.pathname !== '/' && location.pathname !== '/language';

    const navItems = [
        { icon: Home, label: 'Home', path: '/home' },
        { icon: Scan, label: 'Scan', path: '/scan' },
        { icon: Mic, label: 'Voice', path: '/voice' },
        { icon: BookOpen, label: 'Guide', path: '/guide' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center font-sans">
            {/* Mobile Container */}
            <div className="w-full max-w-md h-[100dvh] bg-white shadow-xl relative overflow-hidden flex flex-col">

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto no-scrollbar relative">
                    <Outlet />
                </main>

                {/* Bottom Navigation */}
                {showNav && (
                    <nav className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2 z-50">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className={clsx(
                                        "flex flex-col items-center justify-center w-14 h-full space-y-1 transition-colors",
                                        isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                                    )}
                                >
                                    <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                )}
            </div>
        </div>
    );
};

export default Layout;
