import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Onboarding from './pages/Onboarding';
import LanguageSelection from './pages/LanguageSelection';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Voice from './pages/Voice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboarding />} />
          <Route path="language" element={<LanguageSelection />} />
          <Route path="home" element={<Home />} />
          <Route path="scan" element={<Scan />} />
          <Route path="voice" element={<Voice />} />
          <Route path="guide" element={<div className="p-6 text-center text-gray-500">Farming Guide Coming Soon</div>} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
