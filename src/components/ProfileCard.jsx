// ProfileCard —— 练习组件
// 目标：补全这个组件，显示你的个人信息卡片
// 要求：
// - 显示头像（可以用 emoji）
// - 显示姓名
// - 显示一句话介绍
// - 用 CSS 让卡片好看

function ProfileCard({name,bio}) {
  // 在这里写你的代码

  return (
    <div className="profile-card">
      {/* 替换下面的内容为你自己的信息 */}
      <div className="profile-avatar">😺</div>
      <h3>{name}</h3>
      <p className="profile-bio">{bio}</p>
    </div>
  )
}

export default ProfileCard