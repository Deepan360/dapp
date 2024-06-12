import PropTypes from 'prop-types';

export const Student = (props) => {
    return (
      <div className="student">
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.gender ? "male" : "female"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.bool,
  };

  Student.defaultProps={
    name: "unknown",
    age: 0,
    gender: false,
  }