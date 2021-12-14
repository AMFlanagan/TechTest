import React from 'react'

import styles from './index.module.scss'

interface IProps {
  children?: JSX.Element | JSX.Element[]
}

const MainContainer: React.FC<IProps> = (props: IProps) => {
  return <div className={styles.mainContainer}>{props.children}</div>
}

MainContainer.displayName = 'MainContainer'

export default MainContainer
