import Greeting from './components/Greeting.jsx'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  // JSX 中可以用 {} 嵌入 JavaScript 表达式
  const title = 'JSX 与组件'
  const currentYear = new Date().getFullYear()
  const isBeginner = true

  return (
    <div className="app">
      <h1>{title}</h1>

      {/* ===== 1. JSX 基础 ===== */}
      <section className="section">
        <h2>1. JSX 基础</h2>
        <p className="desc">
          JSX 看起来像 HTML，但写在哪里？写在 JavaScript 文件里！
          上面的 {title} 就是用 {'{ }'} 嵌入的变量。
        </p>

        <div className="demo-box">
          <p>今年是 {currentYear} 年。</p>
          <p>这是一个{isBeginner ? '入门级' : '高级'}教程。</p>
          <p>3 + 5 = {3 + 5}</p>
        </div>
      </section>

      {/* ===== 2. 组件复用 ===== */}
      <section className="section">
        <h2>2. 组件复用</h2>
        <p className="desc">
          组件就像"自定义标签"。写一次 Greeting 组件，
          可以多次使用，每次传不同的 name。
        </p>

        <div className="demo-box">
          <Greeting name="小明" />
          <Greeting name="小红" />
          <Greeting name="小白" />
        </div>
      </section>

      {/* ===== 3. 练习区域 ===== */}
      <section className="section">
        <h2>3. 练习：个人信息卡片</h2>
        <p className="desc">
          编辑 <code>src/components/ProfileCard.jsx</code>，
          把里面的内容改成你自己的信息。
        </p>

        <div className="demo-box">
          <ProfileCard />
        </div>
      </section>
    </div>
  )
}

export default App