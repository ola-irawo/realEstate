"use client";
import React from "react";
import styles from "./recent-properties.module.css";
import PropertyCard from "@/component/propertyCard/PropertyCard";
import { useFilteredPropertyQuery } from "@/redux/features/propertiesApi/propertiesApi";
import Loader from "@/component/loader/Loader";

// interface Property {
//     id: string;
//     images: string[];
//     title: string;
//     type: string;
//     bedrooms: number;
//     bathrooms: number;
//     price: number;
//     location: {
//       city: string;
//       state: string;
//       country: string;
//     };
//     features: string[];
//   }

const RecentProperties = () => {
  // const type = ["sale", "rent", "shortlet"]
  // const randomType = type[Math.floor(Math.random() * type.length)];

  const {
    data: properties = [],
    isLoading,
  } = useFilteredPropertyQuery({propertyFilters: {type: "sale"}, propertyType: "sale"})

  if(isLoading){
    return <Loader />
  }
  
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recent Properties</h2>
      <ul className={styles.propertiesGrid}>
        {properties.slice(0, 4).map((property) => {
            return <li key={property.id}>
                <PropertyCard
                    image={property.images[0]}
                    title={property.title}
                    type={property.type}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    price={property.price}
                    location={property.location}
                    features={property.features}
                    id={property.id}
                />
            </li>
        })}
      </ul>
    </section>
  );
};

export default RecentProperties;
