import React from 'react'
import { Box, Card, CardMedia, Typography, CardContent} from '@mui/material'

const Categorycard = ({image,title}) => {
    return (
        <>
            <Box width='170px'>
                <Card className='category-card'>
                    <CardMedia className='category-img' component='img'
                        image={image}
                        alt="watch" />
                    <CardContent>
                        <Typography gutterBottom className="category-title" component='h5'>
                            {title}
                        </Typography>
                    </CardContent>
                </Card>

            </Box>
        </>
    )
}

export default Categorycard