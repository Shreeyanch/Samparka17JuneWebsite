import { useCallback } from "react";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import Trust from "../components/trust";
import Products from "../components/products";
import RecommendationMobile from "../components/recommendation-mobile";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Home = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.home}>
      <Header onHomeTextClick={onHomeTextClick} />
      <HeroSection />
      <Trust />
      <Products />
      <RecommendationMobile group7791="/group-779-1@2x.png" />
      <Footer lETTERLOGO1="/letter-logo-1@2x.png" />
    </div>
  );
};

export default Home;
