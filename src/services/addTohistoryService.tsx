import axios from "axios";
export  function addTohistoryService(video:object, token:string | null) {
    const res = axios.post(
        `/api/user/history`,
        { video },
        {
            headers: {
                authorization: token,
            },
        })
        return res
}
