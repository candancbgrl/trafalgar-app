
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Circle } from './Circle';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Header, ConsultButton, ConsultButtonText, SubText, SubHeader } from './StyledComponents'
import SouthIcon from '@mui/icons-material/South';
type SubtitlesProps = {
    index: any;
}



export const Subtitles: React.FC<SubtitlesProps> = ({ index }) => {
    return (
        <>
            {index === '0' ? <Grid container spacing={2} >
                <Grid item xs={5.5} mt={5} ml={15}>
                    <Avatar variant="rounded"
                        sx={{
                            height: '515px', width: '700px'
                        }}
                        src={process.env.PUBLIC_URL + '/img/2.png'}>
                    </Avatar>
                </Grid>
                <Grid item xs={5.5} mt={5}>
                    <Stack direction="column" spacing={2} px={15}
                        sx={{ textAlign: 'flex-start' }}>

                        <Stack direction="column" alignItems="flex-start"
                            px={1} >
                            <SubHeader>
                                Leading healthcare providers
                            </SubHeader>
                            <Divider sx={{ width: 56, height: 1.5, marginTop: 2, backgroundColor: '#000' }} />
                            <SubText>
                                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
                                in the solutions we deliver
                            </SubText>
                            <ConsultButton isOur variant='outlined' >
                                <ConsultButtonText isOur>Learn more</ConsultButtonText>
                            </ConsultButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid> :
                <>
                    <Stack direction="column" alignItems="flex-end" spacing={2} mr={1}>
                        <Circle />
                    </Stack>

                    <Grid container spacing={2} mt={20} >

                        <Grid item xs={5.5} mt={5}>
                            <Stack direction="column" spacing={2} pl={20}
                                sx={{ textAlign: 'flex-start' }}>


                                <Stack direction="column" alignItems="flex-start"
                                >
                                    <SubHeader index>
                                        Download our mobile apps
                                    </SubHeader>
                                    <Divider sx={{ width: 56, marginLeft: 25, height: 1.5, marginTop: 2, backgroundColor: '#000' }} />
                                    <SubText index>
                                        Our dedicated patient engagement app and
                                        web portal allow you to access information instantaneously (no tedeous form, long calls,
                                        or administrative hassle) and securely
                                    </SubText>
                                    <ConsultButton isOur index variant='outlined' >
                                        <Stack direction='row'>
                                            <ConsultButtonText isOur>
                                                Download
                                            </ConsultButtonText>
                                            <SouthIcon sx={{ marginLeft: 1, marginTop: 0.5 }} fontSize='small' />
                                        </Stack>

                                    </ConsultButton>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={5.5} ml={15}>
                            <Avatar variant="rounded"
                                sx={{
                                    height: '490px', width: '700px'
                                }}
                                src={process.env.PUBLIC_URL + '/img/3.png'}>
                            </Avatar>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}
