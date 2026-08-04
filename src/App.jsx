import React from "react";
import AppRoutes from "./Routes/routes";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <AppRoutes />
    </div>
  );
};

export default App;
