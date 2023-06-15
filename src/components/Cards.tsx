import React from 'react';
import { Header, ServicesText, ConsultButton,ConsultButtonText } from './StyledComponents';
import { Divider} from '@mui/material';
import { Vector } from './Vector'

export const Cards = () => {
    return (
        <div style={{ marginTop: 160, marginBottom: 160 }}>
            <Header isSub>Our services</Header>
            <Divider sx={{ width: 56, margin: '0 auto', height: 1.5, marginTop: 4, backgroundColor: '#000' }} />
            <ServicesText>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</ServicesText>
            <Vector />
            <ConsultButton isOur variant='outlined' >
                <ConsultButtonText isOur>Learn more</ConsultButtonText>
            </ConsultButton>
        </div>
    );
};
