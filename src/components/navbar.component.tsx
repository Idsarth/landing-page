import React, { ReactElement, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import logo from '../assets/images/logo/img-logo.png'
import icon_heart from '../assets/images/icons/icon-1.svg'
import icon_noti from '../assets/images/icons/icon-8.svg'

const Navbar: React.FC = (): ReactElement => {
   const [active, setActive] = useState<boolean>(false)

   return (
      <header className='l-navbar'>
         <nav className='navbar container'>
            <div className='navbar-brand'>
               <img src={logo} alt="logo" />
            </div>
            <ul className={`${active ? 'navbar-list navbar-active' : 'navbar-list'}`}>
               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Servicios</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Productos</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Bodas</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Estilos</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Blog</a>
               </li>

               <li className='navbar-item-alt '>
                  <a className='navbar-link' href="#">Iniciar sesion</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">Reserva</a>
               </li>

               <li className='navbar-item'>
                  <a className='navbar-link' href="#">ES</a>
               </li>
            </ul>

            <div className='navbar-icons'>
               <div className='navbar-icon'>
                  <img src={icon_heart} alt="icon"/>
               </div>
               <div className='navbar-icon'>
                  <img className='navbar-notification' src={icon_noti} alt="icon"/>
               </div>
               <MdMenu onClick={() => setActive(!active)} color='#fff' size={32} className='navbar-menu' />
            </div>
         </nav>
      </header>
   )
}

export default Navbar
