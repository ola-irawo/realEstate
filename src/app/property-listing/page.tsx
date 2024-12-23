import PropertyListingLayout from "@/features/pages/propertyListing/layout/PropertyListingLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Explore Properties for Sale, Rent, and Shortlet",
  description: "Discover a wide range of properties available for sale, rent, or shortlet. Find your next home or investment opportunity today.",
  openGraph: {
    title: "Explore Properties for Sale, Rent, and Shortlet",
    description: "Discover a wide range of properties available for sale, rent, or shortlet. Find your next home or investment opportunity today.",
    url: "https://www.aremudami_luxury.com",
    type: "website",
    images: [{
      url: `/favicon.ico`,
      width: 1200,
      height: 630,
      alt: "A preview of properties available for sale, rent, and shortlet",
    },]
  }
}

const page = () => {

  return (
    <div>
      <PropertyListingLayout />
    </div>
  );
};

export default page;
