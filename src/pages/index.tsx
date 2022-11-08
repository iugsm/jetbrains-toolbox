import { useRecoilValue } from 'recoil'
import { ChevronDown } from 'lucide-react'
import ToolItemPure from '~/components/ToolItem/ToolItemPure'
import HomeHeader from '~/components/HomeHeader'
import InstallList from '~/components/InstallList'
import style from '~/assets/styles/page/index.module.css'
import { avaliableListState } from '~/stores/install-store'

export default function Home() {
  const avaliable = useRecoilValue(avaliableListState)

  return (
    <>
      <HomeHeader />

      <div className='grid-layout' style={{ fontSize: '13px' }}>
        <InstallList />

        <section className={style.collapse + ' full-bleed'}>
          <ChevronDown size={14} />
          <h2>可用</h2>
        </section>

        {avaliable.map(item => (
          <ToolItemPure key={item.name} tool={item} />
        ))}
      </div>
    </>
  )
}
