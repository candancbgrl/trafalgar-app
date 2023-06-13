import { Circle } from './Circle'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Introduction = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={6} mt={5}>
                <Stack direction="column" spacing={2}
                    sx={{ display: { justifyContent: 'flex-start' } }}>
                    <Stack direction="column" alignItems="flex-start" spacing={2} ml={1}>
                        <Circle />
                    </Stack>
                    <Stack direction="column" alignItems="flex-start"
                        px={22} >
                        <Typography sx={{ fontSize: '60px', lineHeight: '76px' }} >Virtual healthcare for you</Typography>
                        <Typography sx={{ fontSize: '24px', lineHeight: '32px', paddingRight: 7, color: '#7D7987', marginTop: 5 }} >Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</Typography>
                        <Button variant="contained" sx={{borderRadius: 10,width: '200px',height: '64px',marginTop:10}}>
                            <Typography>Consult today</Typography>
                        </Button>
                    </Stack>




                </Stack>
            </Grid>
            <Grid item xs={6} mt={5}>
                <Avatar variant="rounded"
                    sx={{
                        height: '690px', width: '800px'
                    }}
                    src={process.env.PUBLIC_URL + '/input.png'}>
                </Avatar>
            </Grid>
        </Grid>
    )
}
/**  <Stack direction="row" spacing={2} mt={10}
            sx={{ display: { justifyContent: 'center', flexGrow: 1, } }}>
            <Stack direction="column" spacing={2}
            sx={{ display: { justifyContent: 'center' } }}>
                <Typography variant ='h2' >Virtual healthcare for you</Typography>
                <Item>Item 2</Item>
            </Stack>
            <Avatar variant="rounded"
                sx={{
                    height: '600px', width: '700px'
                }}
                src={process.env.PUBLIC_URL + '/input.png'}>
            </Avatar>
        </Stack> */