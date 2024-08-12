import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTickets, loadTicketsFromStorage } from '../../global/userSlice0';
import { unBookSeats, loadMovieState } from '../../global/movieBookingSlice';
import Ticket from '../../components/Ticket/Ticket';
import { Box, Container, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import MyButton from '../../components/MyButton/MyButton';

function CartPage() {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.user0.tickets);
    const [removedList, setRemovedList] = useState([]);

    useEffect(() => {
        dispatch(loadTicketsFromStorage());
        dispatch(loadMovieState());
    }, [dispatch]);

    const handleRemoveTicket = (ticket) => {
        setRemovedList([...removedList, ticket]);
    };

    const handleRestoreTicket = (ticket) => {
        setRemovedList(removedList.filter(item => item !== ticket));
    };

    const handleConfirmRemoval = () => {
        removedList.forEach(ticket => {
            dispatch(removeTickets([ticket]));
            dispatch(unBookSeats({ seats: [ticket], userId: ticket.userId }));
        });
        setRemovedList([]);
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" mt="14vh" mb={4} fontWeight="800" letterSpacing={1}>Your Tickets</Typography>
            {tickets && <Typography variant='h3' mb={4}>Total price: ${tickets?.length * 4.99}</Typography>}
            {tickets.length > 0 ? (
                <Box width="100%" sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridGap: "2rem", my: 2 }}>
                    {tickets
                        .filter(ticket => !removedList.includes(ticket))
                        .map((ticket, index) => (
                            <Ticket ticket={ticket} key={index} onClick={handleRemoveTicket} button_name="Remove" button_icon={<DeleteIcon />} />
                        ))}
                </Box>
            ) : (
                <Typography variant='h4' textAlign="center">No tickets in the cart.</Typography>
            )}
            <Typography variant="h3" textAlign="center" my={4} fontWeight="800" letterSpacing={1}>Removed Tickets</Typography>
            {removedList && <Box sx={{ textAlign: "center", my: 4 }}>
                <Button onClick={handleConfirmRemoval} variant="contained" className='my_button'
                    sx={{
                        px: 2, py: 1,
                        fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                        },
                        textTransform: "uppercase",
                        minWidth: "80px"
                    }}>Confirm Removal</Button>
            </Box>}
            {removedList.length > 0 && (
                <Box width="100%" sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridGap: "2rem", my: 2 }}>
                    {removedList.map((ticket, index) => (
                        <Ticket key={index} ticket={ticket} onClick={handleRestoreTicket} button_name="Restore" button_icon={<RestoreIcon />}></Ticket>
                    ))}
                </Box>
            )}
        </Container>
    );
}

export default CartPage;
