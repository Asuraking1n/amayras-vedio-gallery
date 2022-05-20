import axios from "axios";

export  function deleteFromListService(page,id,token) {
    return axios
    .delete(`/api/user/${page}/${id}`, {
        headers: { authorization: token },
    })
}
