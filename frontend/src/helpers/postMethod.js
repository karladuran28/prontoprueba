import axios from "axios";
import Cookies from "js-cookie";

export const postMethod = (data, loadNewData) => {
  const headers = {
    "X-CSRFToken" : Cookies.get('csrftoken'),
    withCredentials: true,
  }
  axios
    .post(`/api/todos/`, data, {headers})
    .then((res) => loadNewData())
    .catch((err) => console.error(err));
}
