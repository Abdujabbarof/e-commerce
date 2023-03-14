import React from 'react'
import { useTranslation } from 'react-i18next'
import { useModal } from '../../utils/useModal'
import css from './loading.module.scss'

const Loading = () => {
  // const {darkMode} = useModal()
  const darkMode = JSON.parse(localStorage.getItem('darkMode'))
  const {t} = useTranslation()

  return (
    <div className={`${css.loading} ${darkMode && css.darkMode}`}>{t('loading')}</div>
  )
}

export default Loading