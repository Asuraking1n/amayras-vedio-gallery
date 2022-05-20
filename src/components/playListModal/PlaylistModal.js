import React, { useState } from 'react'
import './playlistModal.css'
import newplaylist from '../../images/newPlaylist.png'
import cancel from '../../images/clear.png'
import PlayListCard from '../cards/playlistCard/PlayListCard'
import axios from 'axios'
import { usePlayList } from '../../context/playlist-context'
const PlaylistModal = (props) => {

    const { ListData, setListData } = usePlayList()
    const [listInput, setListinput] = useState('Add New PlayList')
    let token = localStorage.getItem("token");
    const creatNewPlayList = async () => {
        if (token) {
            return axios.post(`/api/user/playlists`, {
                playlist: { title: listInput, description: 'New List Created' }
            }, {
                headers: {
                    authorization: token
                }
            }).then((res) => res.status === 201 ?
                setListData(res.data.playlists)
                : alert('Please Refresh, Some Error Occurred'))
        }
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="p-modal-cont">
                    <div className="add-new-list">
                        <span>
                            <img src={newplaylist} alt="list" onClick={creatNewPlayList} />
                            <input type="text" placeholder='Add New PlayList' onChange={(e) => setListinput(e.target.value)} />
                        </span>
                        <img src={cancel} alt="clear" onClick={() => props.closeModal(false)} />
                    </div>
                    <hr />
                    <div className="playlist-card-cont">
                        {ListData.map((val, id) => {
                            return (
                                <PlayListCard key={id} list={val} vedioData={props.vedioData} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistModal