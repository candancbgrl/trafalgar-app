import React from 'react'
import { Stack, Avatar } from '@mui/material';

const Circles = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
        </Stack>
    )
}

export const Circle = () => {
    return (
        <>
            <Circles />
            <Circles />
            <Circles />
            <Circles />
        </>

    )
}
