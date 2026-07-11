// ProfileCard —— 练习组件（Task 3：props）
// 目标：通过 props 接收展示数据
//
// props 是什么？
//   props 就是「组件的函数参数」。调用组件时传什么，组件就拿到什么。
//   props 是只读的，组件内部不能修改它。

// 1) 基本用法：解构出 name / bio / age / isStudent
// 2) 默认值：解构时写 = 给的就是默认值
// 3) children prop：写在标签之间的内容会作为 children 传进来
function ProfileCard({
  name = '你的名字',
  bio = '一句话介绍你自己',
  age = 18,
  isStudent = true,
  children,
}) {
  return (
    <div className="profile-card">
      <div className="profile-avatar">😺</div>
      <h3>{name}</h3>
      <p className="profile-bio">{bio}</p>
      <p className="profile-meta">
        年龄：{age} · 身份：{isStudent ? '学生' : '上班族'}
      </p>

      {/*
        children 是 React 自动传给组件的一个特殊 prop。
        当你写 <ProfileCard>这里的内容</ProfileCard> 时，
        「这里的内容」就会作为 children 传进来。
        下面这一段只有传了 children 才会显示。
      */}
      {children && <div className="profile-children">{children}</div>}
    </div>
  )
}

export default ProfileCard
