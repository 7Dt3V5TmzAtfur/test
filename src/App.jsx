import Greeting from './components/Greeting.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Counter from './components/Counter.jsx'
import NameForm from './components/NameForm.jsx'
import ConditionalDemo from './components/ConditionalDemo.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  // JSX 中可以用 {} 嵌入 JavaScript 表达式
  const title = 'JSX · props · state 与事件'
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

      {/* ===== 2. 组件复用 + props 传字符串 ===== */}
      <section className="section">
        <h2>2. 组件复用 · 传字符串 props</h2>
        <p className="desc">
          组件就像"自定义标签"。写一次 Greeting 组件，
          可以多次使用，每次通过 <code>name="..."</code> 传不同的字符串。
        </p>

        <div className="demo-box">
          <Greeting name="小明" />
          <Greeting name="小红" />
          <Greeting name="小白" />
        </div>
      </section>

      {/* ===== 3. props 传不同类型 ===== */}
      <section className="section">
        <h2>3. props 可以传各种类型</h2>
        <p className="desc">
          props 不只是字符串。数字要写 <code>{'{ }'}</code>，
          布尔也一样，true / false 直接写就行。
        </p>

        <div className="demo-box">
          {/* 传字符串 / 数字 / 布尔 */}
          <ProfileCard name="小明" age={20} isStudent={true} />
          <ProfileCard name="小红" age={25} isStudent={false} />
        </div>
      </section>

      {/* ===== 4. 默认 props（默认值）===== */}
      <section className="section">
        <h2>4. 默认 props（默认值）</h2>
        <p className="desc">
          如果调用组件时没传某个 prop，会用组件里写好的默认值。
        </p>

        <div className="demo-box">
          {/* 啥也不传 → 全部走默认值 */}
          <ProfileCard />
        </div>
      </section>

      {/* ===== 5. children prop ===== */}
      <section className="section">
        <h2>5. children prop</h2>
        <p className="desc">
          写在组件标签<strong>里面</strong>的内容，会变成
          一个叫 <code>children</code> 的特殊 prop 传进去。
        </p>

        <div className="demo-box">
          <ProfileCard name="小白">
            <span className="badge">⭐ 新人</span>
            <p className="profile-extra">这是 children 里的内容！</p>
          </ProfileCard>
        </div>
      </section>

      {/* ===== 6. 练习：个人信息卡片 ===== */}
      <section className="section">
        <h2>6. 练习：把卡片改成你自己的</h2>
        <p className="desc">
          编辑 <code>src/components/ProfileCard.jsx</code>，
          改一改默认值；编辑下面这一行，把姓名 / 介绍换成你自己的。
        </p>

        <div className="demo-box">
          <ProfileCard name="你的名字" bio="一句话介绍你自己" age={18} isStudent={true}>
            <span className="badge">🎯 练习中</span>
          </ProfileCard>
        </div>
      </section>

      {/* ===== 7. useState + onClick：计数器 ===== */}
      <section className="section">
        <h2>7. state 与点击事件</h2>
        <p className="desc">
          <code>useState</code> 让组件拥有「自己能改」的数据。
          点击按钮 → 调用 <code>setCount</code> → React 自动重新渲染。
        </p>

        <div className="demo-box">
          <Counter />
        </div>
      </section>

      {/* ===== 8. 受控组件：表单 input ===== */}
      <section className="section">
        <h2>8. 受控组件 · input</h2>
        <p className="desc">
          input 的 <code>value</code> 绑到 state，<code>onChange</code> 把新值写回 state。
          state 变 → input 变，形成闭环。
        </p>

        <div className="demo-box">
          <NameForm />
        </div>
      </section>

      {/* ===== 9. 练习 ===== */}
      <section className="section">
        <h2>9. 练习：改改看</h2>
        <p className="desc">
          打开 <code>src/components/Counter.jsx</code> 和
          <code> src/components/NameForm.jsx</code>，试着自己改一改：
          加一个「+10」按钮，或者让表单显示输入的字符数。
        </p>

        <div className="demo-box">
          <Counter />
          <NameForm />
        </div>
      </section>

      {/* ===== 10. 条件渲染 ===== */}
      <section className="section">
        <h2>10. 条件渲染</h2>
        <p className="desc">
          根据 state 决定显示什么内容。三种写法：
          <code>if/else</code>、<code>? :</code>（三元）、<code>&amp;&amp;</code>（短路）。
        </p>

        <div className="demo-box">
          <ConditionalDemo />
        </div>
      </section>

      {/* ===== 11. 列表渲染 ===== */}
      <section className="section">
        <h2>11. 列表渲染 · map + key</h2>
        <p className="desc">
          用 <code>map()</code> 把数组渲染成一排 JSX，每个元素要给一个
          唯一的 <code>key</code>。点击切换完成状态，看样式如何变化。
        </p>

        <div className="demo-box">
          <TodoList />
        </div>
      </section>

      {/* ===== 12. 练习 ===== */}
      <section className="section">
        <h2>12. 练习：改改看</h2>
        <p className="desc">
          打开 <code>src/components/TodoList.jsx</code>，试着自己改一改：
          多加两条待办，或者把未完成和已完成分开显示（提示：用
          <code> todos.filter(...)</code> 配合 <code>map()</code>）。
        </p>

        <div className="demo-box">
          <TodoList />
        </div>
      </section>
    </div>
  )
}

export default App
