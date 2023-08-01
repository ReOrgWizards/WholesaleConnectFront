import React from 'react'
import { Box, Card, CardContent } from '@mui/material'
import TypographyComponent from '../WC_Muielements/Typography'
import CardmediaComponent from '../WC_Muielements/Cardmedia'

const Categorycard = ({ image, title ,img_des }) => {
    return (
        <Box width='170px'>
            <Card className='category_card'>
                <CardmediaComponent className='category_img' component='img'
                    image={image}
                    alt={img_des} />
                <CardContent className='category_content'>
                    <TypographyComponent className='category_title' component='h5' text={title} />
                </CardContent>
            </Card>
        </Box>
    )
}

export default Categorycard