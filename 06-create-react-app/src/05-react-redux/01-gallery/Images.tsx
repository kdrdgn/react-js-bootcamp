import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../../02-custom-hooks/useFetch";

interface IImagesProps {
    page: number
}

export const Images: React.FC<IImagesProps> = ({page}: IImagesProps) => {
    
    const [images, isLoading, hasError] = useFetch(`https://api.thecatapi.com/v1/images/search?limit=6&page=${page}`);

    return (
        <ImageGrid>
            {
                hasError ? (<span>Something is wrong</span>) : 
                isLoading ? (<span>Loading...</span>) :
                images ? images.map((image:any, index: number)=> (<ImageItem key={index}><Image src={image.url}></Image></ImageItem>)) : ''
            }
        </ImageGrid>
    )
}

const ImageGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const ImageItem = styled.li`
    height: 64px;
    flex-grow: 1;
    margin: 4px;
`

const Image = styled.img`
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    border: 1px solid #333;
`