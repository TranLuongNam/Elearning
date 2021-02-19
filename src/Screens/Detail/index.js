import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/actions";
import { FETCH_COURSE_DETAIL } from "../../Redux/actions/type";
import { courseService } from "../../Services";

class CourseDetailScreen extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <h1
          className=" text-warning text-center "
          style={{
            fontWeight: "bold",
            marginBottom: "100px",
            fontSize: "50px",
          }}
        >
          DETAIL COURSE
        </h1>
        <div className="row text-center ">
          <div className="col-6">
            <img
              src={this.props.courseDetail.hinhAnh}
              alt="courseDetail"
              style={{ width: "100%", height: "300px" }}
            />
          </div>
          <div className="col-6 mt-4 ">
            <h2
              className="font-weight-bold text-primary"
              style={{ textTransform: "uppercase" }}
            >
              COURSE : {this.props.courseDetail.tenKhoaHoc}
            </h2>
            <h3>
              Intructor :{" "}
              <span className=" font-weight-bold">
                {this.props.courseDetail.nguoiTao.hoTen}
              </span>
            </h3>
            <h3>
              DateCreate:
              <span className="font-weight-bold">
                {this.props.courseDetail.ngayTao}
              </span>
            </h3>
            <h3>
              Views :{" "}
              <span className="font-weight-bold">
                {this.props.courseDetail.luotXem}
              </span>
            </h3>
            <button
              className="btn btn-primary p-3"
              style={{ fontSize: "22px" }}
            >
              Buy Course
            </button>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    courseService
      .fetchCourseDetail(this.props.match.params.courseId)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    //Nếu dữ liệu ban đầu lấy được là null,thì mảng courseDetail sẽ trả về 1 object rỗng có dạng sau:
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
    luotXem: "",
  },
});
export default connect(mapStateToProps)(CourseDetailScreen);
