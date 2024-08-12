import { Fab } from "@mui/material"
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import { useRef, useEffect, useCallback } from "react";
import "./ScrollUpButton.css"

function ScrollUpButton() {
    const buttonRef = useRef()

    const handleClick = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []); 


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                buttonRef.current.style.opacity = 1;
            } else {
                buttonRef.current.style.opacity = 0;
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [buttonRef]);

    return <Fab size="medium" className="scroll_up_button" onClick={handleClick} color="primary" ref={buttonRef} sx={{
        display: "flex",  transition: "opacity 0.5s ease-in-out", 
        position: "fixed", bottom: "5%", right: "5%",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}>
        <KeyboardArrowUpSharpIcon sx={{fontSize: "40px"}}/>
    </Fab>
}

export default ScrollUpButton