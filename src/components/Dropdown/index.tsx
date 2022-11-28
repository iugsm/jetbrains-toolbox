import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { createPopper, Instance } from '@popperjs/core'
import style from './style.module.css'

type Props = {
  children?: React.ReactElement
  menuList: React.ReactElement
}

const Dropdown: React.FC<Props> = ({ children, menuList }) => {
  if (!children) return <></>

  const triggerEl = useRef<HTMLElement>()
  const menuListRef = useRef<HTMLElement>()
  const [open, setOpen] = useState(false)
  const instance = useRef<Instance>()

  const handleOpen = (e: MouseEvent) => {
    console.log(e)
    if (e.target === triggerEl.current) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  useEffect(() => {
    const body = document.body
    if (open) {
      body.style.cssText += 'overflow: hidden;'
    } else {
      body.style.cssText = body.style.cssText.replaceAll(
        'overflow: hidden;',
        ''
      )
    }

    if (triggerEl.current && menuListRef.current) {
      instance.current = createPopper(triggerEl.current, menuListRef.current, {
        placement: 'bottom-start',
      })
    }

    return () => instance.current && instance.current.destroy()
  }, [open])

  useEffect(() => {
    document.addEventListener('click', handleOpen)
    return () => document.removeEventListener('click', handleOpen)
  }, [])

  return (
    <>
      {React.cloneElement(children, { ref: triggerEl })}
      {ReactDOM.createPortal(
        <>
          {open && React.cloneElement(menuList, { ref: menuListRef })}
          {open && <div className={style.overlay} />}
        </>,
        document.body
      )}
    </>
  )
}

export default Dropdown
