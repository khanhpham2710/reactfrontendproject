import { useParams } from "react-router-dom";
import { fetchAnimes } from "../../global/topSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Loading from "../../components/Loading/Loading";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MyPagination from "../../components/MyPagination/MyPagination";

function AnimesDisplay() {
    const { param } = useParams();
    const dispatch = useDispatch();
    const { animes, total, lastPage, loading, error } = useSelector((state) => state.top);

    const [page, setPage] = useState(1);

    const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"];
    const filters = ["airing", "complete", "upcoming"];

    const [filterAnimes,setFilerAnimes] = useState(animes)

    function handleChange(newPage){
        setPage(newPage);
        setParams(prev => ({ ...prev, page: newPage }));
    }
    
    const [params, setParams] = useState({
        type: "",
        status: "",
        page: 1,
        limit: 16
    });

    useEffect(() => {
        if (types.includes(param.toLowerCase())) {
            setParams(prev => ({ ...prev, type: param, page: 1 }));
        } else if (filters.includes(param.toLowerCase())) {
            setParams(prev => ({ ...prev, status: param, page: 1 }));
        }
    }, [param]);

    useEffect(() => {
        dispatch(fetchAnimes(params));
    }, [params]);

    useEffect(()=>{
        setFilerAnimes(animes)
    },[animes])


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Typography variant="h1" sx={{
                fontWeight: 700, textTransform: "uppercase", letterSpacing: "8px", fontSize: {
                    xs: "60px",
                    sm: "70px",
                    md: "80px",
                    lg: "80px",
                }
            }} gutterBottom>{param}</Typography>
            <Container>
                <Grid container spacing={3}>
                    {filterAnimes.map((anime, index) => (
                        <Grid item key={index} lg={3} md={4} sm={6} xs={6}>
                            <AnimeCard item={anime} />
                        </Grid>
                    ))}
                </Grid>
            <MyPagination lastPage={lastPage} page={page} handleChange={handleChange}/>
            </Container>
        </>
    );
}

export default AnimesDisplay;
