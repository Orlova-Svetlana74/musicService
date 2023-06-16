// import React from 'react'
import { useState } from 'react'
// import classNames from 'classnames'
import Filtrtitle from './filtrtitle'
import styles from './filtr.module.css'
import {themes, useThemeContext } from '../wrapper/theme'


function Filtr() {
  const { theme } = useThemeContext()
  const [visibleFilter, setVisibleFilter] = useState(null)
  const isLight = theme === themes.light  
  const themeClass = isLight ? styles.light : styles.dark
  // const authorFilterClass = classNames({
	// 	[styles['filter-button']]: true,
	// 	[styles['filter-button-active']]: visibleFilter === 'author',
	// });
  return (
    <div
      className={styles.centerblock__filter}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Filtrtitle />
      <button
        type="button"
        className={`${styles.filter_button} ${themeClass}`}
        onClick={() => setVisibleFilter('author')}
      >
        {visibleFilter === 'author' ? (
          <div className={styles.dropdown_author}>
            {' '}
            1 исполнитель,2 исполнитель,3 исполнитель
          </div>
        ) : (
          ''
        )}
        исполнителю
      </button>

      <button
        type="button"
        className={`${styles.filter_button} ${themeClass}`}
        onClick={() => setVisibleFilter('year')}
      >
        {visibleFilter === 'year' ? (
          <div className={styles.dropdown_year}>
            {' '}
            2005 год, 2010 год, 2020 год
          </div>
        ) : (
          ''
        )}
        году выпуска
      </button>

      <button
        type="button"
        className={`${styles.filter_button} ${themeClass}`}
        onClick={() => setVisibleFilter('genre')}
      >
        {visibleFilter === 'genre' ? (
          <div className={styles.dropdown_genre}>рок, поп, джаз</div>
        ) : (
          ''
        )}
        жанру
      </button>
    </div>
  )
}
export default Filtr
