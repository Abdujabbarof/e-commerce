import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import css from './footer.module.scss'
import {useModal} from '../../utils/useModal'

const Footer = () => {
  const {t} = useTranslation()
  const {darkMode} = useModal()
  return (
    <footer className={`${css.footer} ${darkMode && css.darkMode}`}>
      <Link to="/"><p className={`${darkMode && css.white}`}>PODARKI</p></Link>
      <div className={`container ${css.container}`}>
        <p className={`${darkMode && css.white}`}>{t('footer1')}</p>
        <p className={`${darkMode && css.white}`}>Developed by <Link className={`${darkMode && css.silver}`} to="https://www.instagram.com/_abdujabbarof_/">_abdujabbarof_</Link></p>
      </div>
    </footer>
  )
}

export default Footer