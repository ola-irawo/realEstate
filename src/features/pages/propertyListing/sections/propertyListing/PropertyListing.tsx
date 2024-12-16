import React from 'react'
import styles from "./property-listing.module.css"
import PropertyCard from '@/component/propertyCard/PropertyCard'

interface Property {
    id: string;
    title: string;
    images: string[];
    bathrooms: number;
    bedrooms: number;
    location: { city: string; state: string; country: string };
    price: number;
    type: string;
    features: string[];
  }
  
  // Define the props for the PropertyListing component
  interface PropertyListingProps {
    properties: Property[];
    type: string
  }

const PropertyListing = ({properties, type}: PropertyListingProps) => {

  return (
    <section className={styles.propertyListingSection}>
      <h2 className={styles.propertyListingTitle}>For {type}</h2>

      <ul className={styles.propertyList}>
        {properties.map((property, index) => {
            return <li key={index} className={styles.propertyItem}>
                <PropertyCard
                    image={property.images[0]}
                    title={property.title}
                    bathrooms={property.bathrooms}
                    bedrooms={property.bedrooms}
                    location={property.location}
                    price={property.price}
                    type={property.type}
                    features={property.features}
                    id={property.id}
                />
           </li>
        })}
      </ul>
    </section>
  )
}

export default PropertyListing
