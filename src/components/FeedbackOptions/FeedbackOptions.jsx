import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      <li className={s.btnItem}>
        <button
          onClick={() => onLeaveFeedback('good')}
          className={s.btn}
          type="button"
        >
          Good
        </button>
      </li>
      <li className={s.btnItem}>
        <button
          onClick={() => onLeaveFeedback('neutral')}
          className={s.btn}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li className={s.btnItem}>
        <button
          onClick={() => onLeaveFeedback('bad')}
          className={s.btn}
          type="button"
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
