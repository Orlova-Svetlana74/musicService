import { useState } from 'react'

function Filtr() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <button
        type="button"
        className="filter__button button-author _btn-text"
        onClick={() => setVisibleFilter('author')}
      >
        {visibleFilter === 'author' ? (
          <div className="dropdown_author">
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
        className="filter__button button-year _btn-text"
        onClick={() => setVisibleFilter('year')}
      >
        {visibleFilter === 'year' ? (
          <div className="dropdown_year"> 2005 год, 2010 год, 2020 год</div>
        ) : (
          ''
        )}
        году выпуска
      </button>

      <button
        type="button"
        className="filter__button button-genre _btn-text"
        onClick={() => setVisibleFilter('genre')}
      >
        {visibleFilter === 'genre' ? (
          <div className="dropdown_genre"> рок, поп, джаз</div>
        ) : (
          ''
        )}
        жанру
      </button>
    </div>
  )
}
export default Filtr
