import { useRecoilValue } from 'recoil'
import { ChevronDown } from 'lucide-react'
import HomeHeader from '../components/HomeHeader'
import ToolItemPure from '../components/ToolItemPure'
import style from '../assets/styles/page/index.module.css'
import { avaliableListState } from '../stores/install-store'
import InstallList from '../components/InstallList'

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
