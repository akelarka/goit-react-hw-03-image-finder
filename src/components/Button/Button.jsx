import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({ text, loadMore }) => {
    return (
        <ButtonLoad onClick={loadMore} type="button">
        {text}
        </ButtonLoad>
    )
};

export default Button;

Button.propType = {
    text: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired,
};