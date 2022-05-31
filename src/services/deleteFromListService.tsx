import axios from "axios";

export  function deleteFromListService(page:string,id:string,token:string | null) {
    return axios
    .delete(`/api/user/${page}/${id}`, {
        headers: { authorization: token },
    })
}
