import axios from "axios";
export  function addTohistoryService(video, token) {
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
