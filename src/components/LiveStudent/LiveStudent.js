import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    return (
      <div className="card">
        <p>Cards will go hereeee!!!!</p>
      </div>
    );
  }
}

export default LiveStudent;
