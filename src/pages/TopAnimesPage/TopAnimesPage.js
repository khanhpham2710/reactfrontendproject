import { useParams } from "react-router-dom";
import { fetchAnimes } from "../../global/topSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import TopTable from "../../components/TopTable/TopTable";


function TopAnimesPage() {
    const { param } = useParams();
    const dispatch = useDispatch();
    const { animes, loading, error } = useSelector((state) => state.top);

    const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"];
    const filters = ["airing", "complete", "upcoming"];
    
    const [params, setParams] = useState({
        type: "",
        status: "",
    });


    useEffect(() => {
        if (types.includes(param.toLowerCase())) {
            setParams(prev => ({ ...prev, type: param, page: 1 }));
        } else if (filters.includes(param.toLowerCase())) {
            setParams(prev => ({ ...prev, filter: param, page: 1 }));
        }
    }, [param]);

    useEffect(() => {
        dispatch(fetchAnimes(params));
    }, [params, dispatch]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const heading = "Top " + param.charAt(0).toUpperCase() + param.slice(1) + " Animes";

    return (
        <>
            <Typography variant="h1" sx={{
                fontWeight: 700, textTransform: "uppercase", letterSpacing: "8px", fontSize: {
                    xs: "40px",
                    sm: "50px",
                    md: "60px",
                    lg: "70px",
                },
                textAlign: "center",
                marginBottom: "20px"
            }} gutterBottom>{heading}</Typography>
            <Container maxWidth="lg">
                <TopTable animes={animes} />
            </Container>
        </>
    );
}

export default TopAnimesPage;
