// NameForm —— 示例组件（Task 4：受控组件）
// 目标：用 state 控制 input 的值，实时响应用户输入
//
// 受控组件是什么？
//   input 的 value 绑定到 state，onChange 把新值写回 state。
//   state 变 → input 显示的值变；用户输入 → 改 state → input 更新。
//   形成一个闭环，React 完全掌控 input 的值。

import { useState } from 'react'

function NameForm() {
  // 1) 声明 state：name 存输入框的值，初始为空字符串
  const [name, setName] = useState('')

  return (
    <div className="name-form">
      {/* 2) 受控 input
            value={name}        —— input 显示的值来自 state
            onChange={...}      —— 用户输入时，把新值写回 state
            e.target.value      —— e 是事件对象，e.target 是 input，.value 是当前值 */}
      <input
        className="name-input"
        type="text"
        placeholder="请输入你的名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 3) 根据 state 显示不同内容
            name 为空 → 提示输入
            name 有值 → 显示问候 */}
      <p className="name-result">
        {name === '' ? '请输入你的名字' : `你好，${name}！`}
      </p>
    </div>
  )
}

export default NameForm
