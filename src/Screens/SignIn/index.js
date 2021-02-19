import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login } from "../../Redux/actions/user";

class SignInScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          this.props.dispatch(login(values));
        }}
        render={({ handleChange }) => (
          <Form className="w-50 mx-auto">
            <h1>Đăng Nhập</h1>
            <div className="form-group">
              <label>Tài Khoản</label>
              <Field
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <Field
                type="password"
                onChange={handleChange}
                name="matKhau"
                className="form-control"
              />
            </div>
            <button className="btn btn-success">Đăng Nhập</button>
          </Form>
        )}
      />
    );
  }
}
export default connect()(SignInScreen);
