import './sidebar.css'
import {Rss, Chat, Camera,People,BookmarkFill,BagFill,Question,CalendarEvent ,MortarboardFill} from 'react-bootstrap-icons';
import CloseFreind from '../closeFriends/CloseFreind';
import { Users } from '../../dummyData';
export default function Sidebar  () {
  return (
    <div className='sidbar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className='sidebarListItem'>
            <Rss className='sidbarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className='sidebarListItem'>
            <Chat className='sidbarIcon'/>
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className='sidebarListItem'>
            <Camera className='sidbarIcon'/>
            <span className="sidebarListItemText">Video</span>
          </li>

          <li className='sidebarListItem'>
            <People className='sidbarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className='sidebarListItem'>
            <BookmarkFill className='sidbarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className='sidebarListItem'>
            <Question className='sidbarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className='sidebarListItem'>
            <BagFill className='sidbarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className='sidebarListItem'>
            <CalendarEvent className='sidbarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className='sidebarListItem'>
            <MortarboardFill className='sidbarIcon'/>
            <span className="sidebarListItemText">Course</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <br />
        <hr className='sidebarHr'/>


        <ul className="sidebarFreindList">
          {Users.map((u) =>(
              <CloseFreind key={u.id} user={u} />
          ))}
          
         
        </ul>
      </div>
    </div>
  )
}

