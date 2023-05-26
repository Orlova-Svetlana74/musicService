// import React from 'react'
import { useState } from 'react'
import Filtrtitle from './filtrtitle'
import styles from './filtr.module.css'

function Filtr() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  return (
    <div className={styles.centerblock__filter}>
      <Filtrtitle />
      <button
        type="button"
        className={`${styles.filter__button} ${
          visibleFilter === 'author' ? styles.filter__button_active : ''
        }`}
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
        className={`${styles.filter__button} ${
          visibleFilter === 'year' ? styles.filter__button_active : ''
        }`}
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
        className={`${styles.filter__button} ${
          visibleFilter === 'genre' ? styles.filter__button_active : ''
        }`}
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
