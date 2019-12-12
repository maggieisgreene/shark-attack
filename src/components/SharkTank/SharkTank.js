import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    killStudent: PropTypes.func,
  }

  killStudentEvent = (event) => {
    const { killStudent } = this.props;
    event.preventDefault();
    killStudent();
  }

  render() {
    const { students, killStudent } = this.props;

    const studentCard = students.map((student) => <LiveStudent key={student.id} student={student} killStudent={killStudent} />);

    return (
      <div className="shark-zone">
        <div className="shark-zone-header">
          <h3>Shark Tank</h3>
          <button className="btn btn-danger" onClick={this.killStudentEvent}>Shark Attack</button>
        </div>
        <div className="shark-tank">
          {studentCard}
        </div>
      </div>
    );
  }
}

export default SharkTank;
