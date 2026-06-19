import { Routes, Route } from "react-router-dom";
import Birthday from "./pages/Birthday";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Birthday />} />
      <Route path="/birthday" element={<Birthday />} />
    </Routes>
  );
}
