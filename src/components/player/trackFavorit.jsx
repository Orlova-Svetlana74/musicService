// import React from 'react'
import Track from './track'
import { useGetAllTracksQuery } from '../../store/api/musicApi'

function TrackFavorit() {
  const { data = [] } = useGetAllTracksQuery()

  const userId = Number(localStorage.getItem('user_id'))

  const starredList = data.filter(item => 
    item.stared_user.find((user) => user.id === userId)
  )
console.log (starredList)
  const playlistItems = starredList.map((item) => (
    <Track key={item.id} item={item}
    title={item.name}
    author={item.author}
    album={item.album}
    time={item.duration_in_seconds}
    stared_user={item.stared_user}
    id={item.id}
    file={item.track_file} />
  ))
  return (
    <div>
      <ul>{playlistItems}</ul>
    </div>
  )
}

export default TrackFavorit
