import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'

function NoSlider({ children }) {
    return (
        <>
            <Header />
            <Box sx={{ mt: "10vh"}}>
                {children}
            </Box>
            <Footer />
            <ScrollUpButton />
        </>
    )
}

export default NoSlider
