import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Box, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addReviews } from '../../global/userSlice0';
import { useAuth } from '../../global/authContext/authContext';

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? '#9DA8B7' : '#1C2025'};
  background: ${theme.palette.mode === 'dark' ? '#303740' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#E5EAF2'};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? '#303740' : '#F3F6F9'};

  &:hover {
    border-color: #3399FF;
  }

  &:focus {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#0072E5' : '#b6daff'};
  }

  // Firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function ReviewBox({id}) {
  const [review, setReview] = React.useState('');
  const dispatch = useDispatch()
  const { currentUser, userLoggedIn } = useAuth()

  function handleSubmit() {
    dispatch(addReviews({id,review, photoURL: currentUser.photoURL, user: {
      username: currentUser.displayName,
    }}))
  }



  return (
    <Box px={4} py={2}>
      <Stack spacing={2}>
        <Textarea
          minRows={3}
          maxRows={8}
          aria-label="maximum height"
          placeholder="Leave your reviews here"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
