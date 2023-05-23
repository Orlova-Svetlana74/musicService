// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackalbum.module.css'

function Trackalbum() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.track__album}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={70} count={1} />
        ) : (
          <a className={styles.track__album_link} href="http://">
            Elektro
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Trackalbum
