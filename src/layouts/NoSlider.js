import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'

function NoSlider({ children }) {
    return (
        <>
            <Header />
            <Box sx={{ mt: "10vh"}}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default NoSlider
