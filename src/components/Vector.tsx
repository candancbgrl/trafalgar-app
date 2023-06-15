
import {  Box, Stack } from '@mui/material';
import { CardItem } from './CardItem'
import { svgCode} from './SvgCodes/CircleArticle'


export const Vector = () => {
    return (
        <Box
                sx={{
                    alignItems: 'flex-end',
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'1321px 302px '
                }}>
        <Box
            sx={{
                position: 'relative',
                marginTop: 5,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'765\' height=\'619\' viewBox=\'0 0 765 619\' fill=\'none\'%3E%3Cpath d=\'M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176965C574.431 3.48722 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z\' fill=\'url(%23paint0_linear_23_3)\' /%3E%3Cdefs%3E%3ClinearGradient id=\'paint0_linear_23_3\' x1=\'429.823\' y1=\'-145.173\' x2=\'195.583\' y2=\'560.635\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%23F3F7FF\' /%3E%3Cstop offset=\'1\' stop-color=\'%23DEEEFE\' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
            }}>
            <Stack direction='column' spacing={3}
                sx={{ alignItems: 'center' }}
            >
                <Stack direction='row' spacing={5} mt={5} >
                    <CardItem iconName='search'
                        header='Search doctor'
                        text='Choose your doctor from thousands of specialist, general, and trusted hospitals'
                    />
                    <CardItem iconName='pharmacy'
                        header='Online pharmacy'
                        text='Buy  your medicines with our mobile application with a simple delivery system'
                    />
                    <CardItem iconName='consultation'
                        header='Consultation'
                        text='Free consultation with our trusted doctors and get the best recomendations'
                    />
                </Stack>
                <Stack direction='row' spacing={5}>
                    <CardItem iconName='info'
                        header='Details info'
                        text='Free consultation with our trusted doctors and get the best recomendations'
                    />
                    <CardItem iconName='emergency'
                        header='Emergency care'
                        text='You can get 24/7 urgent care for yourself or your children and your
                        lovely family'
                    />
                    <CardItem iconName='tracking'
                        header='Tracking'
                        text='Track and save your medical history and health data '
                    />
                </Stack>

            </Stack>
        </Box>
        </Box>
    );
};