
import { Header, } from './StyledComponents';
import { Divider, Box, Avatar, CardContent, Stack, Typography } from '@mui/material';
import { ArticleCard } from './ArticleCard'
import { ConsultButton, ConsultButtonText } from './StyledComponents';
import { svgCode} from './SvgCodes/CircleArticle'

const Circles = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5 }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
            <Avatar sx={{ bgcolor: '#97C3F9', width: 10, height: 10, opacity: 0.5, }}> </Avatar>
        </Stack>
    )
}

export const Article = () => {
    return (
        <div style={{ marginTop: '200px' }}>
            <Header isSub>Check out our latest article</Header>
            <Divider sx={{ width: 56, margin: '0 auto', height: 1.5, marginTop: 4, backgroundColor: '#000' }} />

            <Box
                sx={{
                    alignItems: 'flex-start',
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'280px 20px'
                }}>
            <Box
                sx={{
                    
                    alignItems: 'flex-end',
                    marginTop: 5,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%22478%22 height=%22516%22 viewBox=%220 0 478 516%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M766.998 386.364C717.381 446.026 615.061 372.618 470.041 409.048C344.438 440.615 338.903 517.023 237.942 515.53C164.183 514.453 82.9111 473.72 37.095 400.585C-13.4312 319.949 2.37557 236.33 6.88435 216.024C27.003 124.945 91.7284 75.6738 114.575 58.8284C208.703 -10.5331 316.305 -1.19213 367.925 3.26331C561.831 20.0621 772.042 153.461 784.667 303.389C786.338 323.017 789.395 359.423 766.998 386.364Z%22 fill=%22url(%23paint0_linear_58_282)%22/%3E%3Cdefs%3E%3ClinearGradient id=%22paint0_linear_58_282%22 x1=%22287.009%22 y1=%22635.124%22 x2=%22468.152%22 y2=%2244.8754%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%23F3F7FF%22/%3E%3Cstop offset=%221%22 stop-color=%22%23DEEEFE%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'right center'
                }}>
                <Stack direction='column' spacing={5}
                    sx={{ alignItems: 'center' }}>
                    
                    <Stack direction='row' spacing={5} mt={5} mb={5} sx={{ textAlign: 'start', }} >
                        <ArticleCard image={process.env.PUBLIC_URL + '/img/a1.png'}
                            header='Disease detection, check up in the laboratory'
                            text='In this case, the role of the health laboratory is very important to do
                        a disease detection...'/>
                        <ArticleCard image={process.env.PUBLIC_URL + '/img/a2.png'}
                            header='Herbal medicines that are safe for consumption'
                            text='Herbal medicine is very widely used at this time because of its very good for your health...' />
                        <ArticleCard image={process.env.PUBLIC_URL + '/img/a3.png'}
                            header='Natural care for healthy facial skin'
                            text='A healthy lifestyle should start from now and also for your skin health.
                            There are some...'/>
                    </Stack>
                    <ConsultButton isOur variant='outlined' >
                        <ConsultButtonText isOur>View all</ConsultButtonText>
                    </ConsultButton>
                </Stack>
            </Box>
            </Box>
            <Stack direction='column' spacing={2} sx={{
                alignItems: 'flex-end',
                paddingRight: 20,
                marginTop:25,
                marginBottom:1
            }}  >
                <Circles />
                <Circles />
                <Circles />
            </Stack>

        </div>
    )
}
