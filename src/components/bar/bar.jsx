import { useState, useRef, useEffect } from 'react'
import sprite from '../../img/icon/sprite.svg'
import Trackplayimage from './trackplayimage'
import Trackplayauthor from './trackplayauthor'
import Trackplayalbum from './trackplayalbum'
import styles from './bar.module.css'

export function Bar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState()
  const audioRef = useRef(null)
  const clickRef = useRef()

  const src = '/BobbyMarleniDropin.mp3'

  const icon = isPlaying ? 'pause' : 'play'
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: Bar.jsx:18 ~ Bar ~ icon:', icon)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  const onPlaying = () => {
    const { duration } = audioRef.current
    const ct = audioRef.current.currentTime
    setPosition({
      ...position,
      progress: (ct / duration) * 100,
      length: duration,
    })
  }

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const divprogress = (offset / width) * 100
    audioRef.current.currentTime = (divprogress / 100) * position.length
  }
  return (
    <div className={styles.bar}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} onTimeUpdate={onPlaying} />
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
              width: position ? `${position.progress}%` : '',
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
                <svg className={styles.player_btn_prev_svg} alt="prev">
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </svg>
              </div>

              {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              {/* The <div> element has a child <button> element that allows keyboard interaction */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={styles.player_btn_play} onClick={togglePlay}>
                <svg className={styles.player_btn_play_svg} alt="stop">
                  <use xlinkHref={`${sprite}#icon-${icon}`} />
                </svg>
                {/* <svg className={styles.player_btn_play_svg} alt="play">
                  <use xlinkHref={`${sprite}#icon-play`} />
                </svg>
                <svg className={styles.player_btn_play_svg} alt="play">
                  <use xlinkHref={`${sprite}#icon-pause`} />
                </svg> */}
              </div>
              <div className={styles.player_btn_next}>
                <svg className={styles.player_btn_next_svg} alt="next">
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </div>
              <div className={styles.player_btn_repeat}>
                <svg className={styles.player_btn_repeat_svg} alt="repeat">
                  <use xlinkHref={`${sprite}#icon-repeat`} />
                </svg>
              </div>
              <div className={styles.player_btn_shuffle}>
                <svg className={styles.player_btn_shuffle_svg} alt="shuffle">
                  <use xlinkHref={`${sprite}#icon-shuffle`} />
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
                <svg className={styles.volume_svg} alt="volume">
                  <use xlinkHref={`${sprite}#icon-volume`} />
                </svg>
              </div>
              <div className={styles.volume_progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bar
