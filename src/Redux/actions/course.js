//async action : action bất đồng bộ
//middleware : là một lớp chắn ngang giữa component giữa component và store,bất kì action nào đi lên store đều phải qua middleware.
//middleware : tất cả các code bất đồng bộ chạy xong hết thì nó mới cho dispatch lên trên store,nó đảm bảo cho việc serve có trả về kêt quả hay chưa.

import { courseService } from "../../Services";
import { createAction } from ".";
import { FETCH_COURSE } from "./type";

export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSE, res.data)); //res là object,data mới là mảng dữ liệu là api trả về
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
