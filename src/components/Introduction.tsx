import { Circle } from './Circle'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Header, ConsultButton, ConsultButtonText } from './StyledComponents'

export const Introduction = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={5.5} mt={5}>
                <Stack direction="column" spacing={2}
                    sx={{ textAlign: 'flex-start' }}>
                    <Stack direction="column" alignItems="flex-start" spacing={2} ml={1}>
                        <Circle />
                    </Stack>
                        <Stack direction="column" alignItems="flex-start"
                            px={20} >
                            <Header isHeader>
                                Virtual healthcare for you
                            </Header>
                            <Header>
                                Trafalgar provides progressive, and affordable
                                healthcare, accessible on mobile and online
                                for everyone
                            </Header>
                            <ConsultButton>
                                <ConsultButtonText>Consult today</ConsultButtonText>
                            </ConsultButton>

                        </Stack>
                </Stack>
            </Grid>
            <Grid item xs={5.5} mt={5}>
                <Avatar variant="rounded"
                    sx={{
                        height: '690px', width: '800px'
                    }}
                    src={process.env.PUBLIC_URL + '/img/input.png'}>
                </Avatar>
            </Grid>
        </Grid>
    )
}

