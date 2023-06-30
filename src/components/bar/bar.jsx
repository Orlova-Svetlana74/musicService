import { useState, useEffect, useRef } from 'react'
import { useAudio } from 'react-use'
import { useDispatch } from 'react-redux'
import sprite from '../../img/icon/sprite.svg'
import { setCurrentTrack } from '../../store/slices/setTracks'
import Trackplayimage from './trackplayimage'
import Trackplayauthor from './trackplayauthor'
import Trackplayalbum from './trackplayalbum'
import styles from './bar.module.css'
import { useTrack } from '../../hooks/use-track.jsx'

export function Bar(props) {
  const [isShuffle, setShuffle] = useState(false)
  const dispatch = useDispatch()
  const [isRepeat, setRepeat] = useState(false)
  // const [isPlaying] = useState(false)
  const [position, setPosition] = useState()
  // const audioRef = useRef(null)
  const clickRef = useRef()
  const { id } = useTrack()
  const { tracks } = props

  let index = tracks.findIndex((track) => track.id === id)
  if (index < 0) {
    index = 0
  }
  console.log(tracks)

  const playingTrack = tracks[index]

  console.log(playingTrack)

  

  const handleNext = () => {
    if (isShuffle) {
      index = Math.floor(Math.random() * tracks.length)
    } else index += 1

    index = index > tracks.length - 1 ? 0 : tracks[index]

    dispatch(
      setCurrentTrack({
        track: index,
      }),
    );
  }
  const [audio, state, controls] = useAudio({
    src: playingTrack.track_file,
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

  const handlePrev = () => {
    if (isShuffle) {
      index = Math.floor(Math.random() * tracks.length)
    } else index -= 1

    index = index < 0 ? 0 : tracks[index]
    dispatch(
      setCurrentTrack({
        track: index,
      })
    )
  }

  useEffect(() => {
    const { duration } = state
    const ct = state.time

    setPosition({
      ...position,
      progress: (ct / duration) * 100,
      length: duration,
    })
  }, [state])

  const handleValueChange = (event) => {
    controls.volume(Number(event.target.value) / 10)
  }

  useEffect(() => {
    controls.volume(0.5)
  }, [])

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

  const checkWidth = (e) => {
    if (clickRef.current) {
      const width = clickRef.current.clientWidth
      const offset = e.nativeEvent.offsetX
      const divprogress = (offset / width) * 100
      controls.seek(state.duration * (divprogress / 100))
    }
  }
  return (
    <div className={styles.bar}>
      <div>{audio}</div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio ref={audioRef} src={src} onTimeUpdate={onPlaying} /> */}
      <div className={styles.barPlayerProgress}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        {/* The <div> element has a child <button> element that allows keyboard interaction */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={styles.navigationWrapper}
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className={styles.seekBar}
            style={{
              width: position ? `${position.progress}+'%'` : '',
            }}
          />
        </div>
      </div>

      <div className={styles.bar_content}>
        <div className={styles.bar_player_progress} />
        <div className={styles.bar_player_block}>
          <div className={styles.bar_player}>
            <div className={styles.player_controls}>
              <div className={styles.player_btn_prev}>
                <svg
                  className={styles.player_btn_prev_svg}
                  onClick={() => handlePrev()}
                  alt="prev"
                >
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </svg>
              </div>

              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div
                className={styles.player_btn_play}
                // onClick={state.playing ? controls.pause : controls.play}
              >
                <svg
                  className={styles.player_btn_play_svg}
                  onClick={state.playing ? controls.pause : controls.play}
                  alt="stop"
                >
                  {/* <use xlinkHref={`${sprite}#icon-${icon}`} /> */}
                </svg>
                {/* <svg className={styles.player_btn_play_svg} alt="play">
                  <use xlinkHref={`${sprite}#icon-play`} />
                </svg>
                <svg className={styles.player_btn_play_svg} alt="play">
                  <use xlinkHref={`${sprite}#icon-pause`} />
                </svg> */}
              </div>
              <div className={styles.player_btn_next}>
                <svg
                  className={styles.player_btn_next_svg}
                  onClick={() => handleNext()}
                  alt="next"
                >
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </div>
              <div className={styles.player_btn_repeat}>
                <svg
                  className={styles.player_btn_repeat_svg}
                  onClick={() => setRepeat(!isRepeat)}
                  alt="repeat"
                >
                  <use
                    xlinkHref={`${sprite}#icon-repeat`}
                    stroke={isRepeat ? 'blueviolet' : ''}
                  />
                </svg>
              </div>
              <div className={styles.player_btn_shuffle}>
                <svg
                  className={styles.player_btn_shuffle_svg}
                  onClick={() => setShuffle(!isShuffle)}
                  alt="shuffle"
                >
                  <use
                    xlinkHref={`${sprite}#icon-shuffle`}
                    stroke={isShuffle ? 'blueviolet' : ''}
                  />
                </svg>
              </div>
            </div>

            <div className={styles.player_track_play}>
              <div className={styles.track_play_contain}>
                <Trackplayimage />
                <Trackplayauthor />
                <Trackplayalbum />
              </div>

              <div className={styles.track_play_like_dis}>
                <div className={styles.track_play_like}>
                  <svg className={styles.track_play_like_svg} alt="like">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </svg>
                </div>
                <div className={styles.track_play_dislike}>
                  <svg className={styles.track_play_dislike_svg} alt="dislike">
                    <use xlinkHref={`${sprite}#icon-dislike`} />
                  </svg>
                </div>
              </div>
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
