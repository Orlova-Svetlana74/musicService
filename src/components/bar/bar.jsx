import Trackplayimage from './trackplayimage'
import Trackplayauthor from './trackplayauthor'
import Trackplayalbum from './trackplayalbum'
import styles from './bar.module.css'

function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar_content}>
        <div className={styles.bar_player_progress} />
        <div className={styles.bar_player_block}>
          <div className={styles.bar_player}>
            <div className={styles.player_controls}>
              <div className={styles.player_btn_prev}>
                <svg className={styles.player_btn_prev_svg} alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div className={styles.player_btn_play}>
                <svg className={styles.player_btn_play_svg} alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </svg>
              </div>
              <div className={styles.player_btn_next}>
                <svg className={styles.player_btn_next_svg} alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div className={styles.player_btn_repeat}>
                <svg className={styles.player_btn_repeat_svg} alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div className={styles.player_btn_shuffle}>
                <svg className={styles.player_btn_shuffle_svg} alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
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
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className={styles.track_play_dislike}>
                  <svg className={styles.track_play_dislike_svg} alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bar_volume_block}>
            <div className={styles.volume_content}>
              <div className={styles.volume_image}>
                <svg className={styles.volume_svg} alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={styles.volume_progress}>
                <input
                  className={styles.volume_progress_line}
                  type="range"
                  name="range"
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
