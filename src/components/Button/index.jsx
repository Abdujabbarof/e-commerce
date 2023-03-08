import React from 'react'
import { Link } from 'react-router-dom'
import css from './button.module.scss'

const Button = ({text, type, radius, border, href, onClick, event}) => {

    if(href) {
        return <Link to={href} className={`${css.btn} ${type === 'secondary' ? css.secondary : css.primary} ${radius === 'round' ? css.round : css.regular} ${border === 'silver' ? css.silver : css.border }` }>{text}</Link>
    }

    return (
        <button className={`${css.btn} ${type === 'secondary' ? css.secondary : css.primary} ${radius === 'round' ? css.round : css.regular} ${border === 'silver' ? css.silver : css.border }`} onClick={onClick} type={event}>{text}</button>
    )
}

export default Button