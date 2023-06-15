
import { Stack } from '@mui/material';
import { CardItem } from './CardItem'
import { SvgBoxCircle, SvgBoxItem } from './StyledComponents'

export const Vector = () => {
    return (
        <SvgBoxCircle>
            <SvgBoxItem>
                <Stack direction='column' spacing={3}
                    sx={{ alignItems: 'center' }}>
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
            </SvgBoxItem>
        </SvgBoxCircle>
    );
};