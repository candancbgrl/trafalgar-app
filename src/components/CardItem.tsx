import React from 'react'
import { Divider, Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { Search } from './Icons/Search'
import { Pharmacy } from './Icons/Pharmacy'
import { Consultation } from './Icons/Consultation'
import { Emergency } from './Icons/Emergency'
import { Info } from './Icons/Info'

import { CardText } from './StyledComponents'


import { Tracking } from './Icons/Tracking'

type CardItemProps = {
    iconName: any;
    header: any;
    text: any;
}

export const CardItem: React.FC<CardItemProps> = ({ iconName, header, text }) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 300 , borderRadius: 10,boxShadow: '1px 1px 30px 1px rgba(0, 0, 0, 0.1)',}}>
            <CardContent sx={{ marginLeft: 2 }} >
            
                {iconName === 'search' ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Search />
                    </div>
                    : null}
                {iconName === 'pharmacy' ?
                    <div style={{ display: 'flex', alignItems: 'center',marginBottom:7 }}>
                        <Pharmacy />
                    </div> : null}
                {iconName === 'consultation' ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Consultation />
                    </div> : null}
                {iconName === 'info' ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Info />
                    </div> : null}
                {iconName === 'emergency' ?
                    <div style={{ display: 'flex', alignItems: 'center',marginBottom:25 }}>
                        <Emergency />
                    </div> : null}
                {iconName === 'tracking' ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Tracking />
                    </div> : null}

                <CardText isHeader>{header}</CardText>

                <CardText>{text}</CardText>
            </CardContent>
        </Card>
    )
}
