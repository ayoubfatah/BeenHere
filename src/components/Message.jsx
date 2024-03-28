import styles from "./Message.module.css";
import PropTypes from "prop-types";
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
