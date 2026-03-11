import { BrowserRouter } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import { About, Hero, Navbar } from "./components";
import { config } from "./constants/config";
import { LanguageProvider } from "./i18n";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";

const Experience = lazy(() => import("./components/sections/Experience"));
const Tech = lazy(() => import("./components/sections/Tech"));
const Works = lazy(() => import("./components/sections/Works"));
const Contact = lazy(() => import("./components/sections/Contact"));

const SectionFallback = () => (
  <div className="flex h-48 items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#915EFF] border-t-transparent" />
  </div>
);

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
            <div>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Suspense fallback={<SectionFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Tech />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Works />
            </Suspense>
            <div className="relative z-0">
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
