import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  // const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && (
        <Notification message="No Feedback was given"></Notification>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
