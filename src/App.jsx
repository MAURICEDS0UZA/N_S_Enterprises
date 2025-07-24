import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Skills from "./Components/Skill";
import Home from "./Components/Home";
import { lazy, Suspense } from "react";
import ShimmerResume from "./Components/ShimmerResume";
import useIsMobile from "./utils/hooks/isMobile";
import Projects from "./Components/Projects";

const Resume = lazy(() => import("./Components/Resume"));

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        {
          <>
            <Route
              path="/projects"
              element={
                <Suspense fallback={<div>Loading Project...</div>}>
                  <Projects />
                </Suspense>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<ShimmerResume />}>
                  {<Resume />}
                </Suspense>
              }
            />
          </>
        }
      </Routes>
      {!isMobile && <Footer />}
    </Router>
  );
}

export default App;

