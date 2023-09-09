import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Ethan Lee's Portfolio";
        metaDescription = "Ethan Lee's experience and works, beautifully told.";
        break;
      case "/experience-page":
        title = "";
        metaDescription = "";
        break;
      case "/portfolio-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience-page" element={<ExperiencePage />} />
      <Route path="/portfolio-page" element={<PortfolioPage />} />
    </Routes>
  );
}
export default App;
