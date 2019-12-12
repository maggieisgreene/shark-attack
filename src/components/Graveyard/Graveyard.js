import React from 'react';
import PropTypes from 'prop-types';

import Gravestone from '../Gravestone/Gravestone';
import studentShape from '../../helpers/propz/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    passedStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { passedStudents } = this.props;

    const gravestoneCards = passedStudents.map((passedStudent) => <Gravestone key={passedStudent.id} passedStudent={passedStudent}/>);

    return (
      <div className="graveyard col-6">
        <h3>Grave Yard</h3>
        <div className="gravestoneZone d-flex flex-wrap">
          {gravestoneCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
