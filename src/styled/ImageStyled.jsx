import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw;
  filter: drop-shadow(16px 16px 20px #40E0D0);
`;

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0.5em;
  margin: 0.5em;
  width: 50%; 
  height: 50%;
  overflow-y: auto; 
  &::-webkit-scrollbar {
    width: 10px; 
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #f1f1f1; 
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  scrollbar-width: thin; 
  scrollbar-color: #888 #f1f1f1;
`;

export const ListItemStyled = styled.li`
  display: flex;
  border: 1px solid #40E0D0;
  border-radius: 5px;
  padding: 0.25em;
  background: white;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ImageDetailsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
`;

export const ImageExtensionStyled = styled.div`
  font-weight: bold;
`;

export const ImageSizeStyled = styled.div`
  color: gray;
`;

export const ImageResolutionStyled = styled.div`
  color: gray;
`;

export const OwnerNameStyled = styled.div`
  flex: 1;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center; 
`;

export const IconContainerStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 10px; 
`;

export const IconStyled = styled.span`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const LoaderStyled = styled.h4`
    color: #888;
    text-align: center;
    padding: 10px;
    font-weight: bold;
`;

export const ButtonOpenStyled = styled.button`
  margin-top: 1rem; 
`
export const ModalBackgroundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContentStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

export const DropzoneAreaStyled = styled.div`
  border: 2px dashed gray;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const InputStyled = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: calc(100% - 20px);
`;


export const SelectedPhotoImageStyled = styled.div`
  display: flex;
  flex-direction: column;
`