import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Join from './Join'
export class FormPersonalDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values,handleChange} = this.props;
        return (
      

<div class="container" style={{backgroundColor:"#2c3d63",borderRadius:'20px'}}>
    <div class="row">
        <div class="row p-5" style={{backgroundColor:""}}>
            <h5 style={{color:"white",fontWeight:"bold"}}>Examples with steps UI Describes</h5>
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
                <div>
                <div class="row">
                <p style={{color:"#c5d6fc"}}>Step 2/5</p>
                <h5 style={{color:"white",fontWeight:"bold"}}>What best describes you?</h5>
                <p style={{color:"#c5d6fc"}}>Please let us know what type of business describes you</p>
                <hr style={{height:'2px',borderWidth:0,color:'gray',backgroundColor:'#c5d6fc'}}/>
                </div>
                <div class="row" class="form-group">
              <label style={{color:"#f6f6f6"}} for="inputUserName">New Business</label>
              <input class="form-control " type="text" id="inputName" placeholder="Started trading within the last 12 months" style={{backgroundColor:"#2c3d63"}} />
          </div>

          <div class="row " class="form-group pt-3">
              <label style={{color:"#f6f6f6"}} for="inputUserName">Existing Business</label>
              <input class="form-control " type="text" id="inputName" placeholder="Have been operating beyond 12 months." style={{backgroundColor:"#2c3d63"}} />
          </div>
     </div>
     
         <div class="float-right"> 
         

         <button type="submit" class="btn btn-danger mt-4 mb-4 w-22 h-50 d-inline-block" onClick={this.continue} type="submit">Next step</button>
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

export default FormPersonalDetails;
