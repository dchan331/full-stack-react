// alert('app.js ran!');
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList.js'
import uuid from 'uuid';
import ToDoApp from './ToDoApp.js'




ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
