import { useParams } from "react-router-dom";
import { fetchAnimes } from "../../global/topSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import TopTable from "../../components/TopTable/TopTable";
import FilterBox from "../../components/FilterBox/FilerBox";
import { Box, Grid } from "@mui/material";
import MyBreadCrumbs from "../../components/MyBreadCrumb/MyBreadCrumb";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingAnimesDisplay from "../LoadingAnimesDisplay/LoadingAnimesDisplay";

function TopAnimesPage() {
    const { filterParam } = useParams();
    const dispatch = useDispatch();
    const { animes, loading, error } = useSelector((state) => state.top);

    const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"];
    const filters = ["airing", "complete", "upcoming"];

    const [type, setType] = useState("");
    const [filter, setFilter] = useState(filterParam || "");
    const [params, setParams] = useState({ type: "", filter: "" });
    const [heading, setHeading] = useState("");

    useEffect(() => {
        setParams({ type, filter });
    }, [type, filter]);

    useEffect(() => {
        dispatch(fetchAnimes(params));
    }, [params, dispatch]);

    useEffect(() => {
        let newHeading = "";
        if (filter || type) {
            const filterCapitalized = filter.charAt(0).toUpperCase() + filter.slice(1);
            const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
            newHeading = `${filterCapitalized} ${typeCapitalized}`;
        }
        setHeading(newHeading);
    }, [filter, type]);

    function handleClick() {
        setParams({ type, filter });
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <Container maxWidth="lg" px={2} my={2}>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "8px",
                    fontSize: {
                        xs: "40px",
                        sm: "50px",
                        md: "60px",
                        lg: "70px",
                    },
                    textAlign: "center",
                    marginTop: "2em"
                }}
                gutterBottom
            >
                Top {heading} Animes
            </Typography>
            <Container maxWidth="xl">
                <MyBreadCrumbs filter={filterParam} />
                <Box width="100%" my={6}>
                    <Grid container rowSpacing={4}>
                        {!filterParam ? (
                            <>
                                <Grid item xs={12} sm={12} md={6} lg={5} display="flex" justifyContent="center">
                                    <FilterBox list={filters} name="Status" value={filter} setValue={setFilter} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={5} display="flex" justifyContent="center">
                                    <FilterBox list={types} name="Type" value={type} setValue={setType} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={2} display="flex" justifyContent="center">
                                    <Button onClick={handleClick}>Filter</Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} sm={12} md={6} lg={8} display="flex" justifyContent="center">
                                    <FilterBox list={types} name="Type" value={type} setValue={setType} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4} display="flex" justifyContent="center">
                                    <Button onClick={handleClick}>Filter</Button>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
                <TopTable animes={animes} />
            </Container>
        </Container>
    );
}

export default TopAnimesPage;
