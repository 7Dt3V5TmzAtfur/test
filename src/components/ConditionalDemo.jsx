// ConditionalDemo —— 示例组件（Task 5：条件渲染）
// 目标：演示三种条件渲染写法
//
// 条件渲染是什么？
//   根据 state（或其他条件）决定显示什么内容。
//   比如：已登录 → 显示「欢迎回来」；未登录 → 显示「请登录」。
//
// 三种写法：
//   1. if/else        —— 在函数里提前 return 不同的 JSX（分支多时用）
//   2. 三元运算符 ? :  —— condition ? A : B（二选一时用，最常见）
//   3. && 短路         —— condition && <Element>（满足条件才显示时用）

import { useState } from 'react'

function ConditionalDemo() {
  // 两个 state 用来演示三种写法
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [hasError, setHasError] = useState(false)

  // 方式 1：if/else
  // 写成一个函数，根据条件 return 不同的 JSX
  // 适合：分支很多、每个分支内容很长的情况
  function renderGreeting() {
    if (isLoggedIn) {
      return <p className="cond-result">👋 欢迎回来，小明！</p>
    } else {
      return <p className="cond-result">🔒 请先登录</p>
    }
  }

  return (
    <div className="conditional-demo">
      {/* ===== 方式 1：if/else ===== */}
      <div className="cond-block">
        <h4>方式 1：if/else</h4>
        {/* 调用函数，函数内部用 if/else 决定返回什么 */}
        {renderGreeting()}
        <button className="btn btn-primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? '退出登录' : '登录'}
        </button>
      </div>

      {/* ===== 方式 2：三元运算符 ? : ===== */}
      <div className="cond-block">
        <h4>方式 2：三元运算符 ? :</h4>
        {/* condition ? 满足时显示 : 不满足时显示 */}
        <p className="cond-result">
          {isLoggedIn ? '✅ 已登录' : '❌ 未登录'}
        </p>
      </div>

      {/* ===== 方式 3：&& 短路 ===== */}
      <div className="cond-block">
        <h4>方式 3：&& 短路</h4>
        <button className="btn btn-primary" onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? '隐藏详情' : '显示详情'}
        </button>
        {/* showDetail 为 true 时，才渲染 && 后面的 JSX
            为 false 时，整个表达式是 false，React 什么都不渲染 */}
        {showDetail && (
          <p className="cond-result">
            📖 这是详情内容：&& 适合「满足条件才显示」的场景
          </p>
        )}
      </div>

      {/* ===== 作业：有错误 ===== */}
      <div className="cond-block">
        <h4>作业：有错误</h4>
        <p className="cond-result">
          {hasError ? '❌ 有错误' : '✅ 无错误'}
        </p>
        <button className="btn btn-primary" onClick={() => setHasError(!hasError)}>
          {hasError ? '清除错误' : '模拟错误'}
        </button>
        {hasError && (
          <p className="cond-result" style={{ color: 'red' }}>
            请检查输入的格式是否正确
          </p>
        )}
      </div>
    </div>
  )
}

export default ConditionalDemo
