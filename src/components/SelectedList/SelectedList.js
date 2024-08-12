import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ListButton from '../ListButton/ListButton';
import CartButton from '../CartButton/CartButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SelectedList({ list, handleSeatClick, handleBookTickets }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemove = (row, num) => {
        handleSeatClick(row, num, false);
    };

    return (
        <React.Fragment>
            <CartButton />
            <ListButton onClick={handleClickOpen} list={list} />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Button autoFocus color="inherit" onClick={() => {
                            handleClose();
                            handleBookTickets();
                        }}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    {list.map((item, itemId) => (
                        <React.Fragment key={itemId}>
                            <ListItem>
                                <ListItemText>
                                    Row: {item.row}, Num: {item.num}, Seat No: {item.seatNo}, Date: {item.date}, Time: {item.time}
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        onClick={() => handleRemove(item.row, item.num)}
                                    >
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Dialog>
        </React.Fragment>
    );
}

export default SelectedList;
