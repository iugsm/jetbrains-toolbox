import React, { useMemo } from 'react'
import { MoreVertical } from 'lucide-react'
import style from '../assets/styles/component/ToolItem.module.css'
import Progress from './Progress'
import { useRecoilValue } from 'recoil'
import { progressState } from '../stores/progress-store'
import { InstallTool } from './InstallList'

const ToolItem: React.FC<{ tool: InstallTool }> = ({ tool }) => {
  const progressMap = useRecoilValue(progressState)

  const progressKey = `${tool.name}${tool.version}`

  const percent = useMemo(() => {
    const res = progressMap.get(progressKey)
    return res
  }, [progressMap])

  return (
    <section className={style.tool_wrap + ' full-bleed'}>
      <img src={tool.logo} className={style.logo} alt='' />

      <div className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{tool.name}</h3>

          <div className={style.more}>
            <MoreVertical size={14} />
          </div>
        </div>
        <div className={style.status}>
          {tool.status === 'installed' && (
            <p className={style.description}>{tool.description}</p>
          )}

          {percent !== undefined &&
            (tool.status === 'downloading' || tool.status === 'installing') && (
              <>
                <p className={style.status_text}>
                  {tool.status === 'downloading' && '下载中...'}
                  {tool.status === 'installing' && '正在安装...'}
                </p>
                <Progress percent={percent} />
              </>
            )}
        </div>
      </div>
    </section>
  )
}

export default ToolItem
