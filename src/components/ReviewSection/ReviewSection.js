import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from '../../global/userSlice0';

function Review({ review }) {
    const [showMore, setShowMore] = useState(false);
    const showMoreToggle = review.review.length > 250;

    return (
        <ListItemText
            primary={review.user.username}
            secondary={
                <Box >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{ flexGrow: 1 }}
                    >
                        {showMore || !showMoreToggle
                            ? review.review
                            : review.review.substring(0, 250) + '...'}
                    </Typography>
                    {showMoreToggle && (
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                marginLeft: "8px",
                                fontStyle: "italic",
                                color: "blue",
                                cursor: "pointer",
                                transition: "color 0.3s linear",
                                "&:hover": {
                                    color: "lightblue"
                                }
                            }}
                            onClick={() => {
                                setShowMore(!showMore);
                            }}
                        >
                            {showMore ? 'Show Less' : 'Read More'}
                        </Typography>
                    )}
                </Box>
            }
        />
    );
}

export default function ReviewSection({ reviews, id }) {
    const dispatch = useDispatch()
    const { userReviews } = useSelector(state => state.user0)

    React.useEffect(() => {
        dispatch(loadReviews());
    }, [dispatch]);

    return (
        <Container maxWidth="xl">
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {userReviews?.filter(review=>{
                    return review.id === id
                })?.map((review, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar src={review.photoURL}>{review?.user?.username?.trim()[0]}</Avatar>
                                </ListItemAvatar>
                                <Review review={review} />
                            </ListItem>
                        </React.Fragment>
                    )
                })}
                {reviews?.map((review, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar src={review.user.images.jpg.image_url} />
                                </ListItemAvatar>
                                <Review review={review} />
                            </ListItem>
                        </React.Fragment>
                    )
                })}
            </List>
        </Container>
    );
}