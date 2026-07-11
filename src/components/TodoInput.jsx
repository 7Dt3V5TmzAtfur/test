// TodoInput —— 子组件（Task 6 综合项目）
// 目标：输入框 + 添加按钮，把新待办的文字传给父组件
//
// 用到的知识：
//   • useState（Task 4）：管理输入框的文字
//   • onChange（Task 4）：受控 input
//   • onClick（Task 4）：点击按钮添加
//   • props 回调（Task 3）：通过 onAdd 把文字传给父组件

import { useState } from 'react'

function TodoInput({ onAdd }) {
  // 1) 输入框的文字 state
  const [text, setText] = useState('')

  // 2) 点击「添加」时执行
  function handleAdd() {
    // 空字符串或全是空格 → 不添加（trim() 去掉首尾空格）
    if (text.trim() === '') return
    // 把文字传给父组件
    onAdd(text.trim())
    // 清空输入框
    setText('')
  }

  return (
    <div className="todo-input-row">
      {/* 3) 受控 input：value 来自 state，onChange 写回 state */}
      <input
        className="todo-app-input"
        type="text"
        placeholder="添加一个待办..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-add" onClick={handleAdd}>
        添加
      </button>
    </div>
  )
}

export default TodoInput
