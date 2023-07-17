// import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './tracktext.module.css'
import { themes, useThemeContext } from '../wrapper/theme'


function Tracktext(props) {  
  const { theme } = useThemeContext()
  const {title,onClick} = props
  
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
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton width={200} count={1} />
        ) : (
          <a
            className={styles.track__title_link}
            onClick={onClick}
            href="http://"
          >
            {title}
            <span className={styles.track__title_span} />
          </a>
        )}
      </SkeletonTheme>
    </div>
  )
}
export default Tracktext
