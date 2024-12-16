"use client";
import React, { useEffect, useState } from "react";
import styles from "./recent-properties.module.css";
import PropertyCard from "@/component/propertyCard/PropertyCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/firebase";

interface Property {
    id: string;
    images: string[];
    title: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    location: {
      city: string;
      state: string;
      country: string;
    };
    features: string[];
  }

const RecentProperties = () => {
  const [p, setP] = useState<Property[]>([]);

  const propertiesQuery = async () => {
    const querySnapshot = await getDocs(collection(db, "sale"));
    const properties = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setP(properties);
  };

  useEffect(() => {
    propertiesQuery();
  }, []); // Run only on component mount

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recent Properties</h2>
      <ul className={styles.propertiesGrid}>
        {p.slice(0, 4).map((property) => {
            return <li>
                <PropertyCard
                    key={property.id}
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
