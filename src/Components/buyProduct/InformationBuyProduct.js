import React, { Component } from 'react'

export default class InformationBuyProduct extends Component {
    render() {
        return (
            <div className="wrapper">
            <div className="container">
            <form action>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 left">
                    <h1 className="title">THÔNG TIN THANH TOÁN</h1>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                        <label htmlFor="name">Họ và tên</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Vui lòng nhập tên" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                        <label htmlFor="address">Địa chỉ</label>
                        <input type="text" className="form-control" id="address" aria-describedby="addressHelp" placeholder="Vui lòng nhập địa chỉ" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Vui lòng nhập số điện thoại" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Vui lòng nhập email" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <h3 className="information">
                        THÔNG TIN BỔ SUNG
                        </h3>
                        <label htmlFor="exampleFormControlTextarea1">Ghi chú đơn hàng (tuỳ chọn)</label>
                        <textarea className="form-control" id="note" rows={3} defaultValue={""} />
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 right">
                    <div className="style-border border border-danger p-4">
                    <h3 className="detail">
                        ĐƠN HÀNG CỦA BẠN
                    </h3>
                    <div className="info-pay">
                        <div className="row head">
                        <div className="col-6 product">
                            <span>Sản phẩm</span>
                        </div>
                        <div className="col-6 total">
                            <span className="float-right">Tam tính</span>
                        </div>
                        </div>
                        <hr />
                        <div className="row content">
                        <div className="col-10 details">
                            <span>
                            -Kem Nền Cao Sum Losec Từ Tinh Chất Vàng Mới Ra Mắt
                            Tháng 11.2019 gíup Che Khuyết Điểm Siêu Tốt, Cảm Nhận
                            Khi Thoa Em Ý Nên Da Thấm Nhanh Khô Thoáng Mà Không Có
                            Cảm Giác Dính Rít. × 1
                            </span>
                        </div>
                        <div className="col-2 price">
                            <span className="float-right">
                            850000đ
                            </span>
                        </div>
                        </div>
                        <hr />
                        <div className="row pay">
                        <div className="col-6">
                            <span className="total">Tổng</span>
                        </div>
                        <div className="col-6">
                            <span className="price float-right">850000đ</span>
                        </div>
                        </div>
                        <b className="selection">
                        Trả tiền mặt khi nhận hàng
                        </b>
                        <div className="row">
                        <div className="col-12">
                            <button className="btn btn-danger">Đặt hàng</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
            </div>
        )
    }
}
