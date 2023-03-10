import useModal from 'antd/es/modal/useModal'
import React from 'react'
import { Link } from 'react-router-dom'
import css from './navbar.module.scss'

const Navbar = ({tg, ig}) => {
  return (
    <header>
        <div className={`container ${css.container}`}>
            <Link to='/'>
                <p>LOGO</p>
            </Link>

            <input type="checkbox" id='checkbox' />

            <nav>
                <ul className={css.links}>
                    <li><a href='#mahsulotlarimiz'>Mahsulotlarimiz</a></li>
                    <li><a href='#biz'>Biz haqimizda</a></li>
                    <li><a href='#kontakt'>Kontakt</a></li>
                </ul>

                <ul className={css.socials}>
                    <li><Link to={tg}><i class="fa-brands fa-telegram"></i></Link></li>
                    <li><Link to={ig}><i class="fa-brands fa-instagram"></i></Link></li>
                </ul>

                
            </nav>

            <label htmlFor="checkbox" className={css.open}>
                <i class="fa-solid fa-bars"></i>
            </label>
            <label htmlFor="checkbox" className={css.wrap}>
            </label>
        </div>
    </header>
  )
}

export default Navbar