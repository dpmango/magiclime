import React, { useState, useEffect } from 'react'

const useResolution = (resolution = 480) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleResize = () => {
        //let isMobileDevice = !!navigator.userAgent.match(/Mobile/) || false
        let width = window.innerWidth

        if (width <= resolution) setIsMobile(true)
        else setIsMobile(false)
    }

    return isMobile
}

export default useResolution;
