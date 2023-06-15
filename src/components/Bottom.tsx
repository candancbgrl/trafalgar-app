import {
    Stack, Typography, Box, Avatar
} from '@mui/material'
import { BottomSubTitle, BottomTrafText } from './StyledComponents';



const boxStyle = {
    background: 'linear-gradient(to bottom, #00bfff, #1e90ff)',
    width: '100%',
    height: '425px',
};

const Circles = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, }}> </Avatar>
        </Stack>
    )
}


export const Bottom = () => {
    return (
        <Box sx={boxStyle}>
            <Stack direction='row' spacing={20} >
                <Stack direction='column' spacing={2} sx={{ marginTop: 15, marginLeft: 30 }}>
                    <Stack direction='row' spacing={2}>
                        <Avatar sx={{ bgcolor: '#fff', color: '#5B9BF3' }}>T</Avatar>
                        <BottomTrafText isTrafalgar>Trafalgar</BottomTrafText>
                    </Stack>
                    <BottomTrafText
                    >Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                        for everyone</BottomTrafText>
                    <BottomTrafText islower>©Trafalgar PTY LTD 2020. All rights reserved</BottomTrafText>
                </Stack>
                <Stack direction='column' sx={{ paddingTop: 15, textAlign: 'start', }} >
                    <BottomSubTitle isHeader>Company</BottomSubTitle>
                    <BottomSubTitle>About</BottomSubTitle>
                    <BottomSubTitle>Testimonials</BottomSubTitle>
                    <BottomSubTitle>Find a doctor</BottomSubTitle>
                    <BottomSubTitle>Apps</BottomSubTitle>
                </Stack>
                <Stack direction='column' sx={{ paddingTop: 15, textAlign: 'start', }} >
                    <BottomSubTitle isHeader>Region</BottomSubTitle>
                    <BottomSubTitle>Indonesia</BottomSubTitle>
                    <BottomSubTitle>Singapore</BottomSubTitle>
                    <BottomSubTitle>Hongkong</BottomSubTitle>
                    <BottomSubTitle>Canada</BottomSubTitle>
                </Stack>
                <Stack direction='column' sx={{ paddingTop: 15, textAlign: 'start', }} >
                    <BottomSubTitle isHeader>Help</BottomSubTitle>
                    <BottomSubTitle>Help center</BottomSubTitle>
                    <BottomSubTitle>Contact support</BottomSubTitle>
                    <BottomSubTitle>Instructions</BottomSubTitle>
                    <BottomSubTitle>How it works</BottomSubTitle>
                </Stack>

            </Stack>
            <Stack direction='column' spacing={2} sx={{ marginLeft: 1 }}>
                <Circles></Circles>
                <Circles></Circles>
                <Circles></Circles>
                <Circles></Circles>
            </Stack>
        </Box>
    )
}
