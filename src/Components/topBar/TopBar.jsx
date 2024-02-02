import './topBar.css'
import {Search,Person, Bell ,Chat} from 'react-bootstrap-icons';

const TopBar = () => {
  return (
    <div>
        <div className="topbarContainer">
            <div className="topbarleft">
                <span className='logo'>Lama Social</span>
            </div>
            <div className="tobarCenter">
              <div className="topbarSrach">
                <Search  className='searchIcon'/>
                <input className='serachInput' placeholder="Search or start a new chat"/>
              </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className='topbLink'>HomePage</span>
                    <span className='topbLink'>TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Bell/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src='../../public/assets/person/1.jepg' alt="" className="topbarimg" />
            </div>
        </div>
    </div>
  )
}

export default TopBar
