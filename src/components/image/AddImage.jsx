import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import {SelectedPhotoImageStyled, InputStyled, DropzoneAreaStyled, ModalContentStyled, ModalBackgroundStyled } from '../../styled/ImageStyled';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { addImage } from '../../state';

const AddImage = ({ open, onClose }) => {

    const [image, setImage] = useState(null) 
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 

    const dispatch = useDispatch()

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('image', image);
        formData.append('user_name', name);
        formData.append('email', email);
    
        try {
            const response = await axios.post('/api/images', formData);
            dispatch(addImage(response.data.data))
            handleClose()
        } 
        catch (error) {
        }
    }
    
    const handleClose = () => {
        onClose()
        setImage(null)
    }

    return (
        open &&
            <ModalBackgroundStyled onClick={onClose}>
                <ModalContentStyled onClick={(e) => e.stopPropagation()}>
                    <Dropzone
                        accept={{
                            'image/jpeg': ['.jpeg','.jpg', '.png']
                        }}
                        multiple={true}
                        width="100%"
                        onDrop={(acceptedFiles) => {
                            if (image) {
                                URL.revokeObjectURL(image.preview);
                            }
                            const selectedImage = acceptedFiles[0];
                            selectedImage.preview = URL.createObjectURL(selectedImage);

                            setImage(selectedImage);
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                                <div display="flex"
                                    {...getRootProps()}
                                    width="100%"
                                    sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <DropzoneAreaStyled>
                                            <p>Przeciągnij i upuść zdjęcie tutaj, lub kliknij aby wybrać zdjęcie.</p>
                                        </DropzoneAreaStyled>
                                    ) : (
                                        <SelectedPhotoImageStyled>
                                            <img src={image.preview} alt="Wybrany obraz" width="100%" />
                                            <button 
                                                style={{ marginTop: '5px', marginBottom: '5px' }} 
                                                onClick={() => setImage(null)}>
                                                    Zmień zdjęcie
                                            </button>
                                        </SelectedPhotoImageStyled>
                                    )}
                                </div>
                        )}
                    </Dropzone>

                    <InputStyled 
                        id="name"
                        type="text"
                        placeholder="Imię"
                        value={name}
                        onChange={(e) => setName(e.target.value)}    
                    />
                    <InputStyled
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={onClose}>
                        Anuluj
                    </button>
                    <button
                        disabled={!image || !name || !email}
                        onClick={handleSubmit}
                    >
                    Zapisz
                    </button>
                </ModalContentStyled>
            </ModalBackgroundStyled>
    );
};

export default AddImage;
