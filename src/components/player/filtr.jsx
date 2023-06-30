// @ts-nocheck
// import React from 'react'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useGetAllTracksQuery } from '../../store/api/musicApi'
// import classNames from 'classnames'
import Filtrtitle from './filtrtitle'
import styles from './filtr.module.css'
import { themes, useThemeContext } from '../wrapper/theme'
// import {
//   removeFilterYears,
//   removeFilterAuthor,
//   removeFilterGenre,
// } from '../../store/slices/setFilters'

function Filtr() {
  // const [activeCategory, setActiveCategory] = useState(null);
  // const dispatch = useDispatch()
  const { theme } = useThemeContext()
  // const { data } = useGetAllTracksQuery()
  const [visibleFilter, setVisibleFilter] = useState(null)
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark

  // const authorTrack = data.map((item) => item.author)
  // const author = Array.from(new Set(authorTrack))

  // const genreTrack = data.map((item) => item.genre)
  // const genre = Array.from(new Set(genreTrack))

  // const years = ['Сначала новые', 'Сначала старые']

  // const filterAuthor = useSelector((state) => state.setFilters.author)
  // const filterGenre = useSelector((state) => state.setFilters.genre)
  // const filterYears = useSelector((state) => state.setFilters.years)
  // console.log(filterAuthor, author, genre, years, filterGenre, filterYears)
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
          
          <div className={styles.dropdown_author}>{
            // author.map((item)=>(<div key={item}>
            //   {item}
            // </div>
              // )) 
          } </div>
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
