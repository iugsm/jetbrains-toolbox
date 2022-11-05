import React from 'react'
import style from '../assets/styles/component/ListView.module.css'

const ListView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={style.listview}>{children}</div>
}

export default ListView
