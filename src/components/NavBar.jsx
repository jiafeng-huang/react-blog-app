import '../App.css'
import { useDarkMode } from '../hooks/useDarkMode'

function NavBar() {
	const { isDark, toggleDark } = useDarkMode()
	
  return (
    <header className="navbar">
      <a href="/" className="logo">RUNOOB Blog</a>
      <nav>
        <a href="/">首页</a>
        <a href="#">关于</a>
		<button className="theme-btn" onClick={toggleDark}>
		  {isDark ? '亮色' : '暗黑'}
		</button>
      </nav>
    </header>
  )
}

export default NavBar