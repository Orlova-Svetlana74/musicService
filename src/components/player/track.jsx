// import React from 'react'
/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setTrackPlay, setUser } from '../../store/slices/userSlice'
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
// import { setCurrentTrackID } from '../../store/slices/userSlice'

function Track(props) {
  const { id, author, time, title, album, stared_user } = props

  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  // const dispatch = useDispatch()
  // const userId = Number(localStorage.getItem('user'))
  const [isFavourite, setFavourite] = useState('')
  const selector = useSelector(setUser)
  const userId = selector.payload.user.id
  console.log(stared_user)
  console.log(album)

  useEffect(() => {
    if (stared_user) {
     setFavourite(stared_user.some((user) => {console.log (user.id, userId) 
      return user.id === userId}))
    }    
  },[stared_user])

  // const handleFavorite = () => {
  //   if (isFavourite) {
  //     setUnlike(trackID)
      // setFavourite(false)
  //   } else {
  //     setLike(trackID)
  //     // setFavourite(true)
  //   }
  // }
  const dispatch = useDispatch(setTrackPlay)
  // const selector = useSelector(setUser)
  // const userId = selector.payload.user.id
  // const { id, staredUser } = props
  // useEffect(() => {
  //   setFavourite(staredUser.some((user) => user.id === userId))
  // }, [props])

  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike(props.id)
      setFavourite(false)
    } else {
      setLike(props.id)
      setFavourite(true)
    }
  }
  

  const handleSetTrack  = () => {
    // e.preventDefault;    
    dispatch(
      setTrackPlay ({
        id,
        isFavourite
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
      <div className={styles.playlist__track} onClick={handleSetTrack }>
        <div className={styles.track__title}>
          <Trackimage onClick={() => handleSetTrack ()} />
          <Tracktext title={title} onClick={() => handleSetTrack ()} />
        </div>
        <Trackauthor author={author} onClick={() => handleSetTrack ()} />
        <Trackalbum album={album} onClick={() => handleSetTrack ()} />
        <svg
          className={styles.track__time_svg}
          alt="time"
          onClick={handleSetLike}
        >
          <use
            xlinkHref={`${sprite}#icon-${isFavourite ? 'like' : 'dislike'}`}
          />
        </svg>
        <Tracktime time={time} />
      </div>
    </div>
  )
}
export default Track