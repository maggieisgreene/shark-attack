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
    studentData.followTheLight();
    const students = studentData.aliveStudents();
    const passedStudents = studentData.passedStudents();
    this.setState({ students, passedStudents });
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">Shark Tank</h1>
        <div className="container d-flex flex-wrap">
          <SharkTank students={this.state.students} killStudent={this.killStudent} />
          <Graveyard />
        </div>
      </div>
    );
  }
}

export default App;
