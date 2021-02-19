import React, { Component } from "react";
import CourseItem from "../../Components/CourseItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../Redux/actions/course";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center font-weight-bold">
          COURSES-ONLINE
        </h1>
        <div className="container">
          <div className="row">
            {/*Mỗi lần map() xong sẽ trả ra bao nhiêu col-3 là dựa vào dữ liệu trả về từ api */}
            {this.props.courseList.map((item, index) => (
              <div className="col-3">
                {/* Truyền item vào CourseItem để render ra giao diện */}
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //axios return promise ES6
    this.props.dispatch(fetchCourses());
  }
}

const mapStateToProps = (state) => ({
  //Lấy dữ liệu từ trên store xuống để sử dụng và được lưu trong courseList.
  //Tiếp theo là map() mảng courseList ra màn hình
  courseList: state.course.courses,
});

export default connect(mapStateToProps)(HomeScreen);
