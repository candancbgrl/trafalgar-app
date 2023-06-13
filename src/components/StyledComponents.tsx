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
    textTransform: 'capitalize',
    marginLeft: 10,
    marginTop: 3
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

export const ConsultButton = styled(Button)(({ theme }) => ({
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    width: '200px',
    height: '64px',
    marginTop: 60
}));
export const ConsultButtonText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '20px'
}));

//Our Services
export const ServicesText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: '32px',
    paddingRight: 7,
    color: '#7D7987',
    marginTop: 20,
    marginLeft: 330, marginRight: 330
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
}));