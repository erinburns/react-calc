import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import './styles/reset.css'; // import css reset file
import './styles/main.css'; // import external css file



// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'
ReactDOM.render(
  <div> Hello World</div>, 
  document.getElementById('app')
);