import PropTypes from 'prop-types';
//import s from './Notification.module.css';

const Notification = ({ message }) => <p className="notification">{message}</p>;

Notification.propTypes = {
  // bla: PropTypes.string,
};

Notification.defaultProps = {
  // bla: 'test',
};

export default Notification;
