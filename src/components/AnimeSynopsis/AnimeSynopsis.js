import { useState } from "react";
import { Container, Typography } from "@mui/material";
import styles from "./AnimeSynopsis.module.css"
function AnimeSynopsis({ details }) {
    const {synopsis} = details;
    const [showMore, setShowMore] = useState(false)

    return (
        <Container maxWidth="xl">
            <Typography variant='h3' className={styles.synopsis} textAlign="center" fontWeight="800">Synopsis</Typography>
            <Typography variant='body1' textAlign="left" fontSize="24px" sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }}>{showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                <button style={{ marginLeft: "8px" }} onClick={() => {
                    setShowMore(!showMore)
                }}>{showMore ? 'Show Less' : 'Read More'}</button>
            </Typography>
        </Container>
    )
}

export default AnimeSynopsis