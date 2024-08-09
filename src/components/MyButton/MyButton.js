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
                    xs: "8px 4px",
                    sm: "8px 10px",
                    md: "10px",
                    lg: "10px",
                },
                fontSize: {
                    xs: "8px",
                    sm: "14px",
                    md: "20px",
                    lg: "20px",
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