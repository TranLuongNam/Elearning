import Axios from "axios";

import * as yup from "yup";
//Tạo ra 1 object mẫu(theo syntax lib yup)

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Field is required !"),
  matKhau: yup.string().required("Field is required !"),
  hoTen: yup.string().required("Field is required !"),
  soDT: yup
    .string()
    .required("Field is required !")
    .matches(/^[0-9]+$/),
  email: yup
    .string()
    .required("Field is required !")
    .email("Email is invalid !"),
  maNhom: yup.string().required("Field is required !"),
});

//Ở đâu cần sài thì gọi UserService.signUp ra chạy
//Tuy nhiên UserService là 1 class,là lớp đối tượng nên phải new ra một object mới để có thể chấm đến phương thức của nó.(index.js(Service))
class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      //Muốn backend thêm data gì vào database thì phải gửi thêm một data đó lên cho backend
      data,
    });
  }
  signIn(user) {
    return Axios({
      method: "POST",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user,
    });
  }
}

export default UserService;
