"use client"
import React, { useEffect, useState } from 'react'
import styles from "./property-details-hero.module.css"
import Image from 'next/image';
interface PropertyProps {
  images: string[];
  title: string;
  type: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
}

interface Props {
  property: PropertyProps
}

const PropertyDetailsHero = ({property}: Props) => {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const images = property?.images || [];

    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
    };
  
    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 50) {
        handleNext();
      }
      if (touchEnd - touchStart > 50) {
        handlePrev();
      }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };  

    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentImageIndex, handleNext]); // Depend on the currentImageIndex to reset interval
  
  return (
    <section>
      <article>
        <div className={styles.propertyDetailsContainer}>
          
          <div className={styles.imageGallery}>
            <div 
              className={styles.showcaseImage}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Property Image ${currentImageIndex + 1}`}
                className={styles.propertyImage}
                width={200}
                height={200}
              />

              <div>
                <button
                  onClick={handlePrev}
                  className={`${styles.navButton} ${styles.prevButton}`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className={`${styles.navButton} ${styles.nextButton}`}
                >
                  Next
                </button>
              </div>
            </div>
            
            <ul className={styles.imgList}>
              {
                property.images.map((image: string, index: number) => {
                  return <li key={index} className={styles.imgItem}>
                    <Image
                      onClick={() => setCurrentImageIndex(index)}
                      src={image}
                      alt='Property Image'
                      width={100}
                      height={100}
                      className={`${styles.sideImg} ${currentImageIndex === index ? styles.removeOpcaity : ""} `}
                    />
                  </li>
                })
              }
            </ul>

          </div>
        </div>
      </article>
     
    </section>
  )
}

export default PropertyDetailsHero
