import { useParams } from 'react-router-dom'
import {USERS} from '../../constants'

function ProfileTrack() {
  const params = useParams()
  const user = USERS.find(() => user.id === Number(params.id))
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <section >
      <img src={user.avatar} alt={fullName} />
      <h1>{fullName}</h1>
      <p>author: {user.author}</p>
      <p>album: {user.album}</p>
    </section>
  )
}
export default ProfileTrack
