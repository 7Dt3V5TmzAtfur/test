import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>React 零基础入门教程</h1>
      <p>欢迎！这是你的第一个 React 页面。</p>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          点击次数：{count}
        </button>
        <p>在后面的教程中，你会学会这个页面是怎么工作的。</p>
      </div>
    </div>
  )
}

export default App