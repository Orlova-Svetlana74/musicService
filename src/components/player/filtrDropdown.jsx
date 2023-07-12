// @ts-nocheck
// import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './filtrDropdown.module.css'

import {
  setFilterYears,
  setFilterAuthor,
  setFilterGenre,
} from '../../store/slices/setFilters'

function FiltrDropdown({ data, category }) {
  const dispatch = useDispatch()

  const handleFilterClick = (item) => {
    switch (category) {
      case 'Год выпуска':
        dispatch(
          setFilterYears({
            years: item,
          })
        )
        break
      case 'Исполнители':
        dispatch(
          setFilterAuthor({
            author: item,
          })
        )
        break
      case 'Жанры':
        dispatch(
          setFilterGenre({
            genre: item,
          })
        )
        break
      default:
        break
    }
  }
  return (
    
    <div className={styles.dropdown}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      {/* eslint-disable no-unused-vars */}
      {data.map((item, i) => (
        
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
        <div
          className={styles.dropdown_item}
          key={item.i}
          onClick={() => handleFilterClick(item, i)}
        >          
          {item}
        </div>        
      ))}
    
    </div>    
    );
};


export default FiltrDropdown
