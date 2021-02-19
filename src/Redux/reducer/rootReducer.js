import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import UserReducer from "./userReducer"

const RootReducer = combineReducers({
  //course là biến chứa tất cả dữ liệu liên quan tới course,CourseReducer là reducer quản lý tất cả dữ liệu liên quan tới course.
  course: CourseReducer,
  user: UserReducer,
});

export default RootReducer;
