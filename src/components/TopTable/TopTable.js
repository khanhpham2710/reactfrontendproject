import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Box, Typography } from '@mui/material';
import AnimeModal from "../AnimeModal/AnimeModal";

function createData(rank, image, title, score) {
    return { rank, image, title, score };
}

export default function TopTable(props) {
    const { animes } = props;

    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [selectedAnime, setSelectedAnime] = React.useState(null);

    React.useEffect(() => {
        const newRows = animes.map((anime, id) =>
            createData(id + 1, anime.images.jpg.image_url, anime.title, anime.score)
        );
        setRows(newRows);
    }, [animes]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickOpen = (anime) => {
        setSelectedAnime(anime);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedAnime(null);
    };

    return (
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
                                <Typography variant="h5" fontWeight="800">Score</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
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
                                        onClick={() => handleClickOpen(animes[index])}
                                    />
                                </TableCell>
                                <TableCell align="left">
                                    <Typography 
                                        variant="h5" fontWeight="800" 
                                        sx={{ cursor: 'pointer' }} 
                                        onClick={() => handleClickOpen(animes[index])}
                                    >
                                        {row.title}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5" fontWeight="800" color="gold">{row.score}</Typography>
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
            {selectedAnime && (
                <AnimeModal 
                    open={open} 
                    handleClose={handleClose} 
                    item={selectedAnime} 
                />
            )}
        </Paper>
    );
}
