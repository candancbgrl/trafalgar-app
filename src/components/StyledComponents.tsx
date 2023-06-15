import { styled } from '@mui/material/styles';
import {
    Box, Card, Button, Typography, Avatar
} from '@mui/material'
import { svgCode } from './SvgCodes/CircleArticle'


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
    fontWeight: 'bold'
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
    marginInline: 440
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
    paddingTop: islower ? 20 : (isTrafalgar ? 10 : 0),
    fontWeight: isTrafalgar ? 'bold' : 'normal',
    fontFamily: 'Muli, sans-serif',
}));

//Cards

export const SvgBoxCircle = styled(Box)<{ isArticle?: boolean }>(({ theme, isArticle }) => ({
    alignItems: isArticle ? 'flex-start' : 'flex-end',
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: isArticle ? '250px 38px' : '1321px 302px '
}));

export const SvgBoxItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    marginTop: 5,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'765\' height=\'619\' viewBox=\'0 0 765 619\' fill=\'none\'%3E%3Cpath d=\'M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176965C574.431 3.48722 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z\' fill=\'url(%23paint0_linear_23_3)\' /%3E%3Cdefs%3E%3ClinearGradient id=\'paint0_linear_23_3\' x1=\'429.823\' y1=\'-145.173\' x2=\'195.583\' y2=\'560.635\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23F3F7FF\' /%3E%3Cstop offset=\'1\' stop-color=\'%23DEEEFE\' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
}));

export const ArticleBoxItem = styled(Box)(({ theme }) => ({
    alignItems: 'flex-end',
    marginTop: 5,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%22478%22 height=%22516%22 viewBox=%220 0 478 516%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M766.998 386.364C717.381 446.026 615.061 372.618 470.041 409.048C344.438 440.615 338.903 517.023 237.942 515.53C164.183 514.453 82.9111 473.72 37.095 400.585C-13.4312 319.949 2.37557 236.33 6.88435 216.024C27.003 124.945 91.7284 75.6738 114.575 58.8284C208.703 -10.5331 316.305 -1.19213 367.925 3.26331C561.831 20.0621 772.042 153.461 784.667 303.389C786.338 323.017 789.395 359.423 766.998 386.364Z%22 fill=%22url(%23paint0_linear_58_282)%22/%3E%3Cdefs%3E%3ClinearGradient id=%22paint0_linear_58_282%22 x1=%22287.009%22 y1=%22635.124%22 x2=%22468.152%22 y2=%2244.8754%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%23F3F7FF%22/%3E%3Cstop offset=%221%22 stop-color=%22%23DEEEFE%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
}));

//GradyanCards
export const GradyanCardCircle = styled(Avatar)<{ isArrow?: boolean, isArrowFirst?: boolean }>(({ theme, isArrow, isArrowFirst }) => ({
    backgroundColor: isArrow ? '#5B9BF3' : '#97C3F9',
    width: 10,
    height: 10,
    opacity: isArrowFirst ? 1 : 0.5
}));


export const ReadMore = styled(Button)(({ theme }) => ({
    fontSize: '17px', lineHeight: '28px', fontWeight: 'bold', fontFamily: 'Muli, sans-serif',
    textTransform: 'none', marginBottom: 5, marginLeft: 2
}));
