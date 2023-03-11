import { Select, Switch } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useModal } from '../../utils/useModal'
import css from './settings.module.scss'

const Settings = () => {
    const { setDarkMode, darkMode} = useModal()
    const {i18n} = useTranslation()
    
    const handleCheck = (checked) => {
        setDarkMode(checked)
    } 

    const handeLang = (value) => {
        i18n.changeLanguage(value)
    }

  return (
    <>
        <input type="checkbox" id='settings' />
        <div className={css.settings}>
            <label htmlFor="settings" className={css.label}>
                <i class="fa-solid fa-gear"></i>
            </label>
            <div className={`${css.main} ${darkMode && css.darkMode}`}>
                <h1 className={`${darkMode && css.white}`}>Theme</h1>
                <Switch onChange={handleCheck} />
                <h1 className={`${darkMode && css.white}`}>Langs</h1>
                <Select defaultValue={'uz'} onChange={handeLang} options={[
                    { value: 'uz', label: 'Uz' },
                    { value: 'ru', label: 'Ru' },
                ]} />
            </div>
        </div>
    </>
  )
}

export default Settings