import PropTypes from 'prop-types';
import { ButtonLoad, ButtonWrapper } from './Button.styled';

const Button = ({ text, loadMore }) => {
  return (
    <ButtonWrapper>
      <ButtonLoad onClick={loadMore} type="button">
        {text}
      </ButtonLoad>
    </ButtonWrapper>
  );
};

export default Button;

Button.propType = {
  text: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
