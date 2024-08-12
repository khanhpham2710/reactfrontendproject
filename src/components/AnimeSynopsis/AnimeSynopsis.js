import { useState } from "react";
import { Container, Typography } from "@mui/material";
import styles from "./AnimeSynopsis.module.css"

function AnimeSynopsis({ details }) {
    const {synopsis} = details;
    const [showMore, setShowMore] = useState(false)

    return (
        <Container maxWidth="xl" mt={2}>
            <Typography variant='body1' textAlign="left" fontSize={{
                lg: "22px",
                md: "22px",
                sm: "20px",
                xs: "20px"
            }} sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }}>{showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                <Typography variant="body" element="p" sx={{marginLeft: "8px", 
                fontStyle: "italic", color: "blue", cursor: "pointer",
                fontSize: "18px", transition: "color 0.3s linear", "&:hover":{
                    color: "lightblue"
                }}} onClick={() => {
                    setShowMore(!showMore)
                }}>[{showMore ? 'Show Less' : 'Read More'}]</Typography>
            </Typography>
        </Container>
    )
}

export default AnimeSynopsis