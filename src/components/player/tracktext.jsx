// import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './tracktext.module.css'
// import { themes, useThemeContext } from '../wrapper/theme'



function Tracktext(props) {  
  
  const {title,onClick} = props
  // const { theme } = useThemeContext()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, []) 
 
  return (
    <div>
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
