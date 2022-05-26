import React, { useState } from 'react'
import './playlistModal.css'
import newplaylist from '../../images/newPlaylist.png'
import cancel from '../../images/clear.png'
import PlayListCard from '../cards/playlistCard/PlayListCard'
import axios from 'axios'
import ReactTooltip from "react-tooltip";
import { usePlayList } from '../../context/playlist-context'
import { toast } from 'react-toastify';
const PlaylistModal = (props) => {

    const { ListData, setListData } = usePlayList()
    const [listInput, setListinput] = useState('')
    let token = localStorage.getItem("token");
    const notify = (msg) => toast(msg);
    const creatNewPlayList = async () => {
        if (token) {
            return axios.post(`/api/user/playlists`, {
                playlist: { title: listInput, description: 'Amayra' }
            }, {
                headers: {
                    authorization: token
                }
            }).then((res) => res.status === 201 ?
                setListData(res.data.playlists)  || notify('New PlayList Added')
                : alert('Please Refresh, Some Error Occurred'))
        }
    }
    const dataInList = ListData.some(val=>val.title === listInput)
    return (
        <>
            <div className="modal-overlay">
                <div className="p-modal-cont">
                    <div className="add-new-list">
                        <div>
                            <input type="text" placeholder='Add Name of New PlayList' value={listInput} onChange={(e) => setListinput(e.target.value)} />
                            <img src={newplaylist} alt="list" data-tip data-for="playTip" onClick={()=>listInput.length>0&& !dataInList  &&creatNewPlayList()} />
                            
                        </div>
                        <img src={cancel} alt="clear" data-tip data-for="closeTip" onClick={() => props.closeModal(false)} />
                    </div>
                    <ReactTooltip id="playTip" place="bottom" effect="solid">Create New Play List</ReactTooltip>
                    <ReactTooltip id="closeTip" place="bottom" effect="solid">Close Modal</ReactTooltip>
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