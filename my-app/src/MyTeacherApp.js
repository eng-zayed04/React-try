import React, { Component } from 'react';
class MyTeacherApp extends Component {
    render() {
      let teachers = [
        {name: "Faisal",Phone:"017"},
        {name: "Sadek",Phone:"018"},
        {name: "Jubayer",Phone:"019"},
      ];
      return (
      <div>
        <h2>Teachers</h2>
        {teachers.map((x)=> <p style={{background:'green'}}>{x.name}</p>)}
      </div>);
    }
  }
  
  export default MyTeacherApp;