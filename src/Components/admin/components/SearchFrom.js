import React, { Component } from 'react'

export default class SearchFrom extends Component {
    render() {
        return (
            <div className="col-12">
           <div className="form-group">
               <div className="btn-group">
               <input type="text" className="form-control"  placeholder=" Nhập tên cần tìm " />
               <div className="btn btn-info"> Tìm </div>
           </div>
           <div className="btn-group1">
           </div>
           </div>
           <hr/>    
           </div>
        )
    }
}
