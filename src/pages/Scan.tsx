import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Upload, X, CheckCircle, AlertTriangle } from 'lucide-react';

const Scan: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImgSrc(imageSrc);
            analyzeImage();
        }
    }, [webcamRef]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    setImgSrc(ev.target.result as string);
                    analyzeImage();
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const analyzeImage = () => {
        setIsAnalyzing(true);
        // Simulate AI Analysis delay
        setTimeout(() => {
            setIsAnalyzing(false);
            setResult({
                disease: "Leaf Blight",
                confidence: 94,
                severity: "Moderate",
                cause: "Fungal infection caused by Exserohilum turcicum.",
                treatment: [
                    "Apply fungicides containing Azoxystrobin.",
                    "Improve air circulation between plants.",
                    "Remove and destroy infected leaves."
                ]
            });
        }, 2500);
    };

    return (
        <div className="h-full flex flex-col bg-gray-50">
            {/* Header */}
            <div className="p-4 bg-white shadow-sm z-10">
                <h1 className="text-xl font-bold text-center">Disease Detection</h1>
            </div>

            {/* Camera / Preview Area */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                {!imgSrc ? (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="w-full h-full object-cover"
                        videoConstraints={{ facingMode: "environment" }}
                    />
                ) : (
                    <img src={imgSrc} alt="Captured" className="w-full h-full object-contain" />
                )}

                {/* Overlay UI */}
                {!imgSrc && (
                    <div className="absolute bottom-8 w-full flex justify-center items-center gap-8">
                        <label className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer">
                            <Upload size={24} />
                            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                        </label>
                        <button
                            onClick={capture}
                            className="w-16 h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center active:scale-95 transition-transform"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full"></div>
                        </button>
                    </div>
                )}

                {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
                        <div className="w-16 h-16 border-4 border-white border-t-primary rounded-full animate-spin"></div>
                        <p className="text-white mt-4 font-medium">Analyzing Crop...</p>
                    </div>
                )}
            </div>

            {/* Results Modal / Panel */}
            {result && (
                <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform animate-slide-up max-h-[70%] overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-1 rounded-full">
                            <AlertTriangle size={16} />
                            <span className="text-sm font-bold">Infected</span>
                        </div>
                        <button onClick={() => { setResult(null); setImgSrc(null); }} className="p-1 bg-gray-100 rounded-full">
                            <X size={20} />
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{result.disease}</h2>
                    <p className="text-gray-500 text-sm mb-4">Confidence: {result.confidence}% • Severity: {result.severity}</p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Cause</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{result.cause}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Recommended Treatment</h3>
                            <ul className="space-y-2">
                                {result.treatment.map((t: string, i: number) => (
                                    <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button onClick={() => { setResult(null); setImgSrc(null); }} className="w-full mt-6 bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-green-200">
                        Scan Another
                    </button>
                </div>
            )}
        </div>
    );
};

export default Scan;
