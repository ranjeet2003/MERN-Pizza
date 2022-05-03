import axios from "axios";
export const getAllPizzas = () => (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = axios.get("http://localhost:5000/");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "GET_PIZZAS_ERROR", payload: err });
  }
};
