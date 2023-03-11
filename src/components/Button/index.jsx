import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../../utils/useModal'
import css from './button.module.scss'

const Button = ({text, type, radius, border, href, onClick, event, value}) => {
    const {darkMode} = useModal()

    if(href) {
        return <Link to={href} className={`${css.btn} ${type === 'secondary' ? css.secondary : css.primary} ${radius === 'round' ? css.round : css.regular} ${border === 'silver' ? css.silver : css.border } ${darkMode && css.darkMode}` }>{text}</Link>
    }

    return (
        <button value={value} className={`${css.btn} ${type === 'secondary' ? css.secondary : css.primary} ${radius === 'round' ? css.round : css.regular} ${border === 'silver' ? css.silver : css.border }  ${darkMode && css.darkMode}`} onClick={onClick} type={event}>{text}</button>
    )
}

export default Button