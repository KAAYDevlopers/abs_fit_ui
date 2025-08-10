import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/Carousel.module.scss";

const banners = [
  require("../content/car1.png"),
  require("../content/car2.png"),
  require("../content/car3.png"),
  require("../content/car4.png"),
  require("../content/car5.png"),
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className={styles.styledSlider}>
      {banners.map((banner, index) => (
        <div key={index}>
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className={styles.bannerImage}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
