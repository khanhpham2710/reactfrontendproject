import { useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Box, Typography } from "@mui/material";

function BackButton({ label }) {
    let navigate = useNavigate();
    return (
        <Box component="section" sx={{ px: 4, display: "flex", height: "100%", alignItems: "center" }}>
            <ArrowBackIosNewOutlinedIcon
                sx={{
                    fontSize: "40px",
                    aspectRatio: "1 / 1",
                    padding: "2px",
                    border: "4px solid #fff",
                    borderRadius: "50%",
                    transition: ".3s linear",
                    "&:hover": {
                        opacity: "0.7"
                    }
                }}
                onClick={() => navigate(-1)}
            /><Typography variant="h6" sx={{
                transition: ".3s linear",
                "&:hover": {
                    opacity: "0.7"
                }
            }}>Go back</Typography>
        </Box>
    );
};

export default BackButton