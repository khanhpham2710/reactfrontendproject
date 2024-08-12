import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, loadFavorite } from "../../global/userSlice0";
import { Stack } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const ratings = {
    0.5: 'Terrible',
    1: 'Very Poor',
    1.5: 'Poor',
    2: 'Below Average',
    2.5: 'Average',
    3: 'Good',
    3.5: 'Very Good',
    4: 'Excellent',
    4.5: 'Outstanding',
    5: 'Masterpiece',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${ratings[value]}`;
}

function HoverRating({ setRating, rating }) {
    const [value, setValue] = React.useState(rating || 0); 
    const [hover, setHover] = React.useState(-1);

    React.useEffect(() => {
        setValue(Number(rating) || 0); 
    }, [rating]);

    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setRating(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{ratings[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}



function AddToFavorite({ title, id, image }) {
    const dispatch = useDispatch();
    const [rating, setRating] = React.useState(0);
    const { favorite } = useSelector(state => state.user0);

    React.useEffect(() => {
        dispatch(loadFavorite());
    }, [dispatch]);

    React.useEffect(() => {
        if (favorite) {
            const item = favorite.find(item => item.id === id);
            if (item) {
                console.log('Rating found:', item.rating); 
                setRating(item.rating); 
            }
        }
    }, [favorite, id]);

    function handleClick() {
        dispatch(addFavorite({
            id,
            title,
            image,
            rating
        }));
    }

    return (
        <Stack spacing={2} sx={{ width: "100%" }} mt={2}>
            <HoverRating setRating={setRating} rating={rating} />
            <Button variant="contained" endIcon={<PlaylistAddIcon />} sx={{ maxWidth: "200px" }} onClick={handleClick}>
                Add to favorite
            </Button>
        </Stack>
    );
}

export default AddToFavorite;