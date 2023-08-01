import React from 'react'
import Categorycard from '../components/WC_Cards/WC_Categorycard'
import { Categorycont } from '../dummyData/Data'

const Category = () => {
    return (
        <>
            {Categorycont.map((content) => {
                return (
                    <Categorycard
                        key={content.id}
                        image={content.img}
                        title={content.title}
                    />
                )
            })}
        </>
    )
}

export default Category