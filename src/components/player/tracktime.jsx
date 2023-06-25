// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './tracktime.module.css'
import { useThemeContext } from '../wrapper/theme'

function Tracktime(props) {
  const { time} = props
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
      className={styles.track__time}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={50} count={1} />
        ) : (
          <span className={styles.track__time_text}>
            {(time / 60).toFixed(2)}
            {props.time}
          </span>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Tracktime
