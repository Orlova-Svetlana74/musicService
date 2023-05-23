// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './tracktime.module.css'

function Tracktime() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.track__time}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={50} count={1} />
        ) : (
          <span className={styles.track__time_text}>2:22</span>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Tracktime
