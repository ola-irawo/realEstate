import React, { useState } from 'react'
import styles from "./property-details.module.css"
import Link from 'next/link';
import BookInspection from '@/component/modal/bookInspection/BookInspection';

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
    id?: string
  }
  
  interface Props {
    property: PropertyProps
  }

const PropertyDetails = ({property}: Props) => {
  const [openBookInspection, setOpenBookInspection] = useState<boolean>((false))
  
  return (
    <section className={styles.detailsSection}>
      {openBookInspection && 
      <BookInspection 
        propertyLink={`${window.location}/${property.id}/${property.type}`}
        setOpenBookInspection={setOpenBookInspection}
        title={property.title}
        type={property.type}
      />}

      <article className={styles.detailsContainer}>
        <div className={styles.actionsContainer}>
          <a 
            href={"tel:+2348156959983"} 
            className={styles.contactAgentButton}
          >
            Contact Agent
          </a>
          <button 
            className={styles.bookInspectionButton}
            onClick={() => setOpenBookInspection(true)}
          >
            Book Inspection
          </button>
        </div>

        <h2 className={styles.propertyName}>{property.title}</h2>
        <p className={styles.propertyType}>For {property.type}</p>
        
        <div className={styles.location}>
          <p>{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</p>
          <p>{`Price: $${property.price.toLocaleString()}`}</p>
          <p>{`Bedrooms: ${property.bedrooms}`}</p>
          <p>{`Bedrooms: ${property.bathrooms}`}</p>
        </div>
        
        
        <div className={styles.description}>
          <h2>Description</h2>
          <p>{property.description}</p>
        </div>
        
        <div className={styles.features}>
          <h3>Features</h3>
          <ul>
            {property.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default PropertyDetails
