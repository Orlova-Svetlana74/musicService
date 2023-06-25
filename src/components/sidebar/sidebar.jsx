// import React from 'react'

import { useNavigate } from 'react-router-dom'
import PlayImg01 from './playlist01.png'
import PlayImg02 from './playlist02.png'
import PlayImg03 from './playlist03.png'
import styles from './sidebar.module.css'

function Sidebar() {
  const navigate = useNavigate()

  const handleClick = (id) => {
    fetch(`https://painassasin.online/catalog/selection/${id}`).then(
      (response) => response.json()
    )
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error))
    // console.log(id)

    navigate(`/selection/playlist/${id}`)

    // navigate(`./playlistDay`)
  }
  return (
    <div className={styles.sidebar__block}>
      <div className={styles.sidebar__item}>
        {/* <Link className={styles.link} to="/playlistDay" /> */}
        {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        {/* The <div> element has a child <button> element that allows keyboard interaction */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <a className={styles.link} href="#">
          <img
            onClick={() => handleClick(1)}
            className={styles.img}
            src={PlayImg01}
            alt="day's playlist"
          />
        </a>
      </div>
      <div className={styles.sidebar__item}>
        <a className={styles.link} href="#">
          <img
            onClick={() => handleClick(2)}
            className={styles.img}
            src={PlayImg02}
            alt="100 dance hit"
          />
        </a>
      </div>
      <div className={styles.sidebar__item}>
        <a className={styles.link} href="#">
          <img
            onClick={() => handleClick(3)}
            className={styles.img}
            src={PlayImg03}
            alt="indi-energy"
          />
        </a>
      </div>
    </div>
  )
}
export default Sidebar