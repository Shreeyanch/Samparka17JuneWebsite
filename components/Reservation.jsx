import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./Reservation.module.css";

const Reservation = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/get-in-touch");
  }, [router]);

  return (
    <div className={[styles.review2, className].join(" ")}>
      <div className={styles.directReviewParent}>
        <div className={styles.directReview}>Seamless Reservations</div>
        <div className={styles.optimizeReviews45}>
        Easily book your table, haircut, or other services in advance with Samparka. Enjoy a hassle-free experience and secure your spot effortlessly.
        </div>
        <div className={styles.contactlessSvgrepoCom1}>

            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.nfcqrEnabled}> Customizable Booking Options</div>
          <div className={styles.nfcqrEnabled}>  Real-Time Availability</div>
          <div className={styles.nfcqrEnabled}> Automated Reminders</div>

        </div>
        <div className={styles.contactlessSvgrepoCom1}>
          <img
            className={styles.designIdeasSvgrepoCom1Icon}
            alt=""
            src="/designideassvgrepocom-1.svg"
          />
          <div className={styles.nfcqrEnabled}>Customizable Design</div>
        </div>
        <div className={styles.frame} onClick={onFrameContainerClick}>
          <div className={styles.orderNow}>Order Now</div>
        </div>
      </div>
      
      <img className={styles.image3Icon} alt="" src="/image-21@2x.png" />
      
    </div>
  );
};

Reservation.propTypes = {
  className: PropTypes.string,
};

export default Reservation;
