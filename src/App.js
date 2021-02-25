import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Features from './Features'
import Join from './Join'
import UserForm from './UserForm'

import Navbar from './Navbar'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Home } from './Home'

const App=()=> {
    return (
       <>
       <Navbar/>
       <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/contact" component={Contact}/> 
          <Route exact path="/about" component={About}/> 
          <Route exact path="/features" component={Features}/> 
          <Route exact path="/UserForm" component={UserForm}/> 

          <Redirect to="/"/>
       </Switch>
      
       </>
    )
}

export default App
