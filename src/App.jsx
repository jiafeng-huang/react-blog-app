import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'


function App(){
  return (
    <div className="app">
      <NavBar />

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Copyright © 2024 React 课程</p>
      </footer>
    </div>
	)
}

export default App