import { Select, Switch } from 'antd'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useModal } from '../../utils/useModal'
import css from './settings.module.scss'

const Settings = () => {
    const { setDarkMode, setLangRu, langRu } = useModal()
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    const {t,i18n} = useTranslation()
    
    const handleCheck = (checked) => {
        const newMode = checked
        setDarkMode(checked)
        localStorage.setItem('darkMode', JSON.stringify(newMode))
    } 
    
    const handeLang = (value) => {
        localStorage.setItem('lang', value)
        setLangRu(value)
    }
    
    useEffect(() => {
        i18n.changeLanguage((localStorage.getItem('lang')))
    }, [langRu])
    
  return (
    <>
        <input type="checkbox" id='settings' />
        <div className={css.settings}>
            <label htmlFor="settings" className={css.label}>
                <i class="fa-solid fa-gear"></i>
            </label>
            <div className={`${css.main} ${darkMode && css.darkMode}`}>
                <h1 className={`${darkMode && css.white}`}>{t('themes')}</h1>
                <Switch onChange={handleCheck} checked={darkMode} />
                <h1 className={`${darkMode && css.white}`}>{t('langs')}</h1>
                <Select defaultValue={langRu} onChange={handeLang} options={[
                    { value: 'uz', label: 'Uz' },
                    { value: 'ru', label: 'Ru' },
                ]} />
            </div>
        </div>
    </>
  )
}

export default Settings