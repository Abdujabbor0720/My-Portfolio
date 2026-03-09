import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { config } from "./constants/config";
import { LanguageProvider } from "./i18n";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <div className="bg-primary relative z-0">
            <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
