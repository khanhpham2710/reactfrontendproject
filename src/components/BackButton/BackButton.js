import { useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Box } from "@mui/material";

function BackButton() {
    let navigate = useNavigate();
    return (
        <Box component="section" sx={{ px: 4 , display: "flex", height: "10vh", backgroundColor: "red", display: "flex", alignItems: "center" }}>
            <ArrowBackIosNewOutlinedIcon 
            sx = {{
                fontSize: "60px",
                aspectRatio: "1 / 1",
                padding: "2px",
                border: "4px solid #fff",
                borderRadius: "50%",
                transition:".3s linear",
                "&:hover": {
                    opacity: "0.7"
                }
            }}
            onClick={() => navigate(-1)}
            />
        </Box>
    );
};

export default BackButton