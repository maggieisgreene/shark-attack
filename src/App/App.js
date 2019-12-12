import React from 'react';
import './App.scss';

import studentData from '../helpers/data/studentData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    passedStudents: [],
  }

  componentDidMount() {
    const students = studentData.aliveStudents();
    const passedStudents = studentData.passedStudents();
    this.setState({ students, passedStudents });
  }

  killStudent = () => {
    studentData.randomStudents();
    const students = studentData.aliveStudents();
    const passedStudents = studentData.passedStudents();
    this.setState({ students, passedStudents });
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">Beach Day</h1>
        <div className="main-body">
          <SharkTank students={this.state.students} killStudent={this.killStudent} />
          <Graveyard passedStudents={this.state.passedStudents} />
        </div>
      </div>
    );
  }
}

export default App;
