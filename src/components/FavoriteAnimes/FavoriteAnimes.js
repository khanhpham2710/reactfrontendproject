import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavorite } from '../../global/userSlice0'; 
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Box, Typography, Container, Rating } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function createData(rank, image, title, rating) {
  return { rank, image, title, rating };
}

function FavoritesAnimes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorite } = useSelector((state) => state.user0);
  const [asc, setAsc] = useState(false);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const sortFunction = useCallback((array, flag) => {
    if (!array) return [];
    const temp = [...array];
    return temp.sort((a, b) => flag ? a.rating - b.rating : b.rating - a.rating);
  }, []);

  useEffect(() => {
    dispatch(loadFavorite());
  }, [dispatch]);

  useEffect(() => {
    if (favorite) {
      const sortedArray = sortFunction(favorite, asc);
      const newRows = sortedArray.map((anime, index) =>
        createData(index + 1, anime.image, anime.title, anime.rating)
      );
      setRows(newRows);
    }
  }, [favorite, asc, sortFunction]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (index) => {
    navigate('/anime/' + favorite[index].id);
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: '10%' }}>
                  <Typography variant="h5" fontWeight="800">Rank</Typography>
                </TableCell>
                <TableCell align="center" sx={{ width: '20%' }}>
                  <Typography variant="h5" fontWeight="800">Poster</Typography>
                </TableCell>
                <TableCell align="left" sx={{ width: '50%' }}>
                  <Typography variant="h5" fontWeight="800">Title</Typography>
                </TableCell>
                <TableCell align="right" sx={{ width: '20%' }}>
                  <Typography variant="h5" fontWeight="800">
                    {asc?<KeyboardDoubleArrowUpIcon onClick={()=>setAsc(false)} ml={4} />:<KeyboardDoubleArrowDownIcon onClick={()=>setAsc(true)} ml={4}/>}
                    Rating
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.rank}>
                  <TableCell component="th" scope="row" align="center">
                    <Typography variant="h5" fontWeight="800">{row.rank}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box
                      component="img"
                      src={row.image}
                      alt={row.title}
                      sx={{
                        height: '200px',
                        width: 'auto',
                        maxWidth: '100%',
                        display: 'block',
                        margin: '0 auto',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleClickOpen(row.rank - 1)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="h5" fontWeight="800"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleClickOpen(row.rank - 1)}
                    >
                      {row.title}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Rating name="read-only" value={row.rating} precision={0.5} readOnly />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}

export default FavoritesAnimes;
