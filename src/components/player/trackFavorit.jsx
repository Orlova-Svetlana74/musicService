// import React from 'react'
import Track from './track'
import { useGetAllTracksQuery } from '../../store/api/musicApi'

function TrackFavorit() {
  const { data = [] } = useGetAllTracksQuery()

  const userId = Number(localStorage.getItem('user_id'))

  const starredList = data.filter((item) =>
    item.stared_user.find((user) => user.id === userId)
  )
console.log (starredList)
  const playlistItems = starredList.map((item) => (
    <Track key={item.id} track={item} />
  ))
  return (
    <div>
      <ul>{playlistItems}</ul>
    </div>
  )
}

export default TrackFavorit
