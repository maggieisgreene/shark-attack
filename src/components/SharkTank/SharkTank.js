import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCard = students.map((student) => <LiveStudent key={student.id} student={student} />);

    return (
      <div className="sharkTank d-flex flex-wrap col-6">
        {studentCard}
      </div>
    );
  }
}

export default SharkTank;
