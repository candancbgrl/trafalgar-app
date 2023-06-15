
import { Header, } from './StyledComponents';
import { Divider, Avatar, Stack } from '@mui/material';
import { ArticleCard } from './ArticleCard'
import { ConsultButton, ConsultButtonText, SvgBoxCircle, ArticleBoxItem } from './StyledComponents';

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

            <SvgBoxCircle isArticle>
                <ArticleBoxItem>
                    <Stack direction='column' spacing={5}
                        sx={{ alignItems: 'center' }}>

                        <Stack direction='row' spacing={5} mt={10} mb={5} sx={{ textAlign: 'start', }} >
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
                </ArticleBoxItem>
            </SvgBoxCircle>
            <Stack direction='column' spacing={2} sx={{
                alignItems: 'flex-end',
                paddingRight: 20,
                marginTop: 25,
                marginBottom: 1
            }}  >
                <Circles />
                <Circles />
                <Circles />
            </Stack>

        </div>
    )
}
