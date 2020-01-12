import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
          <div className="float-left">
            <a href="/" data-activates="slide-out" className="button-collapse">
              <i className="fa fa-bars"></i>
            </a>
          </div>

          <div className="breadcrumb-dn mr-auto">
            <ol className="breadcrumb header-breadcrumb">
              <li className="breadcrumb-item">
                <a  href="/">Trang Chủ</a>
              </li>
            </ol>
          </div>

          <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link dropdown-toggle waves-effect waves-light"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user"></i> Tài Khoản
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1"
              >
                <a href="/" className="dropdown-item waves-effect waves-light">
                  Đăng Ký
                </a>
                <a href="/" className="dropdown-item waves-effect waves-light">
                  Đăng Nhập
                </a>
                <a href="/" className="dropdown-item waves-effect waves-light">
                  Đăng Xuất
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
