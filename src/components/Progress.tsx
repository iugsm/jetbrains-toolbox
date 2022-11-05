import React from 'react'
import style from '../assets/styles/component/Progress.module.css'

const Progress: React.FC<{ percent: number }> = ({ percent }) => {
  return (
    <div className={style.wrap}>
      <div
        style={{
          width: percent + '%',
        }}
        className={style.progress}
      ></div>
    </div>
  )
}

export default Progress
