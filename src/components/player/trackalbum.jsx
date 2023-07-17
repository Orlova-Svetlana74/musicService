// import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSetLikeMutation, useSetUnlikeMutation } from '../../store/api/musicApi';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackalbum.module.css'
import {themes, useThemeContext } from '../wrapper/theme'
// import { setTrackPlay } from '../../store/slices/setTracks'
// import { setUser } from '../../store/slices/userSlice'

function Trackalbum(props) {

  const {album,onClick} = props  

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
    <div className={themeClass}>
    <div
      className={styles.track__album}     
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={70} count={1} />
        ) : (
          <a className={styles.track__album_link} onClick={onClick} href="http://">{album}
           
          </a>
        )}
      </SkeletonTheme>
    </div>
    </div>
  )
}
export default Trackalbum