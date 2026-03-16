import { useState, useEffect } from "react";

interface CursorState{
    x:number
    y:number
    hovered: boolean
}

export default function useCursor(){
    const [cursor, setCursor] = useState<CursorState>({
        x:0,
        y:0,
        hovered: false,
    })

    useEffect(()=>{
        const handleMove = (e:MouseEvent)=>{
            setCursor((prev)=>({...prev, x:e.clientX, y:e.clientY}))
        }

        const handleEnter = () => {
            setCursor((prev)=>({...prev,hovered:true}))
        }

        const handleLeave = ()=>{
            setCursor((prev)=>({...prev, hovered:false}))
        }

        window.addEventListener('mousemove', handleMove)

        // attach hover ke semua element interaktif
        const interactives = document.querySelectorAll(
            'a, button, [data-cursor-hover]'
        )
        interactives.forEach((el)=>{
            el.addEventListener('mouseenter', handleEnter)
            el.addEventListener('mouseleave', handleLeave)
        })

        return () =>{
            window.removeEventListener('mousemove', handleMove)
            interactives.forEach((el)=>{
                el.removeEventListener('mouseenter',handleEnter)
                el.removeEventListener('mouseleave', handleLeave)
            })
        }
    },[])
    return cursor
}