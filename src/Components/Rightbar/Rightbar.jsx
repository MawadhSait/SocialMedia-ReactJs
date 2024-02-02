import './rightbar.css'
import OnlineFreind from '../Online/Online'
import {Users} from '../../dummyData'
import { ReceiptCutoff } from 'react-bootstrap-icons'
import Home from '../../Pages/Home/Home'

export default function Rightbar  ({profile})  {
  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
            <img src="../../assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Polo Foster</b> and <b>3 other friends </b> have a birthday today
            </span>
          </div>
          <img src="../../assets/ad.png" alt="" className="rightbarAD" />
          <h4 className="rightbarTitle">Online Friends </h4>
          <ul className="rightbarFreindsList">
            {Users.map((u) => (
              <OnlineFreind key={u.id} user={u} />
            ))}
       
          </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="infoKey">City:</span>
                <span className="infoValue">NewYork:</span>
              </div>

              <div className="rightbarInfoItem">
                <span className="infoKey">From:</span>
                <span className="infoValue">NewYork:</span>
              </div>

              <div className="rightbarInfoItem">
                <span className="infoKey">Stauts:</span>
                <span className="infoValue">Single:</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User Friends </h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src="assets/person/1.jepg" alt="" className="rightbarFolowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
              </div>

              <div className="rightbarFollowing">
                <img src="assets/person/1.jepg" alt="" className="rightbarFolowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              
              <div className="rightbarFollowing">
                <img src="assets/person/1.jepg" alt="" className="rightbarFolowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
            </div>

            
      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

