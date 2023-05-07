import React from 'react'
import { useSelector } from 'react-redux'
import "../style/layout.css"
import {useNavigate} from "react-router-dom"

function Home() {
  const {user} = useSelector(state => state.users)
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = React.useState(false)
  
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line"
    },
    {
      name: "Bookings",
      path: "/bookings",
      icon: "ri-file-list-line"
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line" 
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line"
    },
  ]

  const manuToBeRendered = userMenu
  const activeRoute = window.location.pathname
  return (
    <div className='layout-parent'>
      {/* {user && <h1>Welcome {user?.name}</h1>}
      {user && <h1>Welcome {user.email}</h1>} */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className='logo'>Tågmästare</h1>
          {/* <h2>{user.name}</h2> */}
        </div>
        <div className='d-flex flex-column gap-3 justify-content-start menu'>
          {manuToBeRendered.map((item, index) => {
            return <div className={`${activeRoute===item.path && "active-menu-item"} menu-item`}>
              <i className={item.icon}></i>
              {!collapsed && 
              <span onClick={() => {
                if(item.path === "/logout") {
                  localStorage.removeItem("token")
                  navigate("/login")
                } else {
                navigate(item.path)
                }
              }}>{item.name}</span>}
            </div>
          })}
        </div>
      </div>
      <div className="body">
        <div className="header">
          {collapsed ? (
          <i class="ri-menu-2-fill"
          onClick={() => setCollapsed(!collapsed)}></i>) : (
          <i class="ri-close-line"
          onClick={() => setCollapsed(!collapsed
          )}></i>)}  
        </div>
        <div className="content"></div>
      </div>
    </div>
  )
}

export default Home
