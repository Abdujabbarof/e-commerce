import React from 'react'
import { Link } from 'react-router-dom'
import css from './navbar.module.scss'

const Navbar = () => {
  return (
    <header>
        <div className={`container ${css.container}`}>
            <Link to='/'>
                <p>LOGO</p>
            </Link>

            <input type="checkbox" id='checkbox' />

            <nav>
                <ul className={css.links}>
                    <li><Link to='/products'>Mahsulotlarimiz</Link></li>
                    <li><Link to=''>Biz haqimizda</Link></li>
                    <li><Link to=''>Kontakt</Link></li>
                </ul>

                <ul className={css.socials}>
                    <li><Link to=''><i class="fa-brands fa-telegram"></i></Link></li>
                    <li><Link to=''><i class="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to=''><i class="fa-brands fa-facebook"></i></Link></li>
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