"use client";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
    // Initialize with `undefined` or a safe default value
    const [windowWidth, setWindowWidth] = useState<number | undefined>(
        typeof window !== "undefined" ? window.innerWidth : undefined
    );

    useEffect(() => {
        // Ensure this code only runs in the browser
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize(); // Set initial width on mount
        window.addEventListener("resize", handleResize, { passive: true });

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
};

export default useWindowWidth;
