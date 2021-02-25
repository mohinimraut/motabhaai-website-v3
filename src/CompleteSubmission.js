import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Join from './Join'
export class CompleteSubmission extends Component {
    continue=e=>{
       alert("Thank you for submission the form");
    }
    render() {
        const {values,handleChange} = this.props;
        return (
        //     <div class="container" style={{}}>
               
                  
        //         <div class="col-md-3" style={{border:"2px solid #D3D3D3"}}>
        //         <MuiThemeProvider>
        //  <React.Fragment>
          
        //     <AppBar title="Enter User Details" />
        //     <div class="pl-5">
        //      <TextField
        //      hintText="Enter Your First Name"
        //      floatingLabelText="First Name"
        //      onChange={handleChange('firstName')}
        //      defaultValue={values.firstName}
        //      />
        //      <br/>
             
        //      <TextField
        //      hintText="Enter Your Last Name"
        //      floatingLabelText="Last Name"
        //      onChange={handleChange('lastName')}
        //      defaultValue={values.firstName}
        //      />

        //     <br/>

        //     <TextField
        //      hintText="Enter Your Email"
        //      floatingLabelText="Email"
        //      onChange={handleChange('email')}
        //      defaultValue={values.email}
        //      />

        //      <br/>
        //      <RaisedButton
        //      label="Continue"
        //      primary={true}
        //      style={styles.button}
        //      onClick={this.continue}
        //      />
     
        //     </div>
             
            

        //      </React.Fragment>
        //     </MuiThemeProvider>
        //         </div>
        //     </div>

<div class="container" style={{backgroundColor:"#2c3d63",borderRadius:'20px'}}>
    <div class="row">
        <div class="row p-5" style={{backgroundColor:""}}>
            <h5 style={{color:"white",fontWeight:"bold"}}>Examples with steps UI</h5>
            <p style={{color:"#c5d6fc"}}>Follow the sample 4 steps to complete your mapping.</p>
            <hr style={{height:'2px',borderWidth:0,color:'gray',backgroundColor:'#c5d6fc'}}/>

        </div>
        

        <div class="col-md-12">
            <form>
                <div class="row">
            <div class="col-md-4">
                <Join/>
            </div>
            <div class="col-md-1 verticleline"></div>
            <div class="col-md-5 offset-md-1">
                <div class="row">
                <p style={{color:"#c5d6fc"}}>Step 5/5</p>
                <h5 style={{color:"white",fontWeight:"bold"}}>Complete submission</h5>
                <hr style={{height:'2px',borderWidth:0,color:'gray',backgroundColor:'#c5d6fc'}}/>
                </div>
                <div class="row" class="form-group">
              <label style={{color:"#f6f6f6"}} for="inputUserName">Enter your name</label>
              <input class="form-control " type="text" id="inputName" placeholder="Your name" style={{backgroundColor:"#2c3d63"}} />
          </div>
         <div class="float-right"> 
         <button type="submit" class="btn btn-link completesubbutton mt-4 mb-4 w-22 h-50 d-inline-block" type="submit">Back</button>


         <button type="submit" class="btn btn-danger mt-4 mb-4 w-22 h-50 d-inline-block" onClick={this.continue} type="submit">Complete Submission</button>
         </div>
            </div>
            </div>
            </form>
        </div>
    </div>
</div>



        
        
        )
    }
}

const styles={
button:{
    margin:15
},


}

export default CompleteSubmission
