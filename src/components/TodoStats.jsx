// TodoStats —— 子组件（Task 6 综合项目）
// 目标：显示总数和已完成数
//
// 用到的知识：
//   • props（Task 3）：接收 todos 数组
//   • 数组方法 filter + length（Task 5 练习提示过）：算已完成数

function TodoStats({ todos }) {
  const total = todos.length
  // 用 filter 算出已完成的数量
  const completed = todos.filter((todo) => todo.done).length

  return (
    <p className="todo-stats">
      共 {total} 项 · 已完成 {completed} 项
    </p>
  )
}

export default TodoStats
