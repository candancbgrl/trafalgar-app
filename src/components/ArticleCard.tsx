import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Card, CardMedia, CardContent, Stack, Typography, CardActions, Button } from '@mui/material';


type ArticleCardProp = {
  image: any;
  header: any;
  text: any;
}

export const ArticleCard: React.FC<ArticleCardProp> = ({ image, header, text }) => {
  return (
    <Card sx={{ maxWidth: 367, borderRadius: 10,boxShadow: '10px 10px 40px 10px rgba(0, 0, 0, 0.1)', }}>
      <CardMedia
        sx={{ height: 245 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom  component="div" sx={{maxWidth:300,fontSize:'21px',lineHeight:'32px' ,fontWeight: 'bold',fontFamily:'Muli, sans-serif' }}>
          {header}
        </Typography>
        <Typography color="text.secondary" sx={{
          fontSize:'16px',lineHeight:'28px',marginRight:7,marginLeft:2
        }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction='row'>
          <Button sx={{ fontSize:'17px',lineHeight:'28px',fontWeight: 'bold',fontFamily:'Muli, sans-serif',
        textTransform:'none',marginBottom:5 ,marginLeft:2}}>Read more</Button>
          <KeyboardBackspaceIcon sx={{
            color: '#458FF6',
            transform: 'rotate(-180deg)', marginLeft: 1, marginTop: 1
          }} />
        </Stack>

      </CardActions>

    </Card>
  )
}
