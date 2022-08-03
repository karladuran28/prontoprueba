import axios from "axios";
import Cookies from "js-cookie";

export const deleteMethod = (id, loadNewData) => {
  const headers = {
    "X-CSRFToken" : Cookies.get('csrftoken'),
    withCredentials: true,
  }
  axios
    .delete(`/api/todos/${id}`, {headers})
    .then((res) => loadNewData())
    .catch((err) => console.error(err));
}
