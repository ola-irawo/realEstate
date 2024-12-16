"use client"
import React, { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [windowhWidth, setWindowWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize  = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [windowhWidth])
  return windowhWidth
}

export default useWindowWidth
