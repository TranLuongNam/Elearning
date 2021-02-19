//initialsState : giá trị ban đầu

import { FETCH_CREDENTIALS } from "../actions/type";

//credentials: Thông tin đăng nhập ban đầu
let initialState = {
  credentials: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS: //handle action login
      state.credentials = action.payload; //  action.payload : là dữ liệu được gửi lên(res.data)
      return { ...state };
    default:
      return state;
  }
};
export default UserReducer;
