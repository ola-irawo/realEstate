"use client";

import React from "react";
import styles from "./properties-filter.module.css";

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

const PropertiesFilter = ({ propertyFilters, handleFilterChange }: PropertiesFilterProps) => {
  return (
    <section className={styles.filterSection}>
      
      <h2 className={styles.title}>Filter Properties</h2>

      <div className={styles.form}>
        <label>
          <select
            name="type"
            value={propertyFilters.type}
            onChange={handleFilterChange}
            className={styles.select}
          >
            <option value="">Select Type</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
            <option value="shortlet">Short Stay</option>
          </select>
        </label>

        <label>
            <select
                name="price"
                value={propertyFilters.price}
                onChange={handleFilterChange}
                className={styles.select}
            >
                {/* Conditionally render price options based on property type */}
                {propertyFilters.type === "sale" && (
                <>
                    <option value="">Select Price</option>
                    <option value="0-50000000">0 - 50000000</option>
                    <option value="50000000-100000000">50000000-100000000</option>
                    <option value="100000000-200000000">Above $1,000,000,000</option>
                </>
                )}

                {propertyFilters.type === "rent" && (
                <>
                    <option value="">Select Price</option>
                    <option value="0-1000000">Below $100,000</option>
                    <option value="1000000-5000000">100,000 - 500,000</option>
                    <option value="5000000-1000000">500,000 - 1,000,000</option>
                </>
                )}

                {propertyFilters.type === "shortlet" && (
                <>
                    <option value="">Select Price</option>
                    <option value="0-100000">0 - 100,000</option>
                    <option value="100000-300000">100,000 - 500,000</option>
                    <option value="300000-1000000">Above 1,000,000</option>
                </>
                )}
            </select>
        </label>

        <label>
          <select
            name="location"
            value={propertyFilters.location}
            onChange={handleFilterChange}
            className={styles.select}
          >
            <option value="">Select Location</option>
            <option value="Lekki">Lekki</option>
            <option value="Surelere">Surelere</option>
            <option value="Ikoyi">Ikoyi</option>
          </select>
        </label>
        <label>
          <select
            name="bathrooms"
            value={propertyFilters.bathrooms}
            onChange={handleFilterChange}
            className={styles.select}
          >
            <option value="">Select Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          <select
            name="bedrooms"
            value={propertyFilters.bedrooms}
            onChange={handleFilterChange}
            className={styles.select}
          >
            <option value="">Select Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
    </section>
  );
};

export default PropertiesFilter;
