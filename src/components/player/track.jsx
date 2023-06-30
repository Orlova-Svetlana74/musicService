// import React from 'react'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setUser } from '../../store/slices/userSlice'
import Trackimage from './trackimage'
import Tracktext from './tracktext'
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../../store/api/musicApi'
import Trackauthor from './trackauthor'
import sprite from '../../img/icon/sprite.svg'
import Trackalbum from './trackalbum'
import Tracktime from './tracktime'
import styles from './track.module.css'
import { useThemeContext } from '../wrapper/theme'
// import { setTrackPlay } from '../../store/slices/setTracks'

function Track({track}) {
  const {author, time, title, album} = track
  const [isFavourite, setFavourite] = useState('')
  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  // const dispatch = useDispatch(setTrackPlay)
  // const selector = useSelector(setUser)
  // const userId = selector.payload.user.id
  // const { id, staredUser } = props
  // useEffect(() => {
  //   setFavourite(staredUser.some((user) => user.id === userId))
  // }, [props])

  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike(track.id)
      setFavourite(false)
    } else {
      setLike(track.id)
      setFavourite(true)
    }
  }

  const { theme } = useThemeContext()

  // const handleSetTrack = (e) => {    
  //   e.preventDefault
  //   dispatch(
  //     setTrackPlay({
  //       id,
  //       isFavourite,
  //     })
  //   )
  // }
  return (
    <div
      className={styles.playlist__item}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        {/* The <div> element has a child <button> element that allows keyboard interaction */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={styles.playlist__track} >
        <div className={styles.track__title}>
          <Trackimage />
          <Tracktext title={title} />
        </div>
        <Trackauthor author={author} />
        <Trackalbum album={album}/>
        <svg
          className={styles.track__time_svg}
          alt="time"
          onClick={handleSetLike}
        >
          <use
            xlinkHref={`${sprite}#icon-${isFavourite ? 'like' : 'dislike'}`}
          />
        </svg>
        <Tracktime time={time}/>
      </div>
    </div>
  )
}
export default Track