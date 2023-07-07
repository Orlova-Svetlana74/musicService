// import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSetLikeMutation, useSetUnlikeMutation } from '../../store/api/musicApi';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trackalbum.module.css'
// import { setTrackPlay } from '../../store/slices/setTracks'
// import { setUser } from '../../store/slices/userSlice'

function Trackalbum(props) {

  const {album,onClick} = props

  // const dispatch = useDispatch(setTrackPlay)
  // const selector = useSelector(setUser)
  // const [setLike] = useSetLikeMutation()
  // const [setUnlike] = useSetUnlikeMutation()
  // const userId = selector.payload.user.id

//   useEffect(() => {
//     setFavourite(staredUser.some((user) => user.id === userId))
// }, [props])

// const [isFavourite, setFavourite] = useState('')

// const handleSetTrack = (e) => {
//   e.preventDefault;
//   dispatch(
//       setTrackPlay({
//           id,
//           isFavourite
//       })
//   );
// };

  // const { theme } = useThemeContext()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
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
  )
}
export default Trackalbum