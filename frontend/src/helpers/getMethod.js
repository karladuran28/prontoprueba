import axios from "axios";

export const getMethod = (dataHandler) => {
  axios
  .get('/api/todos')
  .then((res) => dataHandler(res.data))
  .catch((err) => console.error(err));
}
