import { ListStyled, LoaderStyled } from "../../styled/ImageStyled";
import ImageList from "./ImageList";
import InfiniteScroll from 'react-infinite-scroll-component'

const ImageListScroll = ({ images, hasMore, scrollExecute }) => {

    return (
        <ListStyled id="scrollableDiv">
            <InfiniteScroll
                dataLength={images.length}
                next={scrollExecute} 
                hasMore={hasMore}
                loader={<LoaderStyled>Ładowanie...</LoaderStyled>}
                scrollableTarget="scrollableDiv" 
            >
                {images?.map((image, index) => (
                    <ImageList key={index} image={image} />
                ))}
            </InfiniteScroll>
        </ListStyled>
    )
}

export default ImageListScroll