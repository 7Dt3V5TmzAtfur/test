// TodoList —— 示例组件（Task 5：列表渲染 + 条件样式）
// 目标：用 map() 渲染列表，根据 done 状态切换样式
//
// 列表渲染是什么？
//   把一个数组的数据，变成页面上的一排 JSX 元素。
//   用数组的 .map() 方法：每个元素 → 一个 JSX 标签。
//
// key 是什么？
//   每个 JSX 元素的唯一标识，写在标签上 key={id}。
//   帮 React 知道「哪个是哪个」，更新时只改变化的那一项，高效。
//
// 注意：本示例不做添加 / 删除（综合项目才做），
//       只演示「渲染列表 + 点击切换完成状态」。

import { useState } from 'react'

function TodoList() {
  // 1) 初始待办列表
  //    每个 todo 有三个字段：id（唯一标识）、text（文字）、done（是否完成）
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 JSX', done: true },
    { id: 2, text: '学习 props', done: true },
    { id: 3, text: '学习 state', done: false },
    { id: 4, text: '学习条件与列表渲染', done: false },
    { id: 5, text: '学习事件处理', done: false },
    { id: 6, text: '学习知识地图', done: false },
  ])

  // 2) 点击切换完成状态
  //    重要：不能直接改 todos[i].done（state 必须是不可变更新）
  //    用 map 返回一个新数组：匹配 id 的那一项，done 取反；其他不变
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  return (
    <div className="todo-list">
      {/* first team : unfinished */}
      <h3> 未完成 ({todos.filter(t => !t.done).length})</h3>
      <ul className="todo-items">
        {todos
        .filter(todo => !todo.done) 
        .sort((a, b) => a.id - b.id)
        .map(todo => (
          <li
            key={todo.id}
            className={'todo-item'}
            onClick={() => toggleTodo(todo.id)}
          >
            <span className="todo-check">⬜</span>
            <span className="todo-text">{todo.text}</span>
          </li>
        ))}
      </ul>


      {/* second team : completed */}
      <h3> 已完成 ({todos.filter(t => t.done).length})</h3>
      <ul className="todo-items">
        {
          todos
          .filter(todo => todo.done) 
          .sort((a, b) => a.id - b.id)
          .map(todo => (
            <li
              key={todo.id}
              className={'todo-item done'}
              onClick={() => toggleTodo(todo.id)}
            >
              <span className="todo-check">✅</span>
              <span className="todo-text">{todo.text}</span>
            </li>
          ))
        }
      </ul>
      <p className="todo-hint">点击任意一项切换完成状态</p>
    </div>
  )
}

export default TodoList
