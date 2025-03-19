
// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";

function App() {
// const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster richColors position="top-right" />
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            {/* Admin Layout */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
