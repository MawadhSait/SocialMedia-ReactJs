import './home.css';
import TopBar from '../../Components/topBar/TopBar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Feed from '../../Components/Feed/Feed';
export default function Home() {
  return (
    <>
    <TopBar/>
      <div className='homeContainer'>
        
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      
    </div>
    </>
  )
}

 