// @ts-nocheck
// import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllTracksQuery } from '../../store/api/musicApi'
// import classNames from 'classnames'
import FiltrDropdown from './filtrDropdown'
import Filtrtitle from './filtrtitle'
import styles from './filtr.module.css'
import { CategoryButton } from './categoryButton'
import { useThemeContext } from '../wrapper/theme'

import {
  removeFilterYears,
  removeFilterAuthor,
  removeFilterGenre,
} from '../../store/slices/setFilters'

function Filtr() {
  const [activeCategory, setActiveCategory] = useState(null)
  const dispatch = useDispatch()
  const { data = [] } = useGetAllTracksQuery()
  console.log(data)
  const authorTrack = data.map((item) => item.author)
  const author = Array.from(new Set(authorTrack))

  const genreTrack = data.map((item) => item.genre)
  const genre = Array.from(new Set(genreTrack))

  const years = ['Сначала новые', 'Сначала старые']

  const handleCategoryClick = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryName)
    }
  }
  const filterAuthor = useSelector((state) => state.setFilters.author)
  const filterGenre = useSelector((state) => state.setFilters.genre)
  const filterYears = useSelector((state) => state.setFilters.years)
  // const [activeCategory, setActiveCategory] = useState(null)
  // const dispatch = useDispatch()
  const { theme } = useThemeContext()
  // const {data} = useGetAllTracksQuery()
  // const [visibleFilter, setVisibleFilter] = useState(null)
  // const isLight = theme === themes.light
  // const themeClass = isLight ? styles.light : styles.dark

  // const authorTrack = data.map(item => item.author)
  // console.log ({data})

  // const author = Array.from(new Set(authorTrack))

  // const genreTrack = data.map((item) => item.genre)
  // const genre = Array.from(new Set(genreTrack))

  // const years = ['Сначала новые', 'Сначала старые']

  // const handleCategoryClick = (categoryName) => {
  //   if (activeCategory === categoryName) {
  //     setActiveCategory(null)
  //   } else {
  //     setActiveCategory(categoryName)
  //   }
  // }

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
      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => dispatch(removeFilterAuthor())}
        className={`${styles.circle_count} ${
          filterAuthor.length === 0 ? styles.hidden : ''
        }`}
      >
        {filterAuthor.length}{' '}
      </div>

      <CategoryButton
        category="Исполнители"
        isActive={activeCategory === 'Исполнители'}
        onClick={() => handleCategoryClick('Исполнители')}
      />
      {activeCategory === 'Исполнители' && (
        <FiltrDropdown data={author} category="Исполнители" />
      )}

      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => dispatch(removeFilterYears())}
        className={`${styles.circle_count} ${
          filterYears.length === 0 ? styles.hidden : ''
        }`}
      >
        {filterYears.length}{' '}
      </div>

      <CategoryButton
        category="Год выпуска"
        isActive={activeCategory === 'Год выпуска'}
        onClick={() => handleCategoryClick('Год выпуска')}
      />
      {activeCategory === 'Год выпуска' && (
        <FiltrDropdown data={years} category="Год выпуска" />
      )}

      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => dispatch(removeFilterGenre())}
        className={`${styles.circle_count} ${
          filterGenre.length === 0 ? styles.hidden : ''
        }`}
      >
        {filterGenre.length}{' '}
      </div>

      <CategoryButton
        category="Жанры"
        isActive={activeCategory === 'Жанры'}
        onClick={() => handleCategoryClick('Жанры')}
      />
      {activeCategory === 'Жанры' && (
        <FiltrDropdown data={genre} category="Жанры" />
      )}
    </div>
  )
}
export default Filtr
