import React from 'react';

function App() {
  // const greeting = 'hi!'
  // const dom = <h1 className="App">hello world!! {greeting}</h1>;
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log('true')}}></input>
    </React.Fragment>
  )
  // return dom;
}

export default App;
