// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // https://reactjs.org/docs/hooks-reference.html#useref
  const usernameInputRef = React.useRef()

  // https://reactjs.org/docs/hooks-intro.html
  const [username, setUsername] = React.useState('')
  // const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    // onSubmitUsername(usernameInputRef.current.value)
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
    // const isLowerCase = value === value.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {/* {error} */}
      </div>
      {/* <button type="submit" disabled={Boolean(error)}> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
