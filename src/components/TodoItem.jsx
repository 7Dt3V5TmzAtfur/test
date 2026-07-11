// TodoItem —— 子组件（Task 6 综合项目）
// 目标：显示单条待办，提供「切换完成」「删除」两个操作
//
// 用到的知识：
//   • props（Task 3）：接收 todo 数据 + onToggle / onDelete 回调
//   • 条件渲染（Task 5）：done 状态切换 className 和图标
//   • onClick（Task 4）：两个按钮各自绑事件

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    // 条件 className：done 为 true 时多加 'done' 类名
    <li className={todo.done ? 'todo-app-item done' : 'todo-app-item'}>
      {/* 切换完成状态：点击图标按钮 */}
      <button
        className="todo-app-toggle"
        onClick={() => onToggle(todo.id)}
      >
        {todo.done ? '✅' : '⬜'}
      </button>

      <span className="todo-app-text">{todo.text}</span>

      {/* 删除按钮：单独一个 onClick，不需要 stopPropagation */}
      <button
        className="btn-delete"
        onClick={() => onDelete(todo.id)}
      >
        ✕
      </button>
    </li>
  )
}

export default TodoItem
