import React, { useState } from 'react'

export function Hello() {
  const [text, setText] = useState('')
  const [name, setName] = useState('TWK')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit() {
    setName(text)
    setText('')
  }

  return (
    <div>
      <h1>Hello,{name}!</h1>
      <p>Update Name</p>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}
