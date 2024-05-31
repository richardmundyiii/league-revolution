import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AdminPage from "../AdminPage/AdminPage";
import EditSeason from "../../components/EditSeason/EditSeason";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/edit/:id" element={<EditSeason />} />
      </Routes>
    </div>
  );
}

export default App;
