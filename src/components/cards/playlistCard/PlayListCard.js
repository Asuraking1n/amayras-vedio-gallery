import React from 'react'
import axios from 'axios'
import './playcard.css'
import { Link,useNavigate } from 'react-router-dom'
import playList from '../../../images/playlist.png'
const PlayListCard = (props) => {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    
    const postVedioToPlayList=(video)=>{
        axios.post(`/api/user/playlists/${props.list._id}`,{video},{
          headers:{authorization: token}
      }).then((res)=>res.status===201?navigate('/playlist'):alert('Please Refresh, Some Error Occurred'))
      }

  return (
    <>
    <div className="playList-card-cont" >
    <Link to={`/playlist/` + props.list._id}>        
    <div className="overlay-img">
            <img src="https://inculture.microsoft.com/wp-content/uploads/prod/2020/01/fashion-globes-1600x900.jpg"  alt="l" />
        </div>
        </Link>

        <div className="p-description">
            <img src={playList} alt="play" onClick={()=>postVedioToPlayList(props.vedioData)}/>
        </div>
        <div className="p-title">
            {props.list.title}
        </div>
    </div>
    </>
  )
}

export default PlayListCard