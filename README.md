# React 零基础入门教程

欢迎！这个教程从零开始教你 React 前端开发。不需要任何编程基础。

## 环境要求

- **Node.js** >= 18（本教程使用 v22）
- **npm**（Node.js 自带）
- **VS Code**（推荐，任意编辑器均可）

> 如果还没有安装 Node.js，请前往 https://nodejs.org 下载最新 LTS 版本。

## 如何运行本项目

```bash
# 安装依赖（首次运行需要）
npm install

# 启动开发服务器
npm run dev
```

浏览器打开终端显示的地址（通常是 http://localhost:5173），就能看到页面了。

## 项目结构

```
react-beginner-tutorial/
├── index.html          # 入口 HTML 文件
├── package.json        # 项目配置和依赖管理
├── vite.config.js      # Vite 构建工具配置
├── public/             # 静态资源目录
└── src/                # 源代码目录
    ├── main.jsx        # React 入口文件
    ├── App.jsx         # 根组件
    ├── index.css       # 全局样式
    └── components/     # 组件目录
        ├── Greeting.jsx    # 示例组件
        └── ProfileCard.jsx # 练习组件
```

## 教程目录

| # | 任务 | 说明 |
|---|------|------|
| 1 | ✅ **环境搭建** | 安装工具、创建项目、理解目录结构 |
| 2 | ✅ **JSX 与组件** | 学会 JSX 语法，写出第一个组件 |
| 3 | ✅ **props** | 给组件传数据 |
| 4 | ✅ **state 与事件处理** | 管理组件状态，响应用户操作 |
| 5 | **条件渲染与列表渲染**（当前） | 动态控制显示内容 |
| 6 | **综合项目：Todo List** | 用学到的知识完成一个完整项目 |

## 第 2 课：JSX 与组件

### JSX 是什么？

JSX 是 JavaScript 的语法扩展，让你在 JS 文件里写类似 HTML 的代码。

```jsx
const element = <h1>你好，React！</h1>
```

这不是 HTML，也不是字符串，而是 JSX。它会被编译成 JavaScript。

### 表达式嵌入 {}

在 JSX 中，用 `{}` 可以嵌入任何 JavaScript 表达式：

```jsx
const name = '小明'
const element = <h1>你好，{name}！</h1>

// 还可以写运算、三元表达式等
<p>3 + 5 = {3 + 5}</p>
<p>{isBeginner ? '入门' : '高级'}</p>
```

### 函数组件

React 应用由"组件"构成。组件就像自定义的 HTML 标签。

```jsx
// 定义一个组件：就是一个返回 JSX 的函数
function Greeting() {
  return <div>你好！</div>
}

// 使用组件：把它当 HTML 标签用
<Greeting />
```

### 组件复用

组件最大的好处是"复用"。一个组件可以在不同位置多次使用：

```jsx
<Greeting name="小明" />
<Greeting name="小红" />
<Greeting name="小白" />
```

### 练习

打开 `src/components/ProfileCard.jsx`，补全个人信息卡片组件。

要求：
- 显示头像（可以用 emoji）
- 显示你的姓名
- 写一句自我介绍
- 让卡片好看（你可以在 `index.css` 中添加样式）

完成练习后，保存文件，浏览器会自动刷新。

---

## 第 3 课：props

### props 是什么？

**props = 组件的"函数参数"**。调用组件时写什么属性，组件里就能拿到什么。

```jsx
// 调用：传 name="小明"
<Greeting name="小明" />

// 组件：用解构的方式接收
function Greeting({ name }) {
  return <p>你好，{name}！</p>
}
```

是不是和函数参数很像？

```js
// 普通函数
function add(a, b) { return a + b }
add(1, 2)              // 传 1、2 进去

// React 组件
function Greeting({ name }) { return <p>你好，{name}</p> }
<Greeting name="小明" /> // 传 name="小明" 进去
```

### props 是只读的

组件里**不能**修改 props。数据从父组件传进来，组件只能"展示"，不能"改"：

```jsx
// ❌ 错误：组件里改 props
function Greeting({ name }) {
  name = '小红'   // 不要这样！
  return <p>{name}</p>
}
```

为什么只读？因为同一个组件可能被多处复用，你改了它，其它地方看到的就乱了。

### 传不同类型

props 不只是字符串。三种常用类型：

```jsx
{/* 字符串：双引号直接写 */}
<Greeting name="小明" />

{/* 数字：花括号包起来 */}
<ProfileCard age={20} />

{/* 布尔：true / false 直接写 */}
<ProfileCard isStudent={true} />
```

注意数字和布尔要写 `{}`，因为花括号里塞的是 JS 表达式。

### 默认值

如果调用时不传某个 prop，会用组件里写好的默认值：

```jsx
function ProfileCard({ name = '你的名字', age = 18 }) {
  return <p>{name} - {age}岁</p>
}

<ProfileCard />            // "你的名字 - 18岁"（走默认值）
<ProfileCard name="小白" /> // "小白 - 18岁"（name 用传进来的）
```

### children prop

写在组件标签**里面**的内容，会变成一个叫 `children` 的特殊 prop 自动传进去：

```jsx
<ProfileCard name="小白">
  <span>⭐ 新人</span>
</ProfileCard>

// 组件里
function ProfileCard({ name, children }) {
  return (
    <div>
      <h3>{name}</h3>
      {children}     {/* 这里会渲染那个 ⭐ 新人 */}
    </div>
  )
}
```

`children` 让组件可以"包住"一段任意内容，非常适合做卡片、弹窗、布局。

### props 是单向数据流

数据从**父组件**流向**子组件**，子组件再传给它的子组件，依次往下。像水流一样：

```
App (父)
 └─ ProfileCard (子)
      └─ 任何 children（孙）
```

这让数据来源始终清晰：出问题就沿着水流往上游找。

### 练习

打开 `src/components/ProfileCard.jsx`，把默认值改成你自己的信息；
打开 `src/App.jsx`，改一改第 6 个练习区域的 `name` 和 `bio`。

要求：
- 至少展示一个数字 prop 和一个布尔 prop
- 至少展示一次默认 props（不传值）
- 至少展示一次 children（在标签内写点内容）

---

## 第 4 课：state 与事件处理

### state 是什么？

上一节学的 **props** 是「外部传进来」的数据，组件自己不能改。
**state** 是组件「自己内部」的数据，组件**可以改**它。

打个比方：

```
props  = 别人递给你的纸条（你能看，不能改人家写的内容）
state  = 你自己的笔记本（你想怎么改就怎么改）
```

state 一变，React 就会**自动重新渲染**这个组件，把新值显示到页面上。
这是 React 最核心的能力：**数据变了 → 页面自动更新**。

### useState 钩子

React 提供了一个叫 `useState` 的函数，用来给函数组件添加 state。

```jsx
import { useState } from 'react'

function Counter() {
  // count     —— 当前值（变量）
  // setCount  —— 修改它的函数（setter）
  // 0         —— 初始值
  const [count, setCount] = useState(0)

  return <p>当前计数：{count}</p>
}
```

解构出来的两个东西：

| 名字 | 作用 |
|---|---|
| `count` | 当前值，直接在 JSX 里用 `{count}` 显示 |
| `setCount` | 修改它的函数，**只能用这个函数改**，不能直接 `count = 5` |

> ⚠️ 为什么不能直接 `count = 5`？因为 React 监听不到你这么改。
> 只有调用 `setCount(5)`，React 才知道「值变了，要重新渲染」。

### 事件处理 onClick

给按钮绑定点击事件，用 `onClick`：

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>当前计数：{count}</p>
      {/* 点击按钮 → 调用 setCount(count + 1) → React 重新渲染 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
```

注意 `onClick` 的值是一个**函数**，不是函数调用结果：

```jsx
// ✅ 传一个函数
<button onClick={() => setCount(count + 1)}>+1</button>

// ❌ 直接调用：页面一加载就执行了，点击反而没反应
<button onClick={setCount(count + 1)}>+1</button>
```

### state 更新触发重新渲染

整个流程是这样的：

```
1. 用户点击按钮
2. 调用 setCount(count + 1)
3. React 发现 state 变了
4. React 重新调用 Counter() 函数，拿到新的 JSX
5. 对比新旧 JSX，更新页面
```

所以你**不需要手动操作 DOM**，只要管好 state，页面会自动跟上。
这就是「声明式 UI」：你声明「页面应该长这样」，React 负责把它变成长这样。

### 更新数字 state 的小坑

当新值依赖旧值时（比如 `count + 1`），更安全的写法是传一个**函数**：

```jsx
// ✅ 推荐：传函数，React 会把最新值传给你
setCount(prev => prev + 1)

// ⚠️ 也能用，但连续多次调用可能出错
setCount(count + 1)
```

为什么？因为 `count` 是这次渲染时的快照，连续调用 `setCount(count + 1)` 三次，
三次拿到的 `count` 是同一个旧值，结果只 +1 而不是 +3。
传函数就没这问题，React 保证 `prev` 一定是最新值。

### 受控组件：表单 input

表单输入框 `<input>` 默认自己管自己的值（非受控）。
React 想完全控制它，就要把它的值绑到 state 上：

```jsx
function NameForm() {
  const [name, setName] = useState('')

  return (
    <div>
      {/* value 绑到 state，onChange 改 state */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>你输入的是：{name}</p>
    </div>
  )
}
```

两个关键点：

1. `value={name}` —— input 显示的值来自 state
2. `onChange={(e) => setName(e.target.value)}` —— 用户输入时，把新值写回 state

这就是**受控组件**：input 的值完全由 state 控制，state 变 → input 变；
用户输入 → 改 state → input 显示新值。一个闭环。

`e.target.value` 是什么？`e` 是事件对象，`e.target` 是触发事件的元素（这里就是 input），
`.value` 是它当前的值。

### 练习

1. 打开 `src/components/Counter.jsx`，实现一个计数器：
   - 显示当前数字
   - 「+1」「-1」两个按钮
   - 「重置」按钮（回到 0）

2. 打开 `src/components/NameForm.jsx`，实现一个姓名输入表单：
   - 一个输入框，输入姓名
   - 实时显示「你好，{姓名}！」
   - 输入为空时显示「请输入你的名字」

完成练习后，保存文件，浏览器会自动刷新。

## 第 5 课：条件渲染与列表渲染

### 条件渲染是什么？

条件渲染 = 根据 state（或其他条件）决定**显示什么内容**。

最常见的场景：

- 已登录 → 显示「欢迎回来」；未登录 → 显示「请登录」
- 有数据 → 显示列表；没数据 → 显示「暂无内容」
- 点击「详情」按钮 → 才显示详情区块

React 里有三种写法，各有适用场景。

### 写法 1：if/else

把判断逻辑写在一个函数里，根据条件 `return` 不同的 JSX。适合**分支多、每个分支内容很长**的情况。

```jsx
function renderGreeting() {
  if (isLoggedIn) {
    return <p>👋 欢迎回来，小明！</p>
  } else {
    return <p>🔒 请先登录</p>
  }
}

// 在 JSX 里调用这个函数
return <div>{renderGreeting()}</div>
```

> 为什么不直接在 `{}` 里写 `if`？
> 因为 `{}` 里只能放**表达式**（有返回值的代码），`if` 是**语句**，没有返回值。
> 所以把 `if` 写到函数里，再调用函数拿返回值。

### 写法 2：三元运算符 `? :`

`condition ? 满足时显示 : 不满足时显示`。适合**二选一**的情况，最常用。

```jsx
return (
  <p>{isLoggedIn ? '✅ 已登录' : '❌ 未登录'}</p>
)
```

三元运算符是表达式（有返回值），可以直接写在 `{}` 里。

### 写法 3：`&&` 短路

`condition && <Element>` —— 条件为 `true` 时才显示后面的内容，为 `false` 时什么都不渲染。适合**满足条件才显示**的场景。

```jsx
return (
  <div>
    <button onClick={() => setShowDetail(!showDetail)}>
      {showDetail ? '隐藏详情' : '显示详情'}
    </button>
    {showDetail && <p>📖 这是详情内容</p>}
  </div>
)
```

`&&` 的原理：JavaScript 的 `&&` 是短路求值。

- `true && X` → 结果是 `X`
- `false && X` → 结果是 `false`（X 不执行）

React 渲染 `false` 时什么都不显示，所以 `false && <Element>` 等于「不渲染」。

> ⚠️ 坑：`&&` 左边一定要是布尔值。
> 如果写成 `count && <p>...</p>`，当 `count` 是 `0` 时，会渲染出一个 `0` 字符到页面上（因为 `0` 是假值，但 `0` 本身会被 React 显示出来）。
> 安全写法：`count > 0 && <p>...</p>`，明确转成布尔值。

### 列表渲染是什么？

列表渲染 = 把一个数组的数据，变成页面上的一排 JSX 元素。

比如你有一个待办数组：

```jsx
const todos = [
  { id: 1, text: '学习 JSX', done: true },
  { id: 2, text: '学习 props', done: true },
  { id: 3, text: '学习 state', done: false },
]
```

想渲染成：

```html
<li>学习 JSX</li>
<li>学习 props</li>
<li>学习 state</li>
```

怎么做？用数组的 `.map()` 方法。

### map() + key

`.map()` 是数组的方法：把每个元素变成另一个东西。在这里，就是把每个数据元素变成一个 JSX 标签。

```jsx
const todos = [
  { id: 1, text: '学习 JSX', done: true },
  { id: 2, text: '学习 props', done: true },
  { id: 3, text: '学习 state', done: false },
]

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.done ? '✅' : '⬜'} {todo.text}
        </li>
      ))}
    </ul>
  )
}
```

拆开看：

1. `todos.map(...)` 遍历数组，每个元素 `todo` 返回一个 `<li>`
2. `map` 返回的是一个 JSX 数组：`[<li>...</li>, <li>...</li>, <li>...</li>]`
3. `{}` 把这个数组嵌入到 `<ul>` 里，React 自动展开渲染

> 为什么能用 `{}` 嵌入数组？
> 因为数组也是表达式（有返回值）。React 渲染数组时，会把每个元素依次渲染出来。

### key 的作用和注意事项

`key` 是写在列表元素上的特殊属性，帮 React **识别哪个是哪个**。

```jsx
{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>   {/* ← key 写在这里 */}
))}
```

#### key 有什么用？

React 更新列表时，需要知道：

- 哪些元素是新加的？
- 哪些元素被删除了？
- 哪些元素换了位置？

有 `key`，React 就能精准地只更新变化的那一项，不用把整个列表重新渲染一遍。**列表越长，key 带来的性能优势越明显。**

#### key 的三条规则

1. **必须唯一**：同一个列表里，每个元素的 `key` 不能重复。
2. **要稳定**：同一个数据的 `key` 不能变来变去（不能用随机数，不能用数组下标当 key）。
3. **不能用数组下标 `index` 当 key**（除非列表只读不改）。

> ⚠️ 为什么不用 `index` 当 key？
> 如果你删除了列表中间一项，后面的下标会全部前移，React 会以为「下标 2 的内容变了」而不是「下标 2 的元素被删了」，可能导致渲染错乱（尤其是带 state 的子组件）。
> 正确做法：用数据自己的唯一 `id`。

### 综合：待办列表 + 完成状态切换

把条件渲染和列表渲染结合起来：渲染一个待办列表，点击某一项可以切换完成状态，完成时显示删除线。

`src/components/TodoList.jsx`：

```jsx
import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 JSX', done: true },
    { id: 2, text: '学习 props', done: true },
    { id: 3, text: '学习 state', done: false },
    { id: 4, text: '学习条件与列表渲染', done: false },
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  return (
    <ul className="todo-items">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.done ? 'todo-item done' : 'todo-item'}
          onClick={() => toggleTodo(todo.id)}
        >
          <span className="todo-check">{todo.done ? '✅' : '⬜'}</span>
          <span className="todo-text">{todo.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
```

拆开看几个关键点：

1. **`map` 渲染列表**：每个 `todo` → 一个 `<li>`，`key={todo.id}` 用 id 做唯一标识。
2. **条件样式**：`className={todo.done ? 'todo-item done' : 'todo-item'}` —— 完成时多加一个 `done` 类名，CSS 里给 `done` 加删除线和灰色。
3. **不可变更新**：`toggleTodo` 里**不能直接写 `todos[i].done = !todos[i].done`**。要用 `map` 返回一个**新数组**，匹配 `id` 的那一项用 `{ ...todo, done: !todo.done }` 创建新对象，其他项保持不变。
   - 为什么？因为 React 靠「引用是否变了」判断 state 有没有更新。直接改原数组，React 可能不重新渲染。

### 练习

1. 打开 `src/components/ConditionalDemo.jsx`，自己加一个条件分支：
   - 加一个 state `hasError`（布尔）
   - 用 `&&` 显示「⚠️ 出错了」的提示

2. 打开 `src/components/TodoList.jsx`，试着自己改一改：
   - 在数组里多加两条待办
   - 进阶：把未完成和已完成**分开显示**（提示：用 `todos.filter(todo => !todo.done)` 和 `todos.filter(todo => todo.done)` 配合 `map()`）

完成练习后，保存文件，浏览器会自动刷新。

---

每个任务都在对应的 Issue 中跟踪。

## 你学到了什么

完成本教程后，你将能够：

- 理解 React 的核心概念（组件、JSX、props、state）
- 写一个可复用的函数组件，用 props 给它传数据
- 理解 props 是只读的、数据是单向流动的
- 用 Vite 创建和运行 React 项目
- 独立写一个 Todo List 交互页面
- 知道下一步学什么

## 下一步

本教程是第一期内容。后续扩展建议：

- React Router（页面路由）
- useEffect 与副作用
- 调用后端 API
- 项目部署