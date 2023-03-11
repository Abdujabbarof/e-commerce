import React from 'react'
import { useModal } from '../../utils/useModal'
import css from './loading.module.scss'

const Loading = () => {
  const {darkMode} = useModal()

  return (
    <div className={`${css.loading} ${darkMode && css.darkMode}`}>Yuklanmoqda...</div>
  )
}

export default Loading