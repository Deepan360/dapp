import PropTypes from "prop-types";

export const MultiTypeComponent = (props) => {
    return (
        <div>
            <p>
                this is a multi-type component with value: {props.value}
            </p>
        </div>
    );
}

MultiTypeComponent.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
};
 