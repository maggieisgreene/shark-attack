import React from 'react';
import './App.scss';

import SharkTank from '../components/SharkTank/SharkTank';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const livingStudents = studentData.getLivingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">Shark Tank</h1>
        <SharkTank />
      </div>
    );
  }
}

export default App;
