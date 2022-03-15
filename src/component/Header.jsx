import React,{useRef,useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../assets/images/Logo-2.png'
const mainNav = [
  {
    display:"Trang Chủ",
    path:"/"
  },
  {
    display:"Sản phẩm",
    path:"/category"
  },
  {
    display:"Phụ Kiện",
    path:"/accessories"
  },
  {
    display:"Liên Hệ",
    path:"/contact"
  },
]

const Header = () => {
  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e =>e.path === pathname)
  const headerRef = useRef(null)
  const menuLeft = useRef(null)
  const menuToggle =()=>{
      menuLeft.current.classList.toggle('active')
  }
  useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          headerRef.current.classList.add('shrink')
        }else{
          headerRef.current.classList.remove('shrink') 
        }
      })
      return () =>{
        window.removeEventListener("scroll")
      };
  }, [])
  return (
    <div className='header' ref={headerRef}>
      <div className='container'>
        <div className='header__logo'>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className='header__menu'>
        <div className='header__menu__mobile-toggle' onClick={menuToggle}>
              <box-icon type='logo' name='mongodb'></box-icon>
        </div>
          <div className='header__menu__left' ref={menuLeft}>
            <div className='header__menu__left__close' onClick={menuToggle}>
              <box-icon type='logo' name='mongodb'></box-icon>
            </div>
            {
              mainNav.map((item, index)=>(
                <div key={index} className={`header__menu__item 
                header__menu__left__item ${index ===activeNav ? 'active':''}`}
                onClick={menuToggle}>
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))
            }
            </div>
          <div className='header__menu__right'>
            <div className='header__menu__item header__menu__right__item'>
              <box-icon name='search' ></box-icon>
            </div>
            <div className='header__menu__item header__menu__right__item'>
              <Link to="/cart">
              <box-icon name='user' ></box-icon>
              </Link>
            </div>
            <div className='header__menu__item header__menu__right__item'>
              <box-icon name='search' ></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header