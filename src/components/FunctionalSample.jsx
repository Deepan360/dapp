import PropTypes from "prop-types";

export const FunctionalSample = (props) => {
    const {handleClick}= props;
  return (
    <div>
        <p>FunctionalSample
            </p>
        <button type="button" onClick={handleClick}>Click me</button>
        </div>
  );
}


FunctionalSample.propTypes = {
    handleClick: PropTypes.func.isRequired,
};