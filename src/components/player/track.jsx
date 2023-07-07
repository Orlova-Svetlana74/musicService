// import React from 'react'
/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
import { setCurrentTrack } from '../../store/slices/setTracks'

function Track(props) {
  const { id: trackID, author, time, title, album, stared_user } = props

  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  const dispatch = useDispatch()
  const userId = Number(localStorage.getItem('user'))
  const [isFavourite, setFavourite] = useState(false)

  console.log(stared_user)

  useEffect(() => {
    setFavourite(stared_user.some((user) => user.id === userId))
  }, [props])

  const handleFavorite = () => {
    if (isFavourite) {
      setUnlike(trackID)
      // setFavourite(false)
    } else {
      setLike(trackID)
      // setFavourite(true)
    }
  }
  // const dispatch = useDispatch(setTrackPlay)
  // const selector = useSelector(setUser)
  // const userId = selector.payload.user.id
  // const { id, staredUser } = props
  // useEffect(() => {
  //   setFavourite(staredUser.some((user) => user.id === userId))
  // }, [props])

  // const handleSetLike = () => {
  //   if (isFavourite) {
  //     setUnlike(id)
  //     setFavourite(false)
  //   } else {
  //     setLike(id)
  //     setFavourite(true)
  //   }
  // }
  //

  const handleOnRowClick = () => {
    dispatch(
      setCurrentTrack({
        trackID,
        author,
        time,
        title,
        album,
        stared_user,
      })
    )
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
      <div className={styles.playlist__track} onClick={handleOnRowClick}>
        <div className={styles.track__title}>
          <Trackimage onClick={() => handleOnRowClick()} />
          <Tracktext title={title} onClick={() => handleOnRowClick()} />
        </div>
        <Trackauthor author={author} onClick={() => handleOnRowClick()} />
        <Trackalbum album={album} onClick={() => handleOnRowClick()} />
        <svg
          className={styles.track__time_svg}
          alt="time"
          onClick={handleFavorite}
        >
          <use
            xlinkHref={`${sprite}#icon-${isFavourite ? 'blueviolet' : 'gray'}`}
          />
        </svg>
        <Tracktime time={time} />
      </div>
    </div>
  )
}
export default Track