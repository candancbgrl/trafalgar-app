import { styled } from '@mui/material/styles';
import {
    Stack, Toolbar, Button, Typography, Avatar
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
    textTransform: 'capitalize',
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
export const Header = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    fontSize: isHeader ? '60px' : '24px',
    lineHeight: isHeader ? '76px' : '32px',
    paddingRight: isHeader ? 0 : 7,
    color: isHeader ? '#000' : '#7D7987',
    marginTop: isHeader ? 0 : 30,
}));

export const ConsultButton = styled(Button)(({ theme }) => ({
    borderRadius: 50,
    backgroundColor:theme.palette.primary.main,
    width: '200px',
    height: '64px',
    marginTop: 60
}));
export const ConsultButtonText = styled(Typography)(({ theme }) => ({
    color:'#fff',
    fontWeight:'bold',
    textTransform: 'capitalize',
    fontSize:'20px'
}));


