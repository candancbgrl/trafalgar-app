import { Stack, Avatar } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { transform } from 'typescript';
const Circles = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Avatar sx={{ bgcolor: '#5B9BF3', width: 10, height: 10,}}> </Avatar>
            <Avatar sx={{ bgcolor: '#5B9BF3', width: 10, height: 10, opacity:0.5,}}> </Avatar>
            <Avatar sx={{ bgcolor: '#5B9BF3', width: 10, height: 10,opacity:0.5, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#5B9BF3', width: 10, height: 10, opacity:0.5,}}> </Avatar>
        </Stack>
    )
}


export const Arrows = () => {
    return (
        <Stack direction='row' alignItems="center" justifyContent="center" >
           <KeyboardBackspaceIcon fontSize='large' sx={{color:'#458FF6',opacity:0.5,marginRight:10}}/>
            <Circles/>
            <KeyboardBackspaceIcon fontSize='large' sx={{color:'#458FF6',
            transform:'rotate(-180deg)',marginLeft:10
        }}/>
        </Stack>
    )
}
