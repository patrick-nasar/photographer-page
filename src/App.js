import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Gallery from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-nunito transition duration-500 bg-slate-50 dark:bg-slate-800">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
