"use client";
import PropertiesFilter from '@/component/propertiesFilter/PropertiesFilter';
import React from 'react';
import styles from './property-listing-hero.module.css';

interface FilterProps {
    type: string;
    price: string; // Changed from number to string to match select values
    location: string;
    bathrooms: number; // Changed from number to string to match select values
    bedrooms: number; // Changed from number to string to match select values
}

interface PropertiesFilterProps {
    handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    propertyFilters: FilterProps;
}

const PropertyListingHero = ({propertyFilters, handleFilterChange}: PropertiesFilterProps) => {
    
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>Find Your Dream Property</h1>
                <PropertiesFilter 
                    propertyFilters={propertyFilters} 
                    handleFilterChange={handleFilterChange} 
                />
            </div>
        </section>
    );
};

export default PropertyListingHero;
