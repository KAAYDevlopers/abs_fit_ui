import Rating from "@mui/material/Rating";
import styles from "../styles/components/ReviewsView.module.scss";

interface RatingStarsProps {
  rating: number;
  count: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, count }) => {
  return (
    <div className={styles.starContainer}>
      <Rating
        value={rating}
        precision={0.1}
        readOnly
        className={styles.customRating}
      />
      <div className={styles.text}>{count} Reviews</div>
    </div>
  );
};

const ReviewsView: React.FC = () => {
  return (
    <div className={styles.reviewsContainer}>
      <RatingStars rating={4.6} count={50} />
    </div>
  );
};

export default ReviewsView;
