import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

import { ContainerStyled, ButtonOpenStyled } from "../../styled/ImageStyled";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../state";

import ImageListScroll from "./ImageListScroll";
import AddImage from "./AddImage";

const Image = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch()
    const images = useSelector(state => state.images)
    const [open, setOpen] = useState(false)

    const getImages = async (page) => {
        try {
            const apiResponse = await axios.get('/api/images', {
                params: {
                    page: page
                }
            })

            const data = apiResponse.data;

            if (data.current_page >= data.last_page) {
                setHasMore(false);
            }
            const newImages = [...images, ...data.data];
            dispatch(setImages(newImages));

            setCurrentPage(prevPage => prevPage + 1);
        } 
        catch (err) {
            dispatch(setImages([]))
        }
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
        <ContainerStyled>
            <ImageListScroll images={images} hasMore={hasMore} scrollExecute={() => getImages(currentPage)} />
            <ButtonOpenStyled onClick={() => setOpen(true)}>Dodaj zdjęcie</ButtonOpenStyled>
        </ContainerStyled>
        <AddImage open={open} onClose={() => setOpen(false)} />
        </>
    )
}

export default Image