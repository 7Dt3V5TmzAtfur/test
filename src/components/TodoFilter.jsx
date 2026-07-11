// TodoFilter —— 子组件（Task 6 综合项目）
// 目标：三个筛选按钮（全部 / 未完成 / 已完成），把选择传给父组件
//
// 用到的知识：
//   • 列表渲染 map + key（Task 5）：渲染三个按钮
//   • 条件渲染（Task 5）：当前选中的按钮加 'active' 类名
//   • props（Task 3）：接收当前 filter + onFilterChange 回调

function TodoFilter({ filter, onFilterChange }) {
  // 三个筛选选项
  const filters = [
    { key: 'all', label: '全部' },
    { key: 'active', label: '未完成' },
    { key: 'completed', label: '已完成' },
  ]

  return (
    <div className="todo-filter">
      {filters.map((f) => (
        <button
          key={f.key}
          // 当前选中的按钮高亮
          className={filter === f.key ? 'btn btn-filter active' : 'btn btn-filter'}
          onClick={() => onFilterChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
