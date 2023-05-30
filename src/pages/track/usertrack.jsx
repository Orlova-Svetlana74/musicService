import { NavLink } from 'react-router-dom'

function UserTrack ({ users }) {
    return (
      <ul className="UserList__list">
      {users.map((user) => (
        <li key={`track-${user.id}`} className="UserList__list-item">
          <img src={user.avatar} alt={user.firstName} />
          <NavLink to={`/profile/${user.id}`} className="UserList__name">
            {user.firstName} {user.lastName}
          </NavLink>
        </li>
      ))}
    </ul>
    );
  };

  export default UserTrack