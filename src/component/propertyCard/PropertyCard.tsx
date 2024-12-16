import React, { useState } from "react";
import styles from "./property-card.module.css";
import Link from "next/link";
import BookInspection from "../modal/bookInspection/BookInspection";
import Image from "next/image";

interface PropertyProps {
  image: string;
  title: string;
  bathrooms: number;
  bedrooms: number;
  location: { city: string; state: string; country: string };
  price: number;
  type: string;
  features?: string[];
  id: string
}

const PropertyCard = ({
  image,
  title,
  bathrooms,
  bedrooms,
  location,
  price,
  type,
  id
}: PropertyProps) => {
  const [openBookInspection, setOpenBookInspection] = useState<boolean>(false)

  return (
    <article className={styles.card}>
       {openBookInspection && (
      <BookInspection
        title={title}
        type={type}
        propertyLink={`property-details/${id}/${type}`}
        setOpenBookInspection={setOpenBookInspection} 
      />
    )}
        
      <div className={styles.imageWrapper}>
        <Image
          src={image} 
          alt={title}
          width={10}
          height={10}
          className={styles.image}
          priority
        />
      </div>

      <div>

        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>

            <p className={styles.type}>{type}</p>
            <p className={styles.details}>
            <span>{bedrooms} Bedrooms</span> | <span>{bathrooms} Bathrooms</span>
            </p>

            <p className={styles.location}>
            {location.city}, {location.state}, {location.country}
            </p>
            {/* <ul className={styles.features}>
            {features.map((feature, index) => (
                <li key={index} className={styles.feature}>
                {feature}
                </li>
            ))}
            </ul> */}
            <p className={styles.price}>${price.toLocaleString()}</p>
        </div>


        <div className={styles.buttons}>
          <button className={styles.bookButton}
            onClick={() => setOpenBookInspection(true)}
          >Book Inspection</button>
          <Link href={`property-details/${id}/${type}`} className={styles.detailsButton}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
