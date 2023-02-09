import React from 'react'
import styles from './Avatar.module.css'

interface AvatarProps{
  src: string;
}

export default function Avatar(props:AvatarProps) {
  return (
     <img className={styles.avatar} src={props.src} />
  )
}
