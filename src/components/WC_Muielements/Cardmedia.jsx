import React from 'react'
import { CardMedia } from '@mui/material';

const CardmediaComponent = ({ className,component,image,img_des}) => {
    return (
        <CardMedia className={className} component={component}
            image={image}
            alt={img_des} />
    )
}

export default CardmediaComponent