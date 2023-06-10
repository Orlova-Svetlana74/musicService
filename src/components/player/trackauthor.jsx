// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackauthor.module.css'
import { useThemeContext } from '../wrapper/theme'

function Trackauthor() {
  const { theme } = useThemeContext()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div
      className={styles.track__author}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={200} count={1} />
        ) : (
          <a className={styles.track__author_link} href="http://">
            Dynoro, Outwork, Mr. Gee
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Trackauthor
