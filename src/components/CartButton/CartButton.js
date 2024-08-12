import { Fab, Typography } from "@mui/material"
import "./CartButton.css"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTicketsFromStorage } from "../../global/userSlice0"
import { useNavigate } from "react-router-dom";

function CartButton({ onClick, list }) {
    const dispatch = useDispatch()
    const { tickets } = useSelector(state => state.user0)
    const navigate = useNavigate()

    function handleClick(){
        navigate("/mycart")
    }

    useEffect(()=>{
        dispatch(loadTicketsFromStorage())
    },[])

    return <Fab size="large" id="list_button" onClick={handleClick} color="primary" sx={{ position: "fixed", bottom: "20%", right: "5%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
        <ShoppingCartCheckoutIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h4" component="p" className="number">{tickets.length}</Typography>
    </Fab>
}

export default CartButton