import { Fab, Typography } from "@mui/material"
import "./ListButton.css"
import InventoryIcon from '@mui/icons-material/Inventory';

function ListButton({ onClick, list }) {

    return <Fab size="large" id="list_button" onClick={onClick} color="primary" sx={{ position: "fixed", bottom: "5%", right: "5%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
        <InventoryIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h4" component="p" className="number">{list.length}</Typography>
    </Fab>
}

export default ListButton