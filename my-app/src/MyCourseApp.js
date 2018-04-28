import React, { Component } from 'react';
class MyCourseApp extends Component {
    render() {
      let courses = [
        {name: "C#"},
        {name: "F#"},
        {name: "TS"},
      ];
      return (
      <div>
        <h2>Courses</h2>
        {courses.map((x)=> <p style={{background:'green'}}>{x.name}</p>)}
      </div>);
    }
  }
  
  export default MyCourseApp;