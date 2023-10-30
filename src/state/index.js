import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: []
}

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload
        },
        addImage: (state, action) => {
            const image = state.images.find((image) => image.id ===  action.payload.id);
            if(!image){
                state.images.push(action.payload);
            }
        },
        deleteImage: (state, action) => {
            const updateImages = state.images.filter(image => image.id !== action.payload);
            state.images = updateImages;
        },
    }
})

export const { setImages, addImage, deleteImage } = imageSlice.actions

export default imageSlice.reducer