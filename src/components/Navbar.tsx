import {
    Stack, Toolbar, Button, Typography, Avatar
} from '@mui/material'

import IconButton from '@mui/material/IconButton';
import { ThemeProvider, } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#458FF6',
        },
        secondary: {
            main: '#fff', 
        },
        success: {
            main: 'rgba(31, 21, 52)', 
            light: 'rgba(31, 21, 52,0.5)',
        },
    },
    typography: {
        fontFamily: 'Muli, sans-serif',
    },
});

const useStyles = makeStyles({
    capitalizedText: {
        textTransform: 'capitalize',
    },
    navbarToLeft: {
        justifyContent: 'flex-end',
        flexGrow: 1,
    },

});

const AvatarItem = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.h5,
    color: '#fff',
}));

const NavbarItem = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: theme.palette.success.light,
    textTransform: 'capitalize'
}));

const NavbarHeader = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    color: theme.palette.success.main,
    textTransform: 'capitalize',
    marginLeft: 10
}));

const NavbarHome = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: theme.palette.success.main,
    textTransform: 'capitalize',
}));



export const Navbar = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ marginLeft: 20, marginRight: 20 }}>
                <Toolbar>
                    <Stack direction="row" spacing={2} className={classes.navbarToLeft}>
                        <IconButton sx={{ display: { justifyContent: 'flex-start', flexGrow: 1, } }}>
                            <AvatarItem >T</AvatarItem>
                            <NavbarHeader>
                                Trafalgar
                            </NavbarHeader>
                        </IconButton>
                        <Button color="inherit"  >
                            <NavbarHome>Home</NavbarHome>
                        </Button>
                        <Button color="inherit"  >
                            <NavbarItem>
                                Find a Doctor
                            </NavbarItem>
                        </Button>
                        <Button color="inherit"  >
                            <NavbarItem>
                                Apps
                            </NavbarItem>
                        </Button>
                        <Button color="inherit"  >
                            <NavbarItem>
                                Testimonials
                            </NavbarItem>
                        </Button>
                        <Button color="inherit"  >
                            <NavbarItem>
                                About us
                            </NavbarItem>
                        </Button>
                    </Stack>
                </Toolbar>
            </Stack>
        </ThemeProvider>
    )
}
