import React, { Component } from 'react'

export default class TableDataRow extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td>
                    </td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua">
                        <i className=" fa fa-edit "> Sữa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                        <i className=" fa fa-delete" > Xóa </i>
                        </div>
                    </div>
                    </td>
                </tr>
            </div>
        )
    }
}
