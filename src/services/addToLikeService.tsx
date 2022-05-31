import axios from "axios";
export default function addToLikeService(video:object, token:string | null) {
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
