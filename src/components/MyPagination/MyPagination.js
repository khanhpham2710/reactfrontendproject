import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MyPagination(prop) {
    const { lastPage, page, handleChange } = prop

    return (
        <Stack spacing={2}>
            <Pagination siblingCount={2} sx={{display: "flex", justifyContent:"center", color: "red"}} size="large" count={lastPage} page={page} onChange={(e,p)=>handleChange(p)} />
        </Stack>
    );
}

