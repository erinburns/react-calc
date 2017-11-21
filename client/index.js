import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import Frame from './components/frame'; // import frame component
import './styles/reset.css'; // import css reset file
import './styles/main.css'; // import external css file

// mounts the below to DOM (index.html file) on the element with id of 'app'
ReactDOM.render(
  <Frame />, // mount frame component to DOM
  document.getElementById('app')
);