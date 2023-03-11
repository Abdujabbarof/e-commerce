import React, { useState } from 'react'
import css from './scrollTop.module.scss'
import {useModal} from '../../utils/useModal'

const ScrollTop = () => {
    const [visible, setVisible] = useState(true)
    const {darkMode} = useModal()

    const handleScroll = () => {
        if(window.pageYOffset) {
            setVisible(true);
        }else {
            setVisible(false);
        }
    }

    window.addEventListener('scroll', handleScroll)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <>
        {visible && <button className={`${css.btnUp} ${darkMode && css.darkMode}`} onClick={scrollUp}>
            <i className='fa-solid fa-chevron-up'></i>
        </button>}
    </>
  )
}

export default ScrollTop