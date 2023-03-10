import { Select, Switch } from 'antd'
import React from 'react'
import { useModal } from '../../utils/useModal'
import css from './settings.module.scss'

const Settings = () => {
    const {setLang, langRu, setDarkMode, darkMode} = useModal()
    console.log(langRu, darkMode);

    const handleChange = (value) => {
        setLang(value)
    }

    const handleCheck = (checked) => {
        setDarkMode(checked)
    } 
  return (
    <>
        <input type="checkbox" id='settings' />
        <div className={css.settings}>
            <label htmlFor="settings" className={css.label}>
                <i class="fa-solid fa-gear"></i>
            </label>
            <div className={css.main}>
                <h1>Theme</h1>
                <Switch onChange={handleCheck} />
                <h1>Langs</h1>
                <Select defaultValue={'uz'} onChange={handleChange} options={[
                    { value: 'uz', label: 'Uz' },
                    { value: 'en', label: 'En' },
                ]} />
            </div>
        </div>
    </>
  )
}

export default Settings