import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThomsonReuters from "./pages/experiences/ThomsonReuters";
import AnheuserBusch from "./pages/experiences/AnheuserBusch";
import CodingMind from "./pages/experiences/CodingMind";
import UCSDExp from "./pages/experiences/UCSanDiegoExperience";
import RootTech from "./pages/experiences/RootTech";
import PortfolioPage from "./pages/PortfolioPage";
import UCSD from "./pages/education/UCSanDiego";
import Yonsei from "./pages/education/Yonsei";
import Portfolio from "./pages/projects/Portfolio";
import COVIDStudy from "./pages/projects/COVIDStudy";
import HowPrivate from "./pages/projects/HowPrivate";
import TaxiPrediction from "./pages/projects/TaxiPrediction";
import TravelToday from "./pages/projects/TravelToday";
import UCSDZoo from "./pages/projects/UCSDZoo";
import Licensing from "./pages/Licensing";
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
      case "/thomson-reuters":
        title = "";
        metaDescription = "";
        break;
      case "/anheuser-busch":
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
      <Route path="/experience/thomson-reuters" element={<ThomsonReuters />} />
      <Route path="/experience/anheuser-busch" element={<AnheuserBusch />} />
      <Route path="/experience/coding-mind" element={<CodingMind />} />
      <Route path="/experience/ucsd" element={<UCSDExp />} />
      <Route path="/experience/roottech" element={<RootTech />} />
      <Route path="/education/ucsd" element={<UCSD />} />
      <Route path="/education/yonsei" element={<Yonsei />} />
      <Route path="/portfolio-page" element={<PortfolioPage />} />
      <Route path="/projects/portfolio" element={<Portfolio />} />
      <Route path="/projects/covid-study" element={<COVIDStudy/>} />
      <Route path="/projects/how-private" element={<HowPrivate/>} />
      <Route path="/projects/taxi-prediction" element={<TaxiPrediction/>} />
      <Route path="/projects/travel-today" element={<TravelToday/>} />
      <Route path="/projects/ucsd-zoo" element={<UCSDZoo/>} />
      <Route path="/image-license" element={<Licensing/>} />
    </Routes>
  );
}
export default App;
