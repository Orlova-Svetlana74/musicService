// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackplayauthor.module.css'
import { useTrack } from '../../hooks/use-track.jsx'

function   Trackplayauthor() { 
  const { name } = useTrack()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.track_play_author}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={1} />
        ) : (
          <a className={styles.track_play_author_link} href="http://">
            {name}
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}

export default Trackplayauthor
