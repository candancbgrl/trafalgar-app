import React from 'react';
import { Box, Grid, Stack, Avatar, Typography } from '@mui/material';
import { Circle } from './Circle'

const boxStyle = {
  background: 'linear-gradient(to left, #00bfff, #1e90ff)',
  width: '1120px',
  height: '425px',
  borderRadius: '24px'
};
const Circles = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5 }}> </Avatar>
      <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
      <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
      <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
      <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
    </Stack>
  )
}

export const GradyanCard = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" mt={30} mb={7}>
      <Stack direction='row' spacing={2} sx={{ alignSelf: 'flex-end', marginRight: 1, marginBottom: 2 }}>
        <Circles/>
        <Circles/>
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
              fontFamily: 'Muli',
              marginRight: 30
            }}>What our customers are saying</Typography>
            <Stack direction='column' sx={{ alignItems: 'flex-end' }}>
              <Stack direction="column" alignItems="flex-end" spacing={2}  >
                <Circle />
              </Stack>
            </Stack>
          </Stack>

          <Grid container mt={7}>
            <Grid item xs={3}>

              <Box
                sx={{
                  backgroundColor: 'red', borderRadius: 100,
                  overflow: 'hidden', marginLeft: 8,
                  width: 150, height: 150, marginTop: 2
                }}>
                <Box
                  sx={{
                    backgroundColor: 'red', borderRadius: 800,
                    paddingRight: 150,
                    width: 100, height: 150, marginTop: 2
                  }}>

                  <img
                    src={process.env.PUBLIC_URL + '/img/p1.png'}
                    style={{
                      marginRight: 50,
                      width: '320px', height: '250px', objectFit: 'cover'
                    }}
                  ></img>
                </Box>
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


          {/* <Stack direction='row'>
            <Stack direction='row' mt={10}>
              <Box
                sx={{ position: 'relative', width: 150, height: 150, paddingLeft: 20 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    width: 150, height: 150,
                    borderRadius: '50%',
                    backgroundColor: '#EDF7FA',
                  }}
                />
                <Avatar
                  src={process.env.PUBLIC_URL + '/img/p1.png'}
                  sx={{ marginTop: 1, marginLeft: 1, width: 133, height: 133 }}
                />
              </Box>
              <Stack direction='column' >
                <Typography sx={{
                  color: '#fff', fontSize: '22px', fontWeight: 'bold',
                   paddingLeft: 1,paddingTop:4,marginLeft:2,lineHeight:'48px'
                }}
                >Edward Newgate</Typography>
                <div style={{textAlign:'start',fontSize:'18px',color:'#fff',marginLeft:23,}}  >Founder Circle</div>
              </Stack>
             
            </Stack>
            <Typography
               sx={{
                  color: '#fff', fontSize: '19px', 
                   paddingLeft: 1,paddingTop:4,marginLeft:2,lineHeight:'48px'
                }}
                >“Our dedicated patient engagement app and 
                web portal allow you to access information instantaneously (no tedeous form, long calls, 
                or administrative hassle) and securely”</Typography>
          </Stack> */}
        </Stack>
      </Box>
    </Grid>
  )
}
