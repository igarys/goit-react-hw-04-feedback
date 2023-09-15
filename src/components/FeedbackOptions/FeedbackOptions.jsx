import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedbackBtnBox}>
    {options.map(option => (
      <button
        className={`${css.btn} ${css[`${ option }`]}`}
        key={option}
        type="button"
        onClick={(() => onLeaveFeedback(option))}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}