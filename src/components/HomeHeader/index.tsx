import React from 'react'
import { Settings } from 'lucide-react'
import style from './style.module.css'

const HomeHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.brand}>
          <img
            className={style.logo}
            src='https://resources.jetbrains.com/storage/products/company/brand/logos/Toolbox_icon.svg'
            alt=''
          />
          <div className={style.name}>
            <span>JetBrains</span>
            Toolbox
          </div>
        </div>

        <div className={style.setting}>
          <Settings size={20} />
        </div>
      </header>

      {children}
    </div>
  )
}

export default HomeHeader
