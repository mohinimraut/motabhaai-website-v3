import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values:{firstName,lastName,email,occupation,city,bio},handleChange} = this.props;
        return (
            <div class="container" style={{}}>
               
                  
                <div class="col-md-3" style={{border:"2px solid #D3D3D3"}}>
            <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Confirm User Data"/>
             
            <List>
                <ListItem
                primaryText="First Name"
                secondaryText={firstName}
                />
                <ListItem
                primaryText="Last Name"
                secondaryText={lastName}
                />
                <ListItem
                primaryText="Email"
                secondaryText={email}
                />
                <ListItem
                primaryText="Occupation"
                secondaryText={occupation}
                />
                <ListItem
                primaryText="City"
                secondaryText={city}
                />
                 <ListItem
                primaryText="Bio"
                secondaryText={bio}
                />
            </List>
             <RaisedButton
             label="Confirm & Continue"
             primary={true}
             style={styles.button}
             onClick={this.continue}
             />
             <RaisedButton
             label="Back"
             primary={false}
             style={styles.button}
             onClick={this.back}
             />
             </React.Fragment>
            </MuiThemeProvider>
            </div>
            </div>
        )
    }
}

const styles={
button:{
    margin:15
}
}

export default Confirm
