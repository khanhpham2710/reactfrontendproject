import React from 'react';
import { Grid } from '@mui/material';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import "./CharacterSection.css"

function CharacterSection({ characters, animeId }) {
    return (
        <Grid container className="characters" style={{ overflowX: "auto", flexWrap: "nowrap" }}>
            {characters?.slice(0, 10).map((character) => {
                const { role, character: { mal_id } } = character;
                return (
                    <Grid item key={mal_id} sx={{ minWidth: { xs: "30%", sm:"25%", md: "20%" }}}>
                        <CharacterCard character={character} role={role} animeId={animeId} mal_id={mal_id}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default CharacterSection;
