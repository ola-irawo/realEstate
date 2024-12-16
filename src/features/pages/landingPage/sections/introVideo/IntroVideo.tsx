import React from "react";
import styles from "./intro-video.module.css";

const IntroVideo = () => {
  return (
    <section className={styles.videoSection}>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/idU2Sve-ZAs?autoplay=1&mute=1&rel=0"
        title="Introdution video"
        picture-in-picture
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default IntroVideo;
