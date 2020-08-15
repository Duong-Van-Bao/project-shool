import React, { Component } from 'react'

export default class EditUser extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="card text-white bg-warning mb-3 mt-2">
                            <div className="card-header text-center">Sữa thông tin user trong hệ thống</div>
                            <div className="card-body text-primary">
                            <div className="form-group">
                            <input  name="name"  type="text" className="form-control"  placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                            <input name="tel"  type="text" className="form-control"  placeholder="Điện Thoại" />
                            </div>
                            <div className="form-group">
                            <select  name="Permission"  className="custom-select" required>
                                <option value>Chọn Quyền Mặc Định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-block btn-danger" value="Lưu"/>
                            </div> 
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
