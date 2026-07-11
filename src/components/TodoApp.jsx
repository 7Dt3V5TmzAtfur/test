// TodoApp —— 综合项目主组件（Task 6）
// 目标：把前 5 个任务学的知识综合起来，做一个完整的 Todo List
//
// 功能：
//   1. 添加待办（TodoInput）
//   2. 切换完成状态（TodoItem）
//   3. 删除待办（TodoItem）
//   4. 统计：总数 / 已完成数（TodoStats）
//   5. 按状态筛选：全部 / 未完成 / 已完成（TodoFilter）
//
// 用到的知识（全部来自前 5 个任务，无超纲）：
//   • 组件复用（Task 2）：拆成 5 个组件
//   • props 单向数据流（Task 3）：父 → 子传数据，子 → 父传回调
//   • useState + 事件（Task 4）：todos / filter 两个 state
//   • 条件渲染（Task 5）：空状态提示、筛选高亮
//   • 列表渲染 map + key（Task 5）：渲染待办列表
//
// 组件树：
//   TodoApp（持有 state）
//   ├── TodoInput     （onAdd 回调）
//   ├── TodoStats     （todos 数据）
//   ├── TodoFilter    （filter 数据 + onFilterChange 回调）
//   └── TodoItem × N  （todo 数据 + onToggle / onDelete 回调）

import { useState } from 'react'
import TodoInput from './TodoInput.jsx'
import TodoItem from './TodoItem.jsx'
import TodoFilter from './TodoFilter.jsx'
import TodoStats from './TodoStats.jsx'

function TodoApp() {
  // 1) 待办列表 state：每个 todo 有 id、text、done 三个字段
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 JSX', done: true },
    { id: 2, text: '学习 props', done: true },
    { id: 3, text: '学习 state', done: false },
    { id: 4, text: '学习条件与列表渲染', done: false },
  ])

  // 2) 筛选 state：'all'（全部）/ 'active'（未完成）/ 'completed'（已完成）
  const [filter, setFilter] = useState('all')

  // 3) 添加待办：用 Date.now() 当唯一 id（时间戳，每毫秒不同）
  function addTodo(text) {
    setTodos([
      ...todos,
      { id: Date.now(), text: text, done: false },
    ])
  }

  // 4) 切换完成状态：用 map 返回新数组，匹配 id 的那一项 done 取反
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  // 5) 删除待办：用 filter 返回新数组，排除指定 id
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // 6) 按筛选条件过滤要显示的待办
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done    // 未完成
    if (filter === 'completed') return todo.done  // 已完成
    return true                                    // 全部
  })

  return (
    <div className="todo-app">
      <h3>📝 我的待办</h3>

      {/* 添加待办：把 addTodo 函数作为 onAdd prop 传下去 */}
      <TodoInput onAdd={addTodo} />

      {/* 统计：把 todos 数组传下去 */}
      <TodoStats todos={todos} />

      {/* 筛选：把当前 filter 和 setFilter 传下去 */}
      <TodoFilter filter={filter} onFilterChange={setFilter} />

      {/* 列表：用 map 渲染 filteredTodos */}
      <ul className="todo-app-items">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {/* 空状态：筛选后没有待办时显示（条件渲染 && 短路） */}
      {filteredTodos.length === 0 && (
        <p className="todo-empty">🎉 没有待办，真棒！</p>
      )}
    </div>
  )
}

export default TodoApp
