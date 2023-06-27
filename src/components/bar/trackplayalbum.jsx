// import sprite from './icon/sprite.svg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackplayalbum.module.css'
import { useTrack } from '../../hooks/use-track.jsx'

function Trackplayalbum() {
  const { author } = useTrack()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.track_play_album}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={1} />
        ) : (
          <a className={styles.track_play_album_link} href="http://">
            {author}
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Trackplayalbum
