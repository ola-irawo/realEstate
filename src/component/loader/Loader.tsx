import React from "react";
import styles from "./loader.module.css";

interface LoaderProps {
  size?: number; // Size of the loader in pixels
  color?: string; // Color of the loader
}

const Loader: React.FC<LoaderProps> = ({ size = 50, color = "#4CAF50" }) => {
  return (
    <div className={styles.loaderContainer}>
      <div
        className={styles.loader}
        style={{
          width: size,
          height: size,
          borderColor: `${color} transparent ${color} transparent`,
        }}
        aria-label="Loading..."
      ></div>
    </div>
  );
};

export default Loader;
