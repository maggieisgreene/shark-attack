import React from 'react';
import './App.scss';

import studentData from '../helpers/data/studentData';

import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getLivingStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">Shark Tank</h1>
        <SharkTank students={this.state.students}/>
      </div>
    );
  }
}

export default App;
