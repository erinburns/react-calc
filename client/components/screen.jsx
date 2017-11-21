// screen component that will contain 2 screen row components
import React from 'react'; // Import react module
import ScreenRow from './screenRow'; // import screenrow component

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}/>
      <ScreenRow value={props.answer}/>
    </div>
  );
}

// Define our props expected from the parent component
Screen.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired
}

// export our component
export default Screen;