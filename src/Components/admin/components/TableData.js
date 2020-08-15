import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện Thoại</th>
                    <th>Quyền</th>
                    <th>Thao Tác</th>
                </tr>
                </thead>
                <tbody>
                    <TableDataRow/>
                </tbody>
            </table>
            </div>
        )
    }
}
