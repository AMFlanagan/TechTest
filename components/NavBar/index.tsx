import React from 'react'
import Link from 'next/link'
// import formatText from '../utils/formatText'

import styles from './index.module.scss'
import { useRouter } from 'next/router'

interface IProps {
  eventKeys?: string[]
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  const router = useRouter()

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navBar}>
        <li
          className={`${styles.navItem} ${
            router.pathname === '/' ? styles.selected : ''
          }`}
        >
          <Link href="/">
            <a className={styles.label}>Home</a>
          </Link>
        </li>
        {/* {props.eventKeys?.map((eventKey: string, i: number) => {
        return (
          <li
            key={i}
            className={`${styles.navItem} ${
              router.pathname === `${eventKey}` ? styles.selected : ''
            }`}
          >
            <Link href={`/${eventKey}`}>
              <a className={styles.label}>{formatText(eventKey)}</a>
            </Link>
          </li>
        )
      })} */}
      </ul>
    </div>
  )
}

NavBar.displayName = 'NavBar'

export default NavBar
