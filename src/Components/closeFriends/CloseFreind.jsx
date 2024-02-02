import './CloseFreind.css'

export default function CloseFreind({user}) {
  return (
    <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidbarFriendName">{user.username}</span>
    </li>
  )
}
