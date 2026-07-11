// Counter —— 示例组件（Task 4：state 与事件处理）
// 目标：用 useState 管理计数，用 onClick 响应按钮点击
//
// state 是什么？
//   state 是组件「自己内部」的数据，组件可以改它。
//   state 一变，React 就会自动重新渲染，把新值显示到页面上。
//
// useState 返回两个东西：
//   const [count, setCount] = useState(0)
//         ┌─────┬───────┐
//         │     │       └── 0 是初始值
//         │     └── setCount 是修改它的函数（setter）
//         └── count 是当前值

import { useState } from 'react'

function Counter() {
  // 1) 声明 state：count 当前值，setCount 修改函数，初始值 0
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      {/* 2) 显示当前值：直接用 {count} */}
      <p className="counter-value">当前计数：{count}</p>

      <div className="counter-buttons">
        {/* 3) onClick 绑定点击事件
              注意：传的是一个函数 () => ...，不是函数调用结果
              用 setCount(prev => prev + 1) 而不是 setCount(count + 1)
              因为 prev 一定是最新值，连续点击不会出错 */}
        <button
          className="btn btn-plus"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>

        <button
          className="btn btn-minus"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -1
        </button>

        {/* 4) 重置：直接传新值 0，不需要函数形式 */}
        <button
          className="btn btn-reset"
          onClick={() => setCount(0)}
        >
          重置
        </button>
      </div>
    </div>
  )
}

export default Counter
