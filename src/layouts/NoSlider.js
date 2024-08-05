import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'

function NoSlider({ children }) {
    return (
        <div>
            <Header />
            <Box sx={{ mt: "12vh" }}>
                {children}
            </Box>
            <Footer />
        </div>
    )
}

export default NoSlider
