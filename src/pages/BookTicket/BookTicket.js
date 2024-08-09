import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDateTime, selectSeat, deselectSeat, loadFromStorage as loadMovieState } from '../../global/movieBookingSlice';
import { addTicket, removeTicket, loadTicketsFromStorage } from '../../global/userSlice';
import { useParams } from 'react-router-dom';

const BookTicket = ({ customerId }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { schedule, selectedSeats } = useSelector(state => state.movieBooking);
    const { tickets } = useSelector(state => state.user);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        dispatch(loadMovieState());
        dispatch(loadTicketsFromStorage());
    }, [dispatch]);

    const handleSeatClick = (rowIndex, seatIndex) => {
        if (date && time && schedule[date] && schedule[date][time]) {
            const seat = schedule[date][time][rowIndex][seatIndex];
            if (seat && seat.available) {
                const seatPayload = { date, time, row: rowIndex, seat: seatIndex, customerId };
                dispatch(selectSeat(seatPayload));
                dispatch(addTicket({ ...seatPayload, price: 4.99 }));
            } else {
                dispatch(deselectSeat({ date, time, row: rowIndex, seat: seatIndex, customerId }));
                dispatch(removeTicket({ date, time, row: rowIndex, seat: seatIndex }));
            }
        }
    };

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate);
        dispatch(setDateTime({ date: newDate, time }));
    };

    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setTime(newTime);
        dispatch(setDateTime({ date, time: newTime }));
    };

    return (
        <div style={{ height: "100vh", width: "100vw", background: "#f0f0f0" }}>
            <h1>Movie Booking</h1>
            <div>
                <label>
                    Date:
                    <input type="date" value={date} onChange={handleDateChange} />
                </label>
                <label>
                    Time:
                    <select value={time} onChange={handleTimeChange}>
                        <option value="6-8">6-8</option>
                        <option value="8-10">8-10</option>
                        <option value="10-12">10-12</option>
                        <option value="12-14">12-14</option>
                        <option value="14-16">14-16</option>
                        <option value="16-18">16-18</option>
                        <option value="18-20">18-20</option>
                    </select>
                </label>
            </div>
            {date && time && schedule[date] && schedule[date][time] && (
                <div>
                    <h2>Seats</h2>
                    {schedule[date][time].map((row, rowIndex) => (
                        <div key={rowIndex} style={{ marginBottom: '10px' }}>
                            {row.map((seat, seatIndex) => (
                                <button
                                    key={seat.seatNo}
                                    onClick={() => handleSeatClick(rowIndex, seatIndex)}
                                    style={{
                                        backgroundColor: seat.available ? 'green' : 'red',
                                        color: 'white',
                                        margin: '2px',
                                        padding: '10px',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {seat.seatNo}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            )}
            <div>
                <h2>Selected Tickets</h2>
                <ul>
                    {tickets.map((ticket, index) => (
                        <li key={index}>
                            Date: {ticket.date}, Time: {ticket.time}, Row: {ticket.row}, Seat: {ticket.seat}, Price: ${ticket.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookTicket;
