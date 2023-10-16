import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Gallery from "./pages/gallery";

import { Products } from "./pages/gallarysections.jsx/Products";
import { Models } from "./pages/gallarysections.jsx/Models";
import { Food } from "./pages/gallarysections.jsx/Food";
import { Graduation } from "./pages/gallarysections.jsx/Graduation";
import { Engaged } from "./pages/gallarysections.jsx/Engaged";
import { Conference } from "./pages/gallarysections.jsx/Conference";
import { Birthday } from "./pages/gallarysections.jsx/Birthday";
import { Wedding } from "./pages/gallarysections.jsx/Wedding";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-nunito transition duration-500  bg-slate-200 dark:bg-slate-800">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Gallery/Wedding" element={<Wedding />} />
          <Route exact path="/Gallery/Products" element={<Products />} />
          <Route exact path="/Gallery/Models" element={<Models />} />
          <Route exact path="/Gallery/Graduation" element={<Graduation />} />
          <Route exact path="/Gallery/Food" element={<Food />} />
          <Route exact path="/Gallery/Engaged" element={<Engaged />} />
          <Route exact path="/Gallery/Conference" element={<Conference />} />
          <Route exact path="/Gallery/Birthday" element={<Birthday />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
