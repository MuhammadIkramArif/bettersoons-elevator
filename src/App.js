import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./AppRouter";

// Initialize AOS
AOS.init();

function App() {
  // Ensure AOS updates on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
