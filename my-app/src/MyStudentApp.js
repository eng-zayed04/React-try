import React, { Component } from 'react';
class MyStudentApp extends Component {
    render() {
      let students = [
        {name: "Hasib",Phone:"017"},
        {name: "Raju",Phone:"018"},
        {name: "Sakib",Phone:"019"},
      ];
      return (
      <div>
        <h2>Students</h2>
        {students.map((x)=> <p style={{background:'green'}}>{x.name}</p>)}
      </div>);
    }
  }
  
  export default MyStudentApp;