import './post.css'
import {ThreeDotsVertical} from 'react-bootstrap-icons';
import {Users} from '../../dummyData'
import { useState } from 'react';

export default function Post  ({post}) {
    const [like, setlike]=useState(post.like)
    const [isliked, setIslike]=useState(false)
    const likeHandler =()=>{
        setlike(isliked ? like - 1 : like + 1)
        setIslike(!isliked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopleft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <ThreeDotsVertical/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img className='likeicon' src="../../assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeicon' src="../../assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomright">
                    <span className="postCommentText">{post.comment} Comments</span>

                </div>
            </div>
        </div>
    </div>
  )
}

 