import { BrowserRouter, Routes, Route } from "react-router-dom";
import Window1 from "./pages/Window1";
import Window2 from "./pages/Window2";
import Window3 from "./pages/Window3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Window1 />} />
        <Route path="/window2" element={<Window2 />} />
        <Route path="/window3" element={<Window3 />} />
      </Routes>
    </BrowserRouter>
  );
}
