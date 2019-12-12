import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

import './Gravestone.scss';

class Gravestone extends React.Component {
  static propTypes = {
    passedStudents: studentShape.studentShape,
  }

  render() {
    const { passedStudent } = this.props;

    return (
      <div className="card gravestone-card">
        <div className="card-body">
          <h5 className="card-title">{passedStudent.firstName}</h5>
          <h5 className="card-title">{passedStudent.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Gravestone;
