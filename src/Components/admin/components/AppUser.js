import React, { Component } from 'react'
import {connect} from 'react-redux'

class AppUser extends Component {
    constructor(props) {
        super(props);
        this.state={
          product_name:'', 
          product_price:'',
          image:''
        }
      }
      isChange = (event) => {
        var name=event.target.name;
        var value =event.target.value;
        console.log(name);
        console.log(value);      
          this.setState({
            [name]:value
          });      
      } 
      handleClick = (name,price,image) =>{
       var item = {};
       item.product_name=name;
       item.product_price=price;
       item.image=image;
       this.props.addDataStore(item);
       console.log("đây là dữ liệu hàng truyền vào : " + item);
     }
       render() {
        return (
            <div className="col">
                <form>
                    <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Thêm Mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                    <input type="text" name="product_name" onChange={(event) => this.isChange(event)} className="form-control"  placeholder="Tên User" />
                    </div>
                    <div className="form-group">
                    <input type="text" name="product_price" onChange={(event) => this.isChange(event)}className="form-control"  placeholder="Điện Thoại" />
                    </div>
                    <div className="form-group">
                    {/* <select name="Permission"  className="custom-select" required>
                        <option value>Chọn Quyền Mặc Định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                    </select> */}
                    <input type="text" name="image" onChange={(event) => this.isChange(event)}className="form-control"  placeholder="Điện Thoại" />
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" 
                        onClick={() =>this.handleClick(this.state.product_name,this.state.product_price,this.state.image) } value=" Thêm Mới "/>
                    </div>
                </div>
                </div> 
            </form>
        </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
      testThoi: state.testConnect,
    }
  }
  //this.props.testThoi
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addDataStore: (getItemProduct) => {
        dispatch({
          type:"ADD_DATA_PRODUCT",
          getItemProduct
        })
      }
    } 
  }
  //this.props.addDataStore
  export default connect(mapStateToProps, mapDispatchToProps)(AppUser);
    
