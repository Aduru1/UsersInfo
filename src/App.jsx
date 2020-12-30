import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class App extends Component{
    constructor(){
        super()
        this.state ={
            fullName:'',
            gender:'',
            phoneNumber:'',
            email:'',
            password:'',
            address:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changegender = this.changegender.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changegender(event){
        this.setState({
            gender:event.target.value
        })
    }    
    changePhoneNumber(event){
        this.setState({
            phoneNumber:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }    
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const  registered = {
            fullName : this.state.fullName,
            gender: this.state.gender,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password:this.state.password,
            address:this.state.address
        }
        
        axios.post('http://localhost:4000/app/signup',registered)  //end point
             .then(response =>console.log(response.data))
        this.setState({
            fullName:'',
            gender:'',
            phoneNumber:'',
            email:'',
            password:'',
            address:''
        })

    }
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                            placeholder='FullName'
                            onChange={this.changeFullName}
                            value ={this.state.fullName}
                            className ='form-control form-group'
                            />
                            <input type="text"
                            placeholder='Gender type Male  OR Female here'
                            onChange={this.changegender}
                            value ={this.state.gender}
                            className ='form-control form-group'
                            />
                            <input type="tel"  pattern="[0-9]{10}"
                            placeholder='Phone Number (whats app number )'
                            onChange={this.changePhoneNumber}
                            value ={this.state.phoneNumber}
                            className ='form-control form-group'
                            />
                            <input type="text"
                            placeholder='E-Mail (OPtional)'
                            onChange={this.changeEmail}
                            value ={this.state.email}
                            className ='form-control form-group'
                            />
                            <input type="password"
                            placeholder='Password'
                            onChange={this.changePassword}
                            value ={this.state.password}
                            className ='form-control form-group'
                            />
                            <input type="text"
                            placeholder='exact address in India (OPTIONAL) only for Real Meet'
                            onChange={this.changeAddress}
                            value ={this.state.address}
                            className ='form-control form-group'
                            />

                            <input type="submit" className="btn btn-danger btn-block" value="Submit"/>

                        </form>
                    </div>
                </div>
            </div>
          );
    }
} 
export default App ;