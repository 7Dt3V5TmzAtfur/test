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
    └── index.css       # 全局样式
```

## 教程目录

| # | 任务 | 说明 |
|---|------|------|
| 1 | ✅ **环境搭建**（当前） | 安装工具、创建项目、理解目录结构 |
| 2 | **JSX 与组件** | 学会 JSX 语法，写出第一个组件 |
| 3 | **props** | 给组件传数据 |
| 4 | **state 与事件处理** | 管理组件状态，响应用户操作 |
| 5 | **条件渲染与列表渲染** | 动态控制显示内容 |
| 6 | **综合项目：Todo List** | 用学到的知识完成一个完整项目 |

每个任务都在对应的 Issue 中跟踪，完成后会更新本 README。

## 你学到了什么

完成本教程后，你将能够：

- 理解 React 的核心概念（组件、JSX、props、state）
- 用 Vite 创建和运行 React 项目
- 独立写一个 Todo List 交互页面
- 知道下一步学什么

## 下一步

本教程是第一期内容。后续扩展建议：

- React Router（页面路由）
- useEffect 与副作用
- 调用后端 API
- 项目部署