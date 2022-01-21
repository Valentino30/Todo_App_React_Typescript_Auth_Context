import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
