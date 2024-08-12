import React from 'react'
import { Grid } from '@mui/material'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import "./CharacterSection.css"

function CharacterSection({ characters, animeId }) {
    return (
        <Grid container className='characters' style={{ overflowX: "auto", flexWrap: "nowrap" }}>
            {characters?.slice(0, 10).map((character, index) => {
                const { role } = character;
                const { mal_id } = character.character;
                return (
                    <Grid item key={index} style={{ minWidth: "25%" }}>
                        <CharacterCard character={character} role={role} animeId={animeId} mal_id={mal_id}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default CharacterSection;
