import React from 'react';
// import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    students: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{student.firstName}</h5>
          <h5 className="card-title">{student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
