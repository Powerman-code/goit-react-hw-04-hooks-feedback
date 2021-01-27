// import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ leaveFeedback, options }) => {
  console.log(options);
  return options.map((el) => (
    <button
      key={el}
      id="1"
      name={el}
      type="button"
      className={s.button}
      onClick={leaveFeedback}
    >
      {el.charAt(0).toUpperCase() + el.substr(1).toLowerCase()}
    </button>
  ));
};

// FeedbackOptions.propTypes = {
//   leaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default FeedbackOptions;
