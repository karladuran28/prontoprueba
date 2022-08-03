import axios from "axios";
import Cookies from "js-cookie";

export const patchMethod = (id, data, loadNewData) => {
  const headers = {
    "X-CSRFToken" : Cookies.get('csrftoken'),
    withCredentials: true,
  }
  axios
    .patch(`/api/todos/${id}/`, data, {headers})
    .then((res) => loadNewData())
    .catch((err) => console.error(err));
}
