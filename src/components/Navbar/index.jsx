import React from 'react'
import { Link } from 'react-router-dom'
import css from './navbar.module.scss'
import { useModal } from '../../utils/useModal'
import { useTranslation } from 'react-i18next'

const Navbar = ({tg, ig}) => {
    const {darkMode} = useModal()
    const {t} = useTranslation()

  return (
    <header className={`${darkMode && css.darkMode}`}>
        <div className={`container ${css.container}`}>
            <Link to='/'>
                <p className={`${darkMode && css.color}`}>LOGO</p>
            </Link>

            <input type="checkbox" id='checkbox' />

            <nav className={`${darkMode && css.dark}`}>
                <ul className={css.links}>
                    <li><a href='#mahsulotlarimiz' className={`${darkMode && css.color} ${darkMode && css.hover}`}>{t('link1')}</a></li>
                    <li><a href='#biz' className={`${darkMode && css.color} ${darkMode && css.hover}`}>{t('link2')}</a></li>
                    <li><a href='#kontakt' className={`${darkMode && css.color} ${darkMode && css.hover}`}>{t('link3')}</a></li>
                </ul>

                <ul className={css.socials}>
                    <li><Link to={tg}><i class="fa-brands fa-telegram"></i></Link></li>
                    <li><Link to={ig}><i class="fa-brands fa-instagram"></i></Link></li>
                </ul>

                
            </nav>

            <label htmlFor="checkbox" className={`${css.open} ${darkMode && css.color}`}>
                <i class="fa-solid fa-bars"></i>
            </label>
            <label htmlFor="checkbox" className={css.wrap}>
            </label>
        </div>
    </header>
  )
}

export default Navbar