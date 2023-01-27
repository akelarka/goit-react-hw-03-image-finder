import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
    webformatURL,
    getLargeImg,
    largeImageURL,
}) => {
    return (
        <GalleryItem>
            <GalleryItemImage onClick={() => getLargeImg(largeImageURL)} 
                src={webformatURL}
                alt=""
            />
        </GalleryItem>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propType = {
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    getLargeImg: PropTypes.func.isRequired,
};