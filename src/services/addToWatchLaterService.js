import axios from "axios";
export default function addToWatchLaterService(video, token) {
    const res = axios.post(
        `/api/user/watchlater`,
        { video },
        {
            headers: {
                authorization: token,
            },
        })
        return res
}
