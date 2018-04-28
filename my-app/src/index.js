import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyStudentApp from './MyStudentApp'
import MyTeacherApp from './MyTeacherApp'
import MyCourseApp from './MyCourseApp'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyStudentApp />,document.getElementById('MyStudentApp'));
ReactDOM.render(<MyTeacherApp />,document.getElementById('MyTeacherApp'));
ReactDOM.render(<MyCourseApp />,document.getElementById('MyCourseApp'));
registerServiceWorker();MyCourseApp