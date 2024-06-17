import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./review.module.css";

const Review = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/get-in-touch");
  }, [router]);

  return (
    <div className={[styles.review2, className].join(" ")}>
      <div className={styles.directReviewParent}>
        <div className={styles.directReview}>2.Direct review</div>
        <div className={styles.optimizeReviews45}>
          Optimize reviews 4-5 stars lead to Google reviews, 1-3 stars redirect
          to a feedback form, saving from negative reviews.
        </div>
        <div className={styles.contactlessSvgrepoCom1}>
          <div className={styles.layer2Parent}>
            <img className={styles.layer2Icon} alt="" src="/layer-2@2x.png" />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.nfcqrEnabled}>Nfc/Qr Enabled</div>
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

Review.propTypes = {
  className: PropTypes.string,
};

export default Review;
