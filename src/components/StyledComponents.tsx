import { styled } from '@mui/material/styles';
import {
    Stack, Card, Button, Typography, Avatar
} from '@mui/material'

//Navbar
export const AvatarItem = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.h5,
    color: '#fff',
}));

export const NavbarItem = styled(Typography)<{ isHome?: boolean }>(({ theme, isHome }) => ({
    fontSize: '18px',
    color: isHome ? theme.palette.success.main : theme.palette.success.light,
    textTransform: 'none',
    fontWeight: isHome ? 'bold' : 'normal'
}));

export const NavbarHeader = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    color: theme.palette.success.main,
    textTransform: 'none',
    marginLeft: 10,
    marginTop: 3,
    fontWeight:'bold'
}));

//Introduction
export const Header = styled(Typography)<{ isHeader?: boolean, isSub?: boolean }>(({ theme, isHeader, isSub }) => ({
    fontWeight: (isSub || isHeader) ? 'bold' : 'normal',
    textAlign: isSub ? 'center' : 'start',
    fontSize: isHeader ? '48px' : (isSub ? '36px' : '21px'),
    lineHeight: isHeader ? '56px' : '32px',
    paddingRight: isHeader ? 0 : 7,
    color: (isHeader || isSub) ? '#000' : '#7D7987',
    marginTop: isHeader ? 0 : 30,
    marginRight: isHeader ? 100 : (isSub ? 0 : 60),


}));

export const ConsultButton = styled(Button)<{ isOur?: boolean, index?: boolean }>(({ theme, isOur, index }) => ({
    borderRadius: 50,
    backgroundColor: !isOur ? theme.palette.primary.main : '#fff',
    width: '250px',
    height: '64px',
    marginTop: 60,
    marginLeft: index ? 200 : 0
}));
export const ConsultButtonText = styled(Typography)<{ isOur?: boolean }>(({ theme, isOur }) => ({
    color: isOur ? theme.palette.primary.main : '#fff',
    fontWeight: !isOur ? 'bold' : 'normal',
    textTransform: 'none',
    fontSize: '20px',
    fontFamily: 'Muli, sans-serif',
   
}));

//Our Services
export const ServicesText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: '32px',
    paddingRight: 7,
    color: '#7D7987',
    marginTop: 20,
    marginInline:440
}));
export const CustomCard = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: theme.shadows[4],
}));


export const CardText = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    fontSize: isHeader ? '24px' : '16px',
    lineHeight: isHeader ? '56px' : '28px',
    textAlign: 'start',
    color: isHeader ? '#000' : '#7D7987',
    fontWeight: isHeader ? 'bold' : 'normal',
    marginTop: isHeader ? 20 : 0,
 
}));


//Subtitles
export const SubHeader = styled(Typography)<{ index?: boolean }>(({ theme, index }) => ({
    textAlign: 'start',
    fontSize: '36px',
    lineHeight: '56px',
    fontWeight: 'bold',
    paddingRight: 7,
    color: '#000',
    marginTop: 20,
    marginRight: index ? 150 : 130,
    marginLeft: index ? 200 : 0
}));

export const SubText = styled(Typography)<{ index?: boolean }>(({ theme, index }) => ({
    textAlign: 'start',
    fontSize: '18px',
    lineHeight: '32px',
    paddingRight: 7,
    color: '#7D7987',
    marginTop: 20,
    marginRight: index ? 100 : 130,
    marginLeft: index ? 200 : 0
}));

// Bottom

export const BottomSubTitle = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    color: '#fff',
    fontSize: isHeader ? '20px' : '18px',
    lineHeight: isHeader ? '60px' : '38px',
    fontWeight: isHeader ? 'bold' : 'normal',
    textTransform: 'none',
    fontFamily: 'Muli, sans-serif',

}));
export const BottomTrafText = styled(Typography)<{ islower?: boolean, isTrafalgar?: boolean }>(({ theme, islower, isTrafalgar }) => ({
    textAlign: 'start',
    maxWidth: '391px',
    fontSize: islower ? '16px' : isTrafalgar ? '24px' : '18px',
    color: '#fff',
    lineHeight: isTrafalgar ? '100%' : '28px',
    paddingTop: islower ? 2.5 : (isTrafalgar ? 10 : 0),
    fontWeight: isTrafalgar ? 'bold' : 'normal',
    fontFamily: 'Muli, sans-serif',
}));
