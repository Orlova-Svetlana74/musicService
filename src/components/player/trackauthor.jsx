// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackauthor.module.css'
import {themes, useThemeContext } from '../wrapper/theme'

function Trackauthor(props) {
  const {author} = props
  const { theme } = useThemeContext()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark
  return (
    <div
      className={themeClass}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={200} count={1} />
        ) : (
          <a className={styles.track__author_link} href="http://">{author}
            
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Trackauthor
