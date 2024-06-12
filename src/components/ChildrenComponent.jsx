import PropTypes from 'prop-types';

export const ChildrenComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildrenComponent.propTypes = {
  children: PropTypes.array,
};