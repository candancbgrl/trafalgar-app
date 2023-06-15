import { Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { GradyanCardCircle } from './StyledComponents'


const Circles = () => {
    return (
        <Stack direction="row" spacing={3}>
            <GradyanCardCircle isArrow isArrowFirst> </GradyanCardCircle>
            <GradyanCardCircle isArrow > </GradyanCardCircle>
            <GradyanCardCircle isArrow > </GradyanCardCircle>
            <GradyanCardCircle isArrow > </GradyanCardCircle>
        </Stack>
    )
}


export const Arrows = () => {
    return (
        <Stack direction='row' alignItems="center" justifyContent="center" >
            <KeyboardBackspaceIcon fontSize='large' sx={{ color: '#458FF6', opacity: 0.5, marginRight: 10 }} />
            <Circles />
            <KeyboardBackspaceIcon fontSize='large' sx={{
                color: '#458FF6',
                transform: 'rotate(-180deg)', marginLeft: 10
            }} />
        </Stack>
    )
}
