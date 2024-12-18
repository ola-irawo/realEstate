import React from "react";
import styles from "./inspection-videos.module.css"

const PropertyInspectionSection = () => {
  // Example YouTube video links
  const videos = [
    { id: "1", title: "Luxury Apartment Inspection", link: "https://www.youtube.com/embed/_OJ_GMwolVo?autoplay=1&mute=1&rel=0" },
    // { id: "2", title: "Modern Office Space Tour", link: "https://www.youtube.com/embed/sample_video2" },
    // { id: "3", title: "Cozy Family Home Walkthrough", link: "https://www.youtube.com/embed/sample_video3" },
  ];

  return (
    <section className={styles.inspectionSection}>
      <h2 className={styles.sectionHeading}>Property Inspection Videos</h2>
      <p className={styles.sectionDescription}>
        Explore detailed inspections of our top-rated properties to find your perfect match.
      </p>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <iframe
                className={styles.videoFrame}
                src={video.link}
                title="Introdution video"
                picture-in-picture="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            ></iframe>
            <h3 className={styles.videoTitle}>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyInspectionSection;
