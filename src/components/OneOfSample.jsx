import PropTypes from 'prop-types';

export const OneOfSample = (props) => {
    const {color}= props;
  return (
    <div style={{background: color,padding:"20px" , color: "white", textAlign: "center",fontStyle:'italic'}}>
        <p>this is testing {color}</p>
    </div>
  )
}

OneOfSample.propTypes = {
    color: PropTypes.oneOf(["red","green","blue"]).isRequired,
};