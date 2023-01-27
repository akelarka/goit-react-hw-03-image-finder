import PropTypes from 'prop-types';
import { MessageNotLoaded } from './Message.styled';

export const Message = ({ message }) => {
    return <MessageNotLoaded>{message}</MessageNotLoaded>;
};

export default Message;

Message.propType = {
    message: PropTypes.string.isRequired,
};
