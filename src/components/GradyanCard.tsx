import { Box, Grid, Stack, Avatar, Typography,Divider } from '@mui/material';
import { Circle } from './Circle'
import { GradyanCardCircle } from './StyledComponents'


const boxStyle = {
  background: 'linear-gradient(to left, #00bfff, #1e90ff)',
  width: '1120px',
  height: '425px',
  borderRadius: '24px'
};
const Circles = () => {
  return (
    <Stack direction="column" spacing={2}>
      <GradyanCardCircle> </GradyanCardCircle>
      <GradyanCardCircle> </GradyanCardCircle>
      <GradyanCardCircle> </GradyanCardCircle>
      <GradyanCardCircle> </GradyanCardCircle>
      <GradyanCardCircle> </GradyanCardCircle>
    </Stack>
  )
}

export const GradyanCard = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" mt={30} mb={7}>
      <Stack direction='row' spacing={2} sx={{ alignSelf: 'flex-end', marginRight: 1, marginBottom: 4 }}>
        <Circles />
        <Circles />
      </Stack>
      <Box sx={boxStyle}>
        <Stack direction='column'>
          <Stack direction='row' sx={{ justifyContent: 'flex-end', marginRight: 2, marginTop: 2 }}>
            <Typography sx={{
              marginTop: 5,
              textAlign: 'start',
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'Muli, sans-serif',
              marginRight: 30
            }}>What our customers are saying</Typography>
            
            <Stack direction='column' sx={{ alignItems: 'flex-end' }}>
              <Stack direction="column" alignItems="flex-end" spacing={2}  >
                <Circle />
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ width: 56, margin: '0 auto', height: 1.5, marginTop: 2, backgroundColor: '#fff' }} />
          <Grid container mt={7}>
            <Grid item xs={3}>
              <Box
                sx={{
                  borderRadius: 100,
                  overflow: 'hidden', marginLeft: 13,
                  width: 150, height: 150, marginTop: 2, boxShadow: '0 0 0 5px white',
                }}>
                <img
                  src={process.env.PUBLIC_URL + '/img/p1.png'}
                  style={{
                    transform: 'scale(2)',
                    width: '180px', height: '260px', objectFit: 'cover'
                  }}
                ></img>
              </Box>
            </Grid>
            <Grid item xs={3} mt={3}>
              <Typography sx={{
                textAlign: 'start', fontSize: '22px', color: '#fff', fontWeight: 'bold',
                paddingTop: 4,
              }}
              >Edward Newgate</Typography>
              <Typography sx={{
                textAlign: 'start', fontSize: '18px', color: '#fff',
              }}
              >Founder Circle</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  maxWidth: 400,
                  color: '#fff', fontSize: '19px', textAlign: 'start',
                  paddingLeft: 1, paddingTop: 4, marginLeft: 2, lineHeight: '30px'
                }}
              >“Our dedicated patient engagement app and
                web portal allow you to access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely”</Typography>
            </Grid>
          </Grid>


        </Stack>
      </Box>
    </Grid>
  )
}
