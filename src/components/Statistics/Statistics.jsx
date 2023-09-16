import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const colorChange = ( positivePercentage ) =>
  positivePercentage <= 45
    ? 'red'
    : positivePercentage <= 65
    ? 'orange'
      : 'green';
    
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,

}) => (
  //  colorChange =  positivePercentage <= 45 ? 'red' : (positivePercentage <= 65 ? 'orange' : 'green') 

 (
    <div>
      <span className={css.stats}>Good: {good}</span>
      <span className={css.stats}>Neutral: {neutral}</span>
      <span className={css.stats}>Bad: {bad}</span>
      <span className={css.total}>Total:{total}</span>
      <p className={css.overall}>
        Positive feedback:
        <span style={{color: colorChange(positivePercentage), marginLeft: '3px' }}>{positivePercentage}%</span>
      </p>
    </div>
  ));
   
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}