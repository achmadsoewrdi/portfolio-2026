import { useState, useEffect } from "react";

export default function useScrolled(treshold = 40){
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () =>{
            setScrolled(window.scrollY > treshold)
        }

        window.addEventListener('scroll', handleScroll, {passive:true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [treshold])
    return scrolled
}