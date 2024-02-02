import './Profile.css'
import TopBar from '../../Components/topBar/TopBar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Feed from '../../Components/Feed/Feed';


export default function Profile() {
  return (
    <>
      <TopBar/>
      <div className='profile'>
      <Sidebar/>

      <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img src='../../assets/person/1.jepg' alt="" className="profileCoverImg" />
          <img src="../../assets/person/1.jepg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Mawadh Sait</h4>
          <span className="profileInfoDesc">Test 1</span>
        </div>
      </div>
      <div className="profileRightBottom">
      <Feed/>
      <Rightbar profile/>
      </div>
      </div>
      
    </div>
    </>
  )
}
