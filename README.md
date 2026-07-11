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
| 4 | **state 与事件处理**（当前） | 管理组件状态，响应用户操作 |
| 5 | **条件渲染与列表渲染** | 动态控制显示内容 |
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