import axios from "axios";
export  function postVideoToPlayListService(id,video,token) {
return axios
.post(
    `/api/user/playlists/${id}`,
    { video },
    {
        headers: { authorization: token },
    }
)
}
