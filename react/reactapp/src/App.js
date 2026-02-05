
//  this is the main application component for a React app


// ======================================================= intro to JSX

// import React from 'react';

// function App(){
//   return <h1> old hellow world </h1>
// }


// const App = () => {
//   return React.createElement("h1", {}, "hello world from React App");
// }
// --------------------------------------
// const App = () =>  {
//   return (
//     <>
//       <MyName />
//       <h1 className="app-title">Hello World from React-f- App</h1>
      
//     </>
//   )
// }



// const MyName = () => {
//   return <h1>My Name is John</h1>
// };

// export default App;
// ======================================================== end intro to JSX



// ======================================================== Components and Props


// Part 1 - Source Code Link: https://github.com/thapatechnical/reactjsByThapaTechnical

// part 2 - Source Code Link: https://github.com/thapatechnical/complete_react2021


import React from 'react';
import Resturant from './component/Basics/Resturant';
import UseState from './component/Hooks/useState';
import UseEffect from './component/Hooks/useEffect';
import UseReducer from './component/Hooks/useReducer';
import Todo from './component/todoreact/todo';

const App = () => {
  return (
    <>
      {/* <Resturant /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      <Todo />

    </>
  )
}

export default App;