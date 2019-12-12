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
      <div className="shark-zone col-6">
        <button className="btn btn-light">Here's Brucey</button>
        <div className="shark-tank d-flex flex-wrap">
          {studentCard}
        </div>
      </div>
    );
  }
}

export default SharkTank;
