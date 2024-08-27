import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../global/genreSlice";
import { memo, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

function GenresButton() {
    const dispatch = useDispatch()
    const { genres } = useSelector((state) => state.top);

    
    useEffect(()=>{
        if (!genres){
            dispatch(fetchGenres())
        }
    },[])
    

    return(
        <Button
            component={Link}
            to={"/genres"}
            sx={{
                color: 'white',
                display: 'block',
                p: "10px 15px",
                transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out, display 0.5s ease-in-out",
                "&:hover": {
                    color: "red",
                    backgroundColor: "transparent",
                }
            }}            
        >
            <Typography variant='h6' fontSize="18px" fontWeight="700" lineHeight="30px">
                Genres
            </Typography>
        </Button>
    )
}

export default memo(GenresButton);