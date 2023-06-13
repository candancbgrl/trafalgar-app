import {
    Stack, Toolbar, Button
} from '@mui/material'

import { ThemeProvider,Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {AvatarItem, NavbarItem,NavbarHeader} from './StyledComponents'


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
    navbarToStart: {
        justifyContent: 'flex-start',
         flexGrow: 1
    },
});




export const Navbar = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ marginLeft: 20, marginRight: 20 }}>
                <Toolbar>
                    <Stack direction="row" spacing={2} className={classes.navbarToLeft}>
                        <Stack direction="row" className={classes.navbarToStart} >
                            <AvatarItem >T</AvatarItem>
                            <NavbarHeader>
                                Trafalgar
                            </NavbarHeader>
                        </Stack>
                        <Button color="inherit" >
                            <NavbarItem isHome>Home</NavbarItem>
                        </Button>
                        <Button color="inherit">
                            <NavbarItem>
                                Find a Doctor
                            </NavbarItem>
                        </Button>
                        <Button color="inherit">
                            <NavbarItem>
                                Apps
                            </NavbarItem>
                        </Button>
                        <Button color="inherit">
                            <NavbarItem>
                                Testimonials
                            </NavbarItem>
                        </Button>
                        <Button color="inherit">
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
