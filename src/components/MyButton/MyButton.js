import React from 'react'
import { Button } from '@mui/material'
import "./MyButton.css"

function MyButton(props) {
    const { context, icon, display} = props

    return (
        <Button
            sx={{
                display: display ? display:"inline-block",
                padding: {
                    xs: "10px 8px",
                    sm: "8px 10px",
                    md: "10px 10px",
                    lg: "15px 20px",
                },
                fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "20px",
                    lg: "24px",
                },
                textTransform: "uppercase",
                minWidth: "80px"
            }}
            variant='contained'
            disableElevation
            className='my_button'>
            <div style={{display: "flex", gap: "5px", justifyContent:"center", alignItems: "center"}}>
                {context}
                {icon}
            </div>
        </Button>
    )
}

export default MyButton