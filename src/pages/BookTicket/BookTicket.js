import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDateTime, addSeats, loadFromStorage as loadMovieState } from '../../global/movieBookingSlice0';
import { addTickets } from '../../global/userSlice0';
import { useParams } from 'react-router-dom';

const BookTicket = () => {
    const { id } = useParams();
    const [customerId, setCustomerId] = useState();

    const dispatch = useDispatch();

    const { schedule } = useSelector(state => state.movieBooking0);
    const { tickets } = useSelector(state => state.user0);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [selectedList, setSelectedList] = useState([])

    useEffect(() => {
        dispatch(loadMovieState())
        const logOut = JSON.parse(localStorage.getItem("logOut"))
        const googleUser = JSON.parse(localStorage.getItem("googleUser"))
        const user_info = JSON.parse(localStorage.getItem("user_info"))

        if (!logOut) {
            if (user_info) setCustomerId(user_info.id) 
            else if (googleUser) setCustomerId(googleUser.id)
        } else {
            alert("You need to log in to book ticket")
        }
    }, [date,time])
    


    function handleSeatClick(row, num, flag) {
        if (date && time && schedule[date] && schedule[date][time]) {
            const selectedSeat = schedule[date][time].find(seat => seat.row === row && seat.num === num);
            if (selectedSeat) {
                if (flag) {
                    const temp = {
                        date: date,
                        time: time,
                        row: row,
                        num: num,
                        seatNo: row + num,
                        available: true,
                        userId: customerId
                    }
                    const check = selectedList.findIndex(item => item.row === row && item.num === num);
                    if (check < 0) {
                        setSelectedList(prev => [...prev, temp])
                    }
                } else {
                    const temp = selectedList.filter(item => !(item.row === row && item.num === num));
                    setSelectedList(temp)
                }
            }
        }
    }


    // console.log("list", selectedList)

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

    const handleBookTickets = () => {
        try {
            console.log(selectedList)
            dispatch(addSeats({seats: selectedList, userId: customerId}))
            dispatch(addTickets(selectedList))
            alert('Tickets booked successfully!')
            dispatch(loadMovieState())
        }
        catch (err) {
            console.log(err)
            alert("There has been an error")
        }
    };

    return (
        <div style={{ height: "100vh", width: "100vw", background: "purple" }}>
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
                    {schedule[date][time].map((seat, seatId) => {
                        if (seat.available) {
                            return <button key={seatId} style={{ margin: '5px', background: "green" }} onClick={() => {
                                handleSeatClick(seat.row, seat.num, true)
                            }}>
                                {seat.seatNo}
                            </button>
                        } else {
                            return <button key={seatId} style={{ margin: "5px", background: "grey", pointer: "no-drop" }}>
                                {seat.seatNo}
                            </button>
                        }
                    })}

                    <h2>Selected List</h2>
                    <ul>
                        {
                            selectedList.map((item, itemId) => {
                                return <li key={itemId}>
                                    <p>Row: {item.row}, Num: {item.num},seatNo: {item.seatNo}</p>
                                    <button onClick={()=>handleSeatClick(item.row,item.num,false)}>Delete</button>
                                </li>
                            })
                        }
                    </ul>
                    <button onClick={handleBookTickets}>
                        Commit
                    </button>
                </div>
            )}
        </div>
    )
};

export default BookTicket;
