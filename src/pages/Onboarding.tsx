import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Import local assets
// Note: Vite requires importing to resolve paths correctly in build
import whatImg from '../assets/what.jpeg';
import howImg from '../assets/how.jpeg';
import smartGrowImg from '../assets/SmartGrow.jpeg';

const slides = [
    {
        title: "Welcome to SmartGrow",
        description: "Your AI-powered personal farming assistant.",
        image: smartGrowImg,
        bg: "bg-green-50"
    },
    {
        title: "Detect Diseases Instantly",
        description: "Take a photo of your crop to identify diseases and get treatment advice.",
        image: whatImg,
        bg: "bg-blue-50"
    },
    {
        title: "Smart Farming Advice",
        description: "Get weather updates and multilingual voice assistance.",
        image: howImg,
        bg: "bg-yellow-50"
    }
];

const Onboarding: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        if (current < slides.length - 1) {
            setCurrent(current + 1);
        } else {
            navigate('/language');
        }
    };

    return (
        <div className={`h-full flex flex-col pt-10 px-6 ${slides[current].bg} transition-colors duration-500`}>
            {/* Image Area */}
            <div className="flex-1 flex justify-center items-center relative">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={current}
                        src={slides[current].image}
                        alt="Onboarding"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                    />
                </AnimatePresence>
            </div>

            {/* Text Area */}
            <div className="bg-white rounded-t-3xl p-8 -mx-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] h-1/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{slides[current].title}</h2>
                    <p className="text-gray-500 leading-relaxed">{slides[current].description}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    {/* Indicators */}
                    <div className="flex space-x-2">
                        {slides.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 rounded-full transition-all border ${idx === current ? "w-8 bg-primary border-primary" : "w-2 bg-transparent border-gray-300"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 active:scale-95 transition-transform"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
