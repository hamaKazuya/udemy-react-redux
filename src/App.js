import React from 'react';



// 関数コンポーネント
function App() {
  // const greeting = 'hi!'
  // const dom = <h1 className="App">hello world!! {greeting}</h1>;
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log('true')}}></input>
      <Cat /><Cat /><Cat /><Cat />
    </React.Fragment>
  )
  // return dom;
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
