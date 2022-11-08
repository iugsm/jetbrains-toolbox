import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { installMapState, InstallStatus } from '~/stores/install-store'
import { sourceData, Tool } from '~/assets/data'
import ToolItem from '../ToolItem/ToolItem'
import style from './style.module.css'

export type InstallTool = Tool & {
  version: string
  key: string
  status: InstallStatus
}

const InstallList: React.FC = () => {
  const installMap = useRecoilValue(installMapState)

  const list = useMemo(() => {
    let toolList: InstallTool[] = []
    let allToolMap = new Map<string, Tool>()

    sourceData.forEach(item => allToolMap.set(item.name, item))

    for (const [key, value] of installMap) {
      const temp: InstallTool = {
        ...allToolMap.get(key.name)!,
        key: key.name + key.version,
        version: key.version,
        status: value.status,
      }
      toolList.push(temp)
    }

    return toolList
  }, [installMap])

  if (list.length > 0) {
    return (
      <>
        <h2 className={style.title}>已安装</h2>

        {list.map(item => (
          <ToolItem tool={item} key={item.key} />
        ))}
      </>
    )
  }

  return <></>
}

export default InstallList
