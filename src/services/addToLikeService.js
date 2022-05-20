import axios from "axios";
export default function addToLikeService(video, token) {
    const res = axios.post(
        `/api/user/likes`,
        { video },
        {
            headers: {
                authorization: token,
            },
        })
        return res
}
