import { useState, useEffect, useRef } from 'react'
import { useAudio } from 'react-use'
import { useDispatch } from 'react-redux'
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
  useGetAllTracksQuery,
} from '../../store/api/musicApi'
import sprite from '../../img/icon/sprite.svg'
import { setTrackPlay } from '../../store/slices/userSlice'
import Trackplayimage from './trackplayimage'
import Trackplayauthor from './trackplayauthor'
import Trackplayalbum from './trackplayalbum'
import styles from './bar.module.css'
// import { useTrack } from '../../hooks/use-track.jsx'
// import {useGetAllTracksQuery} from "../../store/api/musicApi";

export function Bar({ id }) {
  const { data = [] } = useGetAllTracksQuery()
  const tracks = data

  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()

  const dispatch = useDispatch()

  const [isShuffle, setShuffle] = useState(false)
  const [isRepeat, setRepeat] = useState(false)
  const [isFavourite, setFavourite] = useState(false)

  let index = tracks?.findIndex((track) => track.id === id)
  if (index < 0) {
    index = 0
  }

  useEffect(() => {
    dispatch(setTrackPlay({ id: tracks[index === -1 ? 0 : index].id }))

    console.log(tracks[index].id)
  }, [id])

  const playingTrack = tracks[index]
  const handleNext = () => {
    if (isShuffle) {
      index = Math.floor(Math.random() * tracks.length)
    } else index += 1

    index = index > tracks.length - 1 ? 0 : tracks[index].id

    dispatch(
      setTrackPlay({
        id: index,
      })
    )
  }
  const [audio, state, controls] = useAudio({
    src: playingTrack?.track_file,
    autoPlay: true,
    onEnded: () => {
      if (!isRepeat) {
        handleNext()
      } else {
        controls.seek(0)
        controls.play()
      }
    },
  })

  // const [isPlaying] = useState(false)
  // const [position, setPosition] = useState()
  // const audioRef = useRef(null)
  // const clickRef = useRef()
  // const { id } = useTrack()

  console.log(playingTrack)

  const handlePrev = () => {
    if (isShuffle) {
      index = Math.floor(Math.random() * tracks.length)
    } else index -= 1

    index = index < 0 ? 0 : tracks[index].id
    dispatch(
      setTrackPlay({
        id: index,
      })
    )
  }

  const handleValueChange = (event) => {
    controls.volume(Number(event.target.value) / 10)
  }

  useEffect(() => {
    controls.volume(0.5)
  }, [])

  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike(id)
      setFavourite(false)
    } else {
      setLike(id)
      setFavourite(true)
    }
  }

  const progressRef = useRef(null)

  useEffect(() => {
    progressRef.current.value = state.time || 0
    progressRef.current.style.setProperty(
      '--seek-before-width',
      `${(state.time / state.duration) * 100}%`
    )
  }, [state.time, state.duration])

  const handleProgressChange = () => {
    controls.seek(Number(progressRef.current.value))
  }

  // useEffect(() => {
  //   const { duration } = state
  //   const ct = state.time

  //   setPosition({
  //     ...position,
  //     progress: (ct / duration) * 100,
  //     length: duration,
  //   })
  // }, [state])

  // const icon = isPlaying ? 'pause' : 'play'
  // eslint-disable-next-line no-console
  // console.log('🚀 ~ file: Bar.jsx:18 ~ Bar ~ icon:', icon)

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.play()
  //   } else {
  //     audioRef.current.pause()
  //   }
  // }, [isPlaying])

  // const handleStart = () => {
  //   audioRef.current.play()
  //   setIsPlaying(true)
  // }

  // const handleStop = () => {
  //   audioRef.current.pause()
  //   setIsPlaying(false)
  // }

  // const togglePlay = isPlaying ? handleStop : handleStart

  // const onPlaying = () => {
  //   const { duration } = audioRef.current
  //   const ct = audioRef.current.currentTime
  //   setPosition({
  //     ...position,
  //     progress: (ct / duration) * 100,
  //     length: duration,
  //   })
  // }

  // const checkWidth = (e) => {
  //   if (clickRef.current) {
  //     const width = clickRef.current.clientWidth
  //     const offset = e.nativeEvent.offsetX
  //     const divprogress = (offset / width) * 100
  //     controls.seek(state.duration * (divprogress / 100))
  //   }
  // }
  return (
    <div className={styles.bar}>
      {audio}
      <div className={styles.barPlayerProgress}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        {/* The <div> element has a child <button> element that allows keyboard interaction */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={styles.navigationWrapper}>
          <div
            className={styles.seekBar}
            // style={{
            //   width: position ? `${position.progress}+'%'` : '',
            // }}
          />
        </div>
      </div>

      <div className={styles.bar_content}>
        <input
          type="range"
          step="0.01"
          className={styles.progress}
          min="0"
          max={state.duration}
          ref={progressRef}
          onChange={handleProgressChange}
        />
        <div className={styles.bar_player_progress} />
        <div className={styles.bar_player_block}>
          <div className={styles.bar_player}>
            <div className={styles.player_controls}>
              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={styles.player_btn_prev} onClick={handlePrev}>
                <svg className={styles.player_btn_prev_svg} alt="prev">
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </svg>
              </div>

              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={styles.player_btn_play}>
                {state.playing ? (
                  <svg
                    className={styles.stopsvg}
                    alt="play"
                    onClick={controls.pause}
                  >
                    <use xlinkHref={`${sprite}#icon-pause`} />
                  </svg>
                ) : (
                  <svg
                    className={styles.playsvg}
                    alt="play"
                    onClick={controls.play}
                  >
                    <use xlinkHref={`${sprite}#icon-play`} />
                  </svg>
                )}
              </div>
              <div className={styles.player_btn_next}>
                <svg
                  className={styles.player_btn_next_svg}
                  onClick={handleNext}
                  alt="next"
                >
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </div>
              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={styles.player_btn_repeat}
                onClick={() => setRepeat(!isRepeat)}
              >
                {isRepeat ? (
                  <svg className={styles.repeatsvg} alt="repeat">
                    <use xlinkHref={`${sprite}#icon-repeat-active`} />
                  </svg>
                ) : (
                  <svg className={styles.repeatsvg} alt="repeat">
                    <use xlinkHref={`${sprite}#icon-repeat`} />
                  </svg>
                )}
              </div>
              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={styles.player_btn_shuffle}
                onClick={() => setShuffle(!isShuffle)}
              >
                {isShuffle ? (
                  <svg className={styles.shufflesvg} alt="shuffle">
                    <use xlinkHref={`${sprite}#icon-shuffle-active`} />
                  </svg>
                ) : (
                  <svg className={styles.shufflesvg} alt="shuffle">
                    <use xlinkHref={`${sprite}#icon-shuffle`} />
                  </svg>
                )}
              </div>
            </div>

            <div className={styles.player_track_play}>
              <div className={styles.track_play_contain}>
                <Trackplayimage />
                <Trackplayauthor />
                <Trackplayalbum />
              </div>
              {
              playingTrack ? (
                <div className={styles.likedis}>
                  {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <div className={`${styles.like} ${styles.btnicon}`}
                    onClick={handleSetLike}
                  >
                    {
                    isFavourite ? (
                      <svg className={styles.likesvg} alt="like">
                        <use xlinkHref={`${sprite}#icon-like`} />
                      </svg>
                    ) : (
                      <svg className={styles.dislikesvg} alt="dislike">
                        <use xlinkHref={`${sprite}#icon-dislike`} />
                      </svg>
                    )}
                  </div>
                </div>
              ) : (
                ''
              )
              }
              <div className={styles.track_play_like_dis} />
            </div>
          </div>
          <div className={styles.bar_volume_block}>
            <div className={styles.volume_content}>
              <div className={styles.volume_image}>
                <svg
                  className={styles.volume_svg}
                  onClick={state.muted ? controls.unmute : controls.mute}
                  alt="volume"
                >
                  <use
                    xlinkHref={`${sprite}#icon-volume`}
                    stroke={state.muted ? 'red' : ''}
                  />
                </svg>
              </div>
              <div className={styles.volume_progress}>
                <input
                  className={styles.volume__progress_line}
                  type="range"
                  name="range"
                  min="0"
                  max="10"
                  defaultValue={state.volume * 10}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bar