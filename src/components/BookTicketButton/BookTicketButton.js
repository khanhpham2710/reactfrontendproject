import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";
import { useAuth } from '../../global/authContext/authContext';
import LoginButton from '../LoginButton/LoginButton';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 5
};

function TransitionsModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log('Opening modal');
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <MyButton context="BOOK TICKET" icon={<SendIcon sx={{ fontSize: "10px" }} />} onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              You need to log in to book ticket
            </Typography>
            <LoginButton label="Login"/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}




function BookTicketButton({movieID}) {
  const { userLoggedIn } = useAuth()

  const link = "/book/" + movieID

  if (userLoggedIn) {
    return (
      <Link to={link}>
        <MyButton context="BOOK TICKET" icon={<SendIcon sx={{ fontSize: "10px" }} />} />
      </Link>
    );
  }

  return <TransitionsModal />;
}

export default BookTicketButton;
