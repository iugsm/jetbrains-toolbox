import React from 'react'
import { MoreVertical } from 'lucide-react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { Tool } from '~/assets/data'
import { publish } from '~/events'
import Dropdown from '../Dropdown'

const ToolItemPure: React.FC<{ tool: Tool }> = ({ tool }) => {
  const handleInstall = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    publish('onInstall', { name: tool.name, version: tool.versions[0].code })
  }

  return (
    <section
      style={{ position: 'relative' }}
      className={style.tool_wrap + ' full-bleed'}
    >
      <a
        href={`/${tool.name}`}
        style={{
          position: 'absolute',
          inset: '0',
        }}
      ></a>
      <img src={tool.logo} className={style.logo} alt='' />

      <div className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{tool.name}</h3>

          <button className={style.install} onClick={handleInstall}>
            安装
          </button>

          <div className={style.more} style={{ zIndex: '9' }}>
            <MoreVertical size={14} />
          </div>
        </div>
        <div className={style.status}>
          <p className={style.description}>{tool.description}</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ToolItemPure)