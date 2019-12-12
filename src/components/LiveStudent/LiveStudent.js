import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    students: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card live-student-card">
        <div className="card-body">
          <h5 className="card-title">{student.firstName}</h5>
          <h5 className="card-title">{student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
