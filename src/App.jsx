import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import StatsPage from "./pages/StatsPage";
import PrivacyPage from "./pages/PrivacyPage";
import { CookieConsentPopup } from "./components/CookieConsentPopup";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/hangman/" element={<StartPage />} />
        <Route path="/hangman/game" element={<GamePage />} />
        <Route path="/hangman/stats/:userId" element={<StatsPage />} />
        <Route path="/hangman/privacy" element={<PrivacyPage />} />
      </Routes>
      <CookieConsentPopup />
    </div>
  );
}

export default App;
