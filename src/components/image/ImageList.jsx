
import {
    ListItemStyled, ImageDetailsStyled, ImageExtensionStyled, ImageSizeStyled, ImageResolutionStyled,
    OwnerNameStyled, IconContainerStyled, IconStyled
} from "../../styled/ImageStyled";
import axios from "../../api/axios";
import { imageStorage } from "../../api/url";
import { FaDownload, FaTrash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { deleteImage } from "../../state";

const ImageList = ({ image }) => {

    const dispatch = useDispatch()

    const handleDownload = async (path) => {
        try {
            const apiResponse = await axios.get(`api/images/download/${path}`, {
                responseType: 'blob'
            })

            const url = window.URL.createObjectURL(new Blob([apiResponse.data]));

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', image.path); 
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }
        catch(err) {
            console.log(err)
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/images/${id}`)
            dispatch(deleteImage(id))
        } 
        catch(err) {
        }
    };

    return (
        <ListItemStyled>
            <img 
                style={{ width: '60px', height: '60px', borderRadius: "5px" }} 
                src={`${imageStorage}/${image.path}`}
                alt="image" 
                loading="lazy" 
            />
            <ImageDetailsStyled>
                <ImageExtensionStyled>{image.extension}</ImageExtensionStyled>
                <ImageSizeStyled>{image.size} kb</ImageSizeStyled>
                <ImageResolutionStyled>{image.width}x{image.height} </ImageResolutionStyled>
            </ImageDetailsStyled>
            <OwnerNameStyled>
                {image?.sender?.name}
            </OwnerNameStyled>
            <IconContainerStyled>
                <IconStyled onClick={() => handleDownload(image.path)}>
                    <FaDownload />
                </IconStyled>
                <IconStyled onClick={() => handleDelete(image.id)}>
                    <FaTrash />
                </IconStyled>
            </IconContainerStyled>
        </ListItemStyled>
    )
}

export default ImageList