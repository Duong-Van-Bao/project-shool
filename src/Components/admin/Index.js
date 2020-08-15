import React, { Component } from 'react';
import Header from './components/Header';
import Searchform from './components/SearchFrom';
import TableData from './components/TableData';
import AppUser from './components/AppUser';

export default class Index extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       hienThiForm:false,
    //       data:DataUser,
    //       searchText:"",
    //       editUserStatus:false,
    //       userEditObject:{}
    //     }
    //   }  
    
       
    //  componentWillMount() {
    //     if (localStorage.getItem('userData') === null) {
    //       localStorage.setItem('userData', JSON.stringify(DataUser));
    //     }
    //     else {
    //       var temp = localStorage.getItem('userData');
    
    //       temp = JSON.parse(temp);
    //       this.setState({
    //         data: temp
    //       });
    
    //     }    
    //   }
       
    
    //  changeEditUserStatus = () => {
    //     this.setState({
    //       editUserStatus : !this.state.editUserStatus
    //     });
    //   }
    
    //   deleteUser = (idUser) => {    
    //     var tempData = this.state.data;
    //     tempData = tempData.filter(item => item.id !== idUser);
    //       this.setState({
    //         data:tempData
    //       });
    //        localStorage.setItem('userData', JSON.stringify(tempData));
    //     }
     
    //   getUserEditInfoApp = (info) => {
    //      this.state.data.forEach((value,key) => {
    //         if(value.id === info.id){
    //           value.name = info.name;
    //           value.tel = info.tel;
    //           value.Permission = info.Permission
    //         }
    //      })
    //   }
    //   editUser = (user) => {
    //      this.setState({
    //       userEditObject:user
    //      });
         
    //   }
    
    //   getNewUserData = (name,tel,Permission) => {
    //   var item = {};
    //   item.id         = uuidv1(); 
    //   item.name       = name;
    //   item.tel        = tel;
    //   item.Permission = Permission;
    //   var items = this.state.data;
    //   items.push(item);
    
    //   this.setState({
    //     data:items
    //   });
    //    console.log(this.state.data);
    //   }
     
    //   getTextSearch = (dl) => {
    //     this.setState({
    //       searchText:dl
    //     });
    //   }
    
    //   doiTrangThai = () => {
    //     this.setState({
    //       hienThiForm: !this.state.hienThiForm
    //     });
    //   }    
    render() {
        return (
            <div>                
                <Header/>
                <div className="searchform">
                <div className="container">
                    <div className="row">  
                    <Searchform/>
                    <TableData/>
                    <AppUser/>
                    </div>
                </div>
                </div>
            </div>  
        )
    }
}
