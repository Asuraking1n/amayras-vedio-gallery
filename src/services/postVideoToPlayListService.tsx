import axios from "axios";
export  function postVideoToPlayListService(id:string,video:object,token:string | null) {
return axios
.post(
    `/api/user/playlists/${id}`,
    { video },
    {
        headers: { authorization: token },
    }
)
}
