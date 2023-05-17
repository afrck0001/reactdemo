import React, { useState, memo } from 'react'
const Child = memo(
  ({ count }) => {
    console.log('child组件')
    return (
      <div>
        <h3>child组件 -- {count.n}</h3>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.count === nextProps.count
  }
)

const App = () => {
  let [count, setCount] = useState({ n: 100 })
  let [name, setName] = useState('张三')
  return (
    <div>
      <h3>App -- {count.n}</h3>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          setCount({ n: Date.now() })
        }}
      >
        ++++
      </button>
      <Child count={count} />
    </div>
  )
}
export default App
