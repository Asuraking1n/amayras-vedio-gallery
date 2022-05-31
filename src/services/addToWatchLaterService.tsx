import axios from "axios";
export default function addToWatchLaterService(video:object, token:string | null) {
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
