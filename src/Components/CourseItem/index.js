import React, { Component } from "react";
import { Link } from "react-router-dom";
class CourseItem extends Component {
  render() {
    return (
      <div className="card text-center p-2">
        <img
          src={this.props.item.hinhAnh}
          alt={this.props.item.hinhAnh}
          style={{
            width: "100%",
            height: "220px",
          }}
        />
        <p className="lead font-weight-bold text-primary">
          {this.props.item.tenKhoaHoc}
        </p>
        <p className="lead">Intructor : {this.props.item.nguoiTao.hoTen}</p>
        <p className="lead">Views : {this.props.item.luotXem}</p>
        <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-success">Go To Course</Link>
      </div>
    );
  }
}
export default CourseItem;
