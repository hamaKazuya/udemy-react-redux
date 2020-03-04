import React from 'react';
import PropTypes from 'prop-types'

// 関数コンポーネント
function App() {
  const profiles = [
    {name: "taro", age: 10},
    {name: "hanako", age: 5},
    {name: "kazuya"},
    {name: 1234},
    {name: 'momo', age: '123'},
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log('true')}}></input>
    </React.Fragment>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
