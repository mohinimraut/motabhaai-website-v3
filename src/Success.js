import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Success extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Success"/>
           <h1>Thank You for your submission</h1>
          <p>Thank You for your submission
 </p>
             </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles={
button:{
    margin:15
}
}

export default Success
