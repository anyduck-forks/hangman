import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/stats/:userId" element={<StatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
