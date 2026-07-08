// Greeting 是一个可复用的组件
// 它接受一个 name 参数（props），显示个性化的问候语
function Greeting({ name }) {
  return (
    <div className="greeting">
      <span className="greeting-icon">👋</span>
      <p>你好，{name}！欢迎学习 React。</p>
    </div>
  )
}

export default Greeting