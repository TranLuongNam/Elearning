import { createAction } from ".";
import { userService } from "../../Services";
import { FETCH_CREDENTIALS } from "./type";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS), res.data);
        // JSON.parse() : nhận vào một chuỗi JSON và chuyển đổi (transform) nó thành một đối tượng JavaScript. 
        // JSON.stringify() : lấy một đối tượng JavaScript và chuyển đổi nó thành một chuỗi JSON.
        localStorage.setItem("credentials", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
