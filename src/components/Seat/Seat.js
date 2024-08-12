// components/Seat/Seat.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Seat = ({ seat, handleSeatClick }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(prev => !prev);
        handleSeatClick(seat.row, seat.num, !selected);
    };

    return (
        <Button
            variant="contained"
            sx={{
                border: "#ccc 2px solid",
                margin: '5px',
                background: selected ? 'red' : (seat.available ? 'green' : 'grey'),
                cursor: seat.available ? 'pointer' : 'no-drop',

                "&:hover": {
                    background: selected ? "red" : (seat.available ? "green" : "grey"),
                    opacity: seat.available ? "0.7 !important" : "1"
                }
            }}
            onClick={handleClick}
            disabled={!seat.available}
        >
            {seat.seatNo}
        </Button>
    );
};

export default Seat;
