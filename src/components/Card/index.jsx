import React from 'react'
import { useModal } from '../../utils/useModal'
import Button from '../Button'
import css from './card.module.scss'

const Card = ({img, name, price, discount, children}) => {
  return (
    <div className={`${css.card}`}>
        <div className={css.img}>
            <img src={img ? img : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'} alt="photo" />
        </div>

        <div className={css.text}>
            <h2>{name}</h2>
            <div className={css.price}>
                <h3>{discount == 0 ? `${price} so'm` : `${Math.floor(price - (price * discount / 100))} so'm`}</h3>
                <p>{discount == 0 ? "" : `${price} so'm`}</p>
            </div>
            <div className={css.btns}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Card