import { useCallback } from "react";
import Header from "../components/header";
import LoyaltyHero from "../components/loyalty-hero";
import LoyaltyWhy from "../components/loyalty-why";
import LoyaltyReasons from "../components/loyalty-reasons";
import With1 from "../components/with1";
import With from "../components/with";
import Footer from "../components/footer";
import LoyaltyHeroo from "../components/loyalty-heroo";
import  Whyloyalty from "../components/whyloyalty";
import HowItWorks from "../components/how-it-works";




import styles from "./smaparka-loyalty-solution.module.css";

const SmaparkaLoyaltySolution = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.smaparkaloyaltysolution}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <Header onHomeTextClick={onHomeTextClick} />
      <LoyaltyHero />
      <LoyaltyHeroo/>
      {/* <Whyloyalty/> */}
      <LoyaltyWhy />
      {/* <HowItWorks/> */}
      <LoyaltyReasons />
      <div className={styles.loyaltypricing}>
        <div className={styles.discoverAHassleFree}>
          Discover a hassle-free loyalty program that runs on its own.
        </div>
        <div className={styles.loyaltypricingframe}>
          <With1 />
          <With />
        </div>
      </div>
      <div className={styles.loyaltypunchline}>
        <div className={styles.discoverAHassleFree}>
          We’re not just a loyalty platform, we are your growth partner.
        </div>
      </div>
      <Footer lETTERLOGO1="/letter-logo-1@2x.png" propGap="100px" />
    </div>
  );
};

export default SmaparkaLoyaltySolution;
