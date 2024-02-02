import './share.css'
 import {Camera,Tag , GeoAlt,EmojiLaughing}from 'react-bootstrap-icons';
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../../assets/person/3.jpeg" alt="" className="shareProfileImg" />
                <input placeholder='Whats in your mind' className='shareInput'  />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Camera  className='tomato shareIcon'/>
                        <span className="shareOptionText">Vedio or Photo</span>
                    </div>

                    <div className="shareOption">
                        <EmojiLaughing  className=' goldenrod shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>

                    <div className="shareOption">
                        <Tag  className='green shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <GeoAlt  className='blue shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>

                    
                </div>
                <button className='shareBtn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
