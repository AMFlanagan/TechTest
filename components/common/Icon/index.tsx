import React from 'react'

import Icons, { IconName } from '../../../constants/icons'

import styles from './index.module.scss'

interface IProps {
  iconName: IconName
}

const Icon: React.FC<IProps> = (props: IProps) => {
  return <div className={styles.icon}>{Icons[props.iconName]}</div>
}

Icon.displayName = 'Icon'

export default Icon
