// Last UpdateHome.js 22 jan 21
import React, { Component } from 'react'
import Features from './Features'
import MapSection from './components/GoogleMap/Map';
import MapSec from './components/GoogleMap/Map';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import HorizantalStepper from './HorizantalStepper';
import Join from './Join'
// import shopkeeper from '../src/images/shopkeeper.svg';
import shopkeeper from '../src/images/shopkeeper2.png';
import discover from '../src/images/discover-02.png';
import Group104 from '../src/images/Group104.png';




import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_SENDER_ID",
  appId: "process.env.REACT_APP_FIREBASE_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  let emailInfo=firebase.database().ref("infos")
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      type:'',
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
       const email=this.state.email;
       alert('A name was submitted: ' + this.state.email);
       event.preventDefault();
       this.saveEmailInfo(email);
       alert("hhhhhhhhh"+email)
      }

     //save info to Firebase
    saveEmailInfo(email){
    let newContactInfo=emailInfo.push();
    newContactInfo.set({
    email:email
    })
    }


    render() {
    

    const shops=[
      {
        lat: 19.48438,
        lng: 72.36417,
        type:"kiranas",
         text:"kiranaA",
      },
      {
        lat: 19.28363,
        lng: 72.86202,
        type:"kiranas",
         text:"Unique The Gift Store",
      },
      {
        lat: 19.28375,
        lng: 75.87605,
        type:"kiranas",
         text:"New Hanuman Kirana Store",
      },
      {
        lat: 19.27302,
        lng: 72.88037,
        type:"kiranas",
         text:"Choudhary Kirana Store",
      },
      {
        lat: 19.27878,
        lng: 72.87837,
        type:"kiranas",
         text:"New Mahadev Super Market",
      },
      {
        lat: 19.27933,
        lng: 72.86722,
        type:"kiranas",
         text:"Gokul Kirana Store",
      },
      {
        lat: 19.30909,
        lng: 72.85063,
        type:"kiranas",
         text:"Mahavir Kirana Store",
      },
      {
        lat: 19.28363,
        lng: 72.86202,
        type:"cosmetic",
         text:"Beauty Parlor A",
      },
      {
        lat: 19.28764,
        lng: 72.86624,
        type:"cosmetic",
         text:"Pramila Beauty Parlor",
      },
      {
        lat: 19.28764,
        lng: 72.86624,
        type:"groceries",
         text:"Ram Krishna Manglore Store",
      },
      {
        lat: 19.28486,
        lng: 72.85778,
        type:"dairy",
         text:"Super Dairy",
      },
      {
        lat: 19.31404,
        lng: 72.85440,
        type:"dairy",
         text:"Shrinath Dairy",
      },
      {
        lat: 19.30750,
        lng: 72.85057,
        type:"dairy",
         text:"Bhajanla Dairy",
      },
      {
        lat: 19.29417,
        lng: 72.86155,
        type:"dairy",
         text:"Nagori Dairy",
      },
      {
        lat: 19.28486,
        lng: 72.85778,
        type:"dairy",
         text:"Super Dairy",
      },
      {
        lat: 19.29167,
        lng: 72.85914,
        type:"dairy",
         text:"Sagar Dairy",
      },
      {
        lat: 19.28738,
        lng: 72.85914,
        type:"dairy",
         text:"Nagori Sufi Dairy",
      },
      {
        lat: 19.28438,
        lng: 72.86417,
        type:"kiranas",
         text:"kiranaB",
      },
      
      {
        lat: 19.27238,
        lng: 72.86210,
        type:"bakery",
         text:"Master Bakery",
      },
     
      {
        lat: 19.28428,
        lng: 72.85753,
        type:"bakery",
         text:"Bhaijaan Bakery",
      },
     
      {
        lat: 19.27229,
        lng: 72.86219,
        type:"bakery",
         text:" Sagar Bakery",
      },
      
      {
        lat: 19.28071,
        lng: 72.86993,
        type:"electrical",
         text:"Miracle Electrical Solutions India Pvt. Ltd.",
      },
      {
        lat: 19.28417,
        lng: 72.86457,
        type:"electrical",
         text:"Gaurav Electricals",
      },
     
      {
        lat: 19.28049,
        lng: 72.86221,
        type:"hardware",
         text:"Shivam Electric And Hardware Stores",
      },
      {
        lat: 19.5438,
        lng: 72.36417,
        type:"bakery",
         text:"BakeryA",
      },
      {
        lat: 19.68438,
        lng: 72.36417,
        type:"bakery",
         text:"BakeryB",
      },
      {
        lat: 19.31020,
        lng: 72.85566,
        type:"toys",
         text:"Krishna Toys",
      },
      {
        lat: 19.48438,
        lng: 72.56417,
        type:"giftshop",
         text:"giftshopA"
      },
      {
        lat: 19.28438,
        lng: 72.86417,
        type:"giftshop",
         text:"giftshopB"
      },
      {
        lat: 19.68438,
        lng: 72.46417,
        type:"cosmetic",
         text:"CosmeticA"
      },
      {
        lat: 19.8838,
        lng: 72.10417,
        type:"cosmetic",
         text:"CosmeticB"
      },
      {
        lat: 19.27975182,
        lng: 72.87821263,
        type:"groceries",
         text:"Shree Satyam Super Market",
      },
      {
        lat: 19.28185825
        ,
        lng: 72.87435025,
        type:"groceries",
         text:"Prem Super Market & Kirana Stores",
      },
      {
        lat: 19.2810886,
        lng:72.87138909,
        type:"groceries",
         text:"Ganga Super Bazaar",
      },
      {
        lat: 19.28424821,
        lng:72.87083119,
        type:"groceries",
         text:"Shree Purab Super Market",
      },
      {
        lat: 19.2842077,
        lng:72.86950081,
        type:"groceries",
         text:"Bagathome",
      },
      {
        lat: 19.28696218,
        lng:72.87151784,
        type:"groceries",
         text:"Monica Trading Company",
      },
      {
        lat: 19.2870432,
        lng:72.86628216,
        type:"groceries",
         text:"Sanjay Super Market",
      },
      {
        lat: 19.28870396,
        lng:72.86465138,
        type:"groceries",
         text:"Mahadev Super Market",
      },
      {
        lat: 19.29110353,
        lng:72.86418433,
        type:"groceries",
         text:"PURABJI TRADING",
      },
      {
        lat: 19.29040515,
        lng:72.864868,
        type:"electrical",
         text:"Snehaanjali Electronics",
      },
      {
        lat: 19.28696937,
        lng:72.868929,
        type:"electrical",
         text:"Aaksh Electronics",
      },
      {
        lat: 19.28660547,
        lng:72.86957157,
        type:"electrical",
         text:"Royal Electronics",
      },
      {
        lat: 19.28168061,
        lng:72.87522612,
        type:"electrical",
         text:"Snehanjali Electronics",
      },
      {
        lat: 19.29330111,
        lng:72.861758,
        type:"electrical",
         text:"Kohinoor",
      },
      {
        lat:19.29679438,
        lng:72.85993312,
        type:"electrical",
         text:"Soni Electronics",
      },
      {
        lat:19.29546015,
        lng:72.85885361,
        type:"electrical",
         text:"Manaal Electronics",
      },
      {
        lat:19.29244233,
        lng:72.86182154,
        type:"electrical",
         text:"Sony Showroom",
      },
      {
        lat:19.28599817,
        lng:72.86917576,
        type:"electrical",
         text:"Navkar Electronics",
      },
      {
        lat:19.27585577,
        lng: 72.87131898,	
        type:"toys",
         text:"Shree balaji stores"
      },
      {
        lat: 19.27585577,
        lng: 72.87131898,
        type:"giftshop",
        text:"Shree balaji stores"
      },
      {
        lat:19.28217573,
        lng: 72.87757322,
        type:"toys",
         text:"Welcome novelty & stationery	Gifts"
      },
      {
        lat: 19.28217573,
        lng: 72.87757322,
        type:"giftshop",
        text:"Welcome novelty & stationery	Gifts"
      },
      {
        lat:19.29495502,
        lng: 72.87757322,
        type:"toys",
         text:"Gifting Tree	Gifts & Toys"
      },
      {
        lat: 19.28217573,
        lng: 72.87757322,
        type:"giftshop",
        text:"Gifting Tree	Gifts & Toys",
      },
      {
        lat:19.28335593,
        lng: 72.87914409,
        type:"toys",
         text:"Karishma the gift shop"
      },
      {
        lat: 19.31214973,
        lng:  72.85741494,
        type:"giftshop",
        text:"Kanchan novelty Gifts & Toys"
      },
      {
        lat: 19.26133895,
        lng:  72.8658759,
        type:"toys",
        text:"new Riddhi Siddhi Enterprises	Gifts & Toys"
      },
      {
        lat: 19.26133895,
        lng:  72.8658759,
        type:"giftshop",
        text:"new Riddhi Siddhi Enterprises	Gifts & Toys"
      },
    
      {
        lat: 	19.28698677,
        lng:  72.85825315,
        type:"toys",
        text:"royal toys	Gifts & Toys"
      },
      {
        lat: 	19.28698677,
        lng:  72.85825315,
        type:"giftshop",
        text:"royal toys	Gifts & Toys"
      },
      {
        lat: 	19.28937665,
        lng:  72.85821023	,
        type:"toys",
        text:"gift valley	Gifts & Toys"
      },
      {
        lat: 	19.28937665,
        lng:  72.85821023	,
        type:"giftshop",
        text:"gift valley	Gifts & Toys"
      },
      
      {
        lat: 	19.29083487,
        lng:  72.85752359, 
 
        type:"toys",
        text:"Beautiful Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.29083487,
        lng:  72.85752359	,
 
        type:"giftshop",
        text:"Beautiful Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.29071335,
        lng:  72.85752359,
 
        type:"toys",
        text:"Daimond Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.29071335,
        lng:  72.85752359,
 
        type:"giftshop",
        text:"Daimond Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.28088779,
        lng:  72.86584634,
 
        type:"toys",
        text:"Chamunda Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.28088779,
        lng:  72.86584634,
        type:"giftshop",
        text:" Chamunda Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.27940286,
        lng:  72.86070235,
 
        type:"toys",
        text:"Ambika Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.27940286,
        lng:  72.86070235,
        type:"giftshop",
        text:"Ambika Gifts & Toys	Gifts & Toys"
      },
      {
        lat: 	19.27752425,
        lng:  72.87791222,
        type:"hardware",
        text:"Baba Hardware"
      },
      {
        lat: 	19.27776731,
        lng:  72.87872761,
        type:"hardware",
        text:"mahavir electric & hardware"
      },
      {
        lat: 	19.28056241,
        lng:  72.87718266,
        type:"hardware",
        text:"Sangam Electric & Hardware Stores"
      },
      {
        lat: 	19.28080546,
        lng:  72.87585229,
        type:"hardware",
        text:"Rajendra Electrical & Hardware"
      },
      {
        lat: 	19.28189918,
        lng:  72.8750369,
        type:"hardware",
        text:"Shree Ashapura Hardware"
      },
      {
        lat: 	19.28161562,
        lng:  72.87284821,
        type:"hardware",
        text:"Mahavir Paints & Hardware Stores"
      },
      {
        lat: 	19.28270933,
        lng:  72.87319154,
        type:"hardware",
        text:"Prakash Electric & Hardware Store"
      },
      {
        lat: 	19.286355,
        lng:  72.86920041,
        type:"hardware",
        text:"Shree Balaji Paints And Hardware Stores"
      },
      {
        lat: 	19.28801577,
        lng: 72.86731213,
        type:"hardware",
        text:"Ganesh Hardware"
      },
      {
        lat:19.29060817,
        lng: 72.86327809,
        type:"hardware",
        text:"Shree Anand Electric & Hardware Stores"
      },
      {
        lat:19.29344356,
        lng:72.86053151,
        type:"hardware",
        text:"Shree Ashapura Electric & Hardware Stores"
      },
      {
        lat:19.29895216,
        lng:72.85576791,
        type:"hardware",
        text:"Jai Bhavani Electric & Hardware Stores"
      },
      {
        lat:19.30053181,
        lng:72.85585374,
        type:"hardware",
        text:"Maharashtra Electric & Hardware Store"
      },
      {
        lat:19.28522384,
        lng:72.8740979,
        type:"cosmetic",
        text:"Sinha beauty &cosmetics"
      },
      {
        lat:19.27881313,
        lng:72.85828593,
        type:"cosmetic",
        text:"Khwaish Art Jewellary	Beauty Cosmatics"
      },
      {
        lat:19.27895776,
        lng:72.85846247	,
        type:"cosmetic",
        text:"Beauty Essential Beauty Cosmatics"
      },
      {
        lat:19.27944825,
        lng:72.85820266,
        type:"cosmetic",
        text:"Aara Beauty Center Beauty Cosmatics"
      },
      {
        lat:19.27895462,
        lng:72.86038108,
        type:"cosmetic",
        text:"Jai Ambe Beauty Shop Imitation Cosmetic"
      },
      {
        lat:19.30374,
        lng:72.86568,
        type:"cosmetic",
        text:"Anmol Bakery"
      },
      {
        lat:19.29771,
        lng:72.86903,
        type:"bakery",
        text:"Bangalore Iyengar bakery"
      },
      {
        lat:19.28601,
        lng:72.86157,
        type:"bakery",
        text:"Gani Bakery"
      },
      {
        lat:19.28265,
        lng:72.86756,
        type:"bakery",
        text:"Anand Bakery"
      },
      {
        lat:19.27233,
        lng:72.86210,
        type:"bakery",
        text:"Master Bakery & General Store"
      },
    ]
    
    
        return (
      

<div class="container-fluid" style={{height:"6000px"}}>
  {/* 3***change */}
  <div class="homecontainer" style={{}}>  
  <div id="carouselExampleDark" className="carousel carousel-dark slide homecarousel" data-bs-ride="carousel">

<ol className="carousel-indicators" id="home">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    </ol>
  <div class="row justify-content-center text-center">
  <div className="carousel-inner">




  <div className="carousel-item active" data-bs-interval="5000">
      <div class="row" style={{paddingTop:"2%"}}>
<p id="homenewtitle">Free digital platform</p>
      </div>
     
<div class="row">
<p style={{color:"#555555"}} id="homesubtitle">
sellers to promote,manage & sell their goods and services
</p>
</div>
<div id="learnregister" class="row justify-content-center text-center" style={{paddingTop:"27px"}}>
       <div class="col-2" style={{paddingLeft:"5%"}}>
         {/* 3***change */}
        <button id="learnmore" style={{border:"1px solid orange"}} type="button" class="btn btn-default" >Learn More</button>
       </div>
       <div id="homeregisterbutton" class="col-2 " style={{paddingRight:"5%"}} >
           {/* 3***change */}
        <button id="register" style={{backgroundColor:"#2c3d63",border:"1px solid #FADA80",}} type="button" class="btn btn-primary">Register</button>
       </div>
      </div>

</div>

<div className="carousel-item" data-bs-interval="5000">
      <div class="row" style={{paddingTop:"2%"}}>
<p id="homenewtitle">Free digital platform</p>
      </div>
     
<div class="row">
<p style={{color:"#555555"}} id="homesubtitle">
sellers to promote,manage & sell their goods and services
</p>
</div>
<div id="learnregister" class="row justify-content-center text-center" style={{paddingTop:"27px"}}>
       <div class="col-2" style={{paddingLeft:"5%"}}>
     
        <button id="learnmore" style={{border:"1px solid orange"}} type="button" class="btn btn-default" >Learn More</button>
       </div>
       <div id="homeregisterbutton" class="col-2 " style={{paddingRight:"5%"}} >
       
        <button id="register" style={{backgroundColor:"#2c3d63",border:"1px solid #FADA80",}} type="button" class="btn btn-primary">Register</button>
       </div>
      </div>

</div>




</div></div>
</div>

<div id="webfooter" class="row justify-content-center" style={{marginTop:"100px",position:"relative",top:130}}>
       <div class="col-md-6 "style={{marginTop:"100px",borderRadius:"20px", border:"3px solid #FADA80"}} id="flotbox">

       <div class="row justify-content-center">
       <div class="col-5">
       <div class="row justify-content-center" style={{ marginTop:17}}>
         <p style={{fontFamily:"Roboto",color:"#2C3D63",fontSize:"20px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline"></ion-icon> Launching On</p>
       </div>
       <div class="row justify-content-center">
        <p id="april2021" style={{color:"#2C3D63",fontWeight:"bold"}}>April 2021</p>
       </div>
      </div>


      <div id="webbluefoot" class="col-md-7" style={{borderRadius:"19px",border:"1px solid #2c3d63",backgroundColor:"#2c3d63",marginRight:"-0.5%"}}>

        <form onSubmit={this.handleSubmit}> 
      <div class="row justify-content-center text-center" >
       <p style={{fontFamily:"Comfortaa",color:"white",fontSize:"20px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline" style={{color:"white"}}></ion-icon> Stay Notified</p>
      </div> 
         
    <div class="row justify-content-center">
       <div class="col-md-10">
        <div id="webemailinput" class="row justify-content-center text-center" style={{}}>
        
        <div class="col-md-9">
        <input type="text" value={this.state.email} onChange={this.handleChange}  class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
          </div> 
          
             <div class="col-md-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
        <button style={{fontFamily:"Comfortaa",backgroundColor:"#fada80",border:"1px solid #fada80",borderRadius:20, width:"4rem", justifyContent:"center",marginRight:"15%"}} type="submit" value="Submit" class="btn btn-primary">
       
       
       <i id="arrowforward" class="fa fa-arrow-circle-right">   </i>
      
       </button>
        </div>
      
        </div>

      
       </div>
            
    </div>
</form>

   </div>









  </div>
 </div>

</div>



{/* 3***change */}
<div id="mobilehomefooter" style={{marginTop:"100px",marginBottom:"20px"}} >
<div class="col-md-6 "style={{marginTop:"100px",borderRadius:"20px", border:"3px solid #FADA80",}} id="flotbox">

       <div class="row justify-content-center text-center">
         <p id="launcht" style={{fontFamily:"Comfortaa",color:"#2c3d63",fontWeight:"bold", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline"></ion-icon> Launching On</p>
       </div>
       <div class="row justify-content-center text-center" >
        <p id="aprilmob" style={{fontWeight:"bold",color:"#2c3d63"}}>April 2021</p>
       </div>
      
</div>


 <div id="mobilebluefooter" class="col-md-6" style={{borderRadius:"20px",border:"1px solid #2c3d63",backgroundColor:"#2c3d63",marginTop:"40px"}}>
 <form id="homemobileform" onSubmit={this.handleSubmit}> 
      <div class="row" >
       <p style={{fontFamily:"Comfortaa",color:"white",fontSize:"12px", margin:"10px",marginLeft:"1rem"}}><ion-icon id="launchicon" name="cash-outline" style={{color:"white"}}></ion-icon> Stay Notified</p>
      </div> 
      <div class="row justify-content-center text-center" style={{paddingBottom:"2%",marginTop:"-5px"}} >
        <div class="col-9">
        <input type="text" value={this.state.email} onChange={this.handleChange} class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
          </div>  
          <div class="col-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
            {/* 3***change */}
        <button id="homearrowbutton" style={{fontFamily:"Comfortaa",backgroundColor:"#fada80",border:"1px solid #fada80",borderRadius:20,justifyContent:"center",marginRight:"-15%"}} type="submit" value="Submit" class="btn btn-primary">
       
       
       <i id="arrowforward" class="fa fa-arrow-circle-right">   </i>
      
       </button>
     
          </div>
      </div>  

</form>


   </div>

</div>





  </div>
  
  



{/* =================================================About us Module=========================================== */}
<div id="aboutcontainer" className="container-fluid">
<div className="row" id="sidehead">About us</div>
<div className="row" id="sidebottom"></div>
<div className="row justify-content-center" id="aboutmaincont">
 <div className="col-lg-6">
     <div className="row justify-content-center">
     <div className="card" id="cardabout">
     <div className="card-body">
        <p id="aboutparam1">The power to setup a Business, not just a shop</p>
        <p id="aboutparam2">With Motabhaai, you manage order, inventory, and 'khatas' from your phone. Plus, you can send digital receipts and payments notifications via WhatsApp. and create an online store to sell you products to anyone, anywhare.</p>
        <a href="/about us" className="btn" id="aboutbtn">Read More</a>
       </div>
      </div>
     </div>
 
 </div>
 <div className="col-lg-6">
 <img  id="motabhimg" src={discover} className="card-img-top" alt="home img"/>
</div>
</div>
</div>
{/* =================================================Reasons Module=========================================== */}
<div className="container-fluid">
<div className="row" id="sidehead">Reasons</div>
<div className="row" id="sidebottom"></div>
<div className="row justify-content-center" id="reasonmaincont">
 <div className="col-lg-6">
     <div className="row justify-content-center">
     <div id="cardreason">
     <div className="card-body">
        <p id="reasonparam1">Run your business 24x7</p>
        <p id="reasonparam2">Sell to your local customers round the clock, even when your brick and mortar store is closed or let them browse through your catalog and schedule their orders.</p>
     </div>
     </div>
 </div>
 </div>
 <div className="col-lg-6">
 <img  id="motabhimg" src={discover} className="card-img-top" alt="home img"/>
</div>
</div>
<div className="row justify-content-center" style={{fontSize:"2rem", marginTop:55}}>Benefits</div>
<div className="row justify-content-center" id="benefitrc">
 <div className="col-lg-3">
   <div className="row justify-content-center">
   <div className="card" id="cardreason1">
      <div className="card-body">
        <p id="reasonparam3">Run Flash sales</p>
        <p id="reasonparam4">Clear out your seasonal inventory online and make room for fresh in demand products in your shop.</p>
      </div>
      <span className="circle"><svg id="benefiticon" xmlns="http://www.w3.org/2000/svg"  fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
   </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn">
  <div className="row justify-content-center">
    <div className="card" id="cardreason2">
      <div className="card-body">
        <p id="reasonparam5">Increase your profit margins</p>
        <p id="reasonparam6">Sell more units of your best selling products by selling it in store and online.</p>
      </div>
      <span className="circle1"><svg id="benefiticon1" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn1">
  <div className="row justify-content-center">
    <div className="card" id="cardreason3">
      <div className="card-body">
        <p id="reasonparam7">Be even more discoverable</p>
        <p id="reasonparam8">Clear out your seasonal inventory online and make room for fresh in demand products in your shop.</p>
      </div>
      <span className="circle2"><svg id="benefiticon2" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn2">
  <div className="row justify-content-center">
    <div className="card" id="cardreason4">
      <div className="card-body">
        <p id="reasonparam9">Get repeat purchase</p>
        <p id="reasonparam10">Let customers who love your products buy them again easily, right from their home.</p>
      </div>
      <span className="circle3"><svg id="benefiticon3" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
</div>
</div>








{/* Feature container */}


<div style={{marginTop:"5rem"}}>
<Features/>
</div>

{/* Activities */}
<div style={{marginTop:"5rem"}}>
    {/* <MapSection location={location}/> */}
    <MapSection shops={shops} style={{}}/>
  
</div>
  
  {/*============================Inspiration====================================*/}
<div id="aboutcontainer" className="container-fluid">
<div className="row" id="sidehead">Inspiration</div>
<div className="row" id="sidebottom"></div>
<div class="row justify-content-center text-center" >
  <p id="Inspirationhead">Meet the people who inspire us!</p>
</div>
<div class="row justify-content-center text-center">
  <p id="Inspirationpara" style={{color:"#2C3D63"}}>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div className="row justify-content-center" id="Inspirationmaincont">
<div class="container-fluid">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="row justify-content-center text-center">
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-5">
 <img id="Inspirationimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-6">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">Heina Sheikh</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            Meet Heina Sheikh our Motibehen, If you ever come across her store you will surely be greeted
with a warm “hello”. Though her store is only 5 months old, Heina ben has made sure to mark her
spot with over 150 customers visiting her store each day! When you walk into Mira Bazar, you can
be sure to expect a wholesome service!
            </p>
          </div>
        </div>
      </div>  
</div>

<div className="carousel-item" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-5">
 <img id="Inspirationimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-6">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">Dilip Bhai</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            Our very own Dilip Bhai has been in the game for a long long time and only recently shifted to
Mira Road with his store “Mother & Baby.” He along with his two superstar employees has
managed to offer several services to their customers, one of them being free delivery!
            </p>
          </div>
        </div>
      </div>  
</div>


<div className="carousel-item" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-5">
 <img id="Inspirationimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-6">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">Aarti Ben</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            Aarti Ben is our superwoman, who started her shop, “JSG Supermarket,” five months back
during the lockdown. From then to now she has managed to attract the hearts of several
customers with her customisable gift hampers. She has created an online presence for herself
with hundreds of insta hearts!
            </p>
          </div>
        </div>
      </div>  
</div>


<div className="carousel-item" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-5">
 <img id="Inspirationimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-6">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">Elvis Bhai</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            Elvis Bhai the manager at “Amazing Grace,” is the bhai of all bhais! He runs a cold storage
facility in Mira Road, along with providing Specialized foods from Kerela. And it just doesn’t end
there, he even consults on any kind of Civil, interior, electrical works. An expert marketing
manager from MNC, he now wears many hats proudly. , he is and all-round solutions provider!
You can ask him anything you want and you will be sure to receive a solution!
            </p>
          </div>
        </div>
      </div>  
</div>

      <a class="carousel-control-prev" href="carouselExampleControls" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>

  
 
  {/* <div>
<div id="registerwebview" class="registercontainer" style={{marginTop:'15%',borderBottom:"5%",height:"360px",backgroundColor:"#FADA8033"}}>
  <div class="container">

    <div  class="row">
      <div id="registertitletextcotainer" class="col-lg-6">
        <div class="row">
        <p id="registertitle" style={{color:"#5C343C",fontFamily:"Roboto"}}>Register</p>
        </div>
        <div class="row">
        <p style={{color:"#5C343C",fontFamily:"Roboto",fontSize:"30px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        </div>
      </div>
      <div id="registercard" class="col-lg-6" style={{backgroundColor:"#5C343C",borderRadius:"20px"}}>
      <div class="row">
        <p id="motabhaaisambhal" style={{ color:"#FEF8E6",fontSize:"30px"}}>#Motabhaai Sambhaalega</p>
        </div>
        <div class="row">
        <div class="row">
        <p id="registermotabhaitext" style={{color:"#FEF8E6",fontFamily:"Roboto",textAlign:"center",fontSize:"25px"}}>It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</p>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div id="registermobileview" style={{backgroundColor:"#FADA8033"}}>

  <div class="row justify-content-center" >
  <div class="col-md-9">

<div class="row">
  <p style={{color:"#5C343C", fontSize:"40px"}}>Register</p>
  
</div>
<div class="row">
  
<p style={{fontSize:"22px"}}>Contrary to popular belief, Lorem Ipsum<br/>is not simply random text.</p>
</div>

</div>
  </div>



<div  class="row justify-content-center text-center">
<div class="col-md-9" id="mobileregistercardview">
<div class="row">
   
    <p style={{fontSize:"30px",color:"#FEF8E6" , marginTop:"10%"}}>#Motabhaai Sambhaalega</p>
  </div>
  <div class="row">
    <p style={{fontSize:"18px",color:"#FEF8E6", marginTop:"13%"}}>It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</p>
  </div>
</div>
</div>
</div>
</div>


 */}


<div class="container-fluid"  id="registerco" style={{backgroundColor:"#FADA8033"}}>
  <div id="registeralldevicesnottab" class="row">
    <div id="regfhalf" class="col-md-6" style={{}}>
      <div class="row">
        <div class="row"><p id="webnweregister" style={{color:"#5C343C"}}>Register</p></div>
        <div class="row"><p id="websubnewtext" style={{color:"#5C343C"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p></div>
      </div>
      
      </div> 

    <div id="regshalf" class="col-md-6">
    <div id="cardreg" class="row" style={{backgroundColor:"#5C343C"}}>
        <div class="row justify-content-center text-center"><p id="mwebsam" style={{color:"#FEF8E6"}}>#Motabhaai Sambhaalega</p></div>
        <div class="row justify-content-center text-center" id="mwebsubtext"><p>It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</p></div>
      </div>
      
      </div> 
  </div>


  <div id="registertabview" class="row justify-content-center text-center" style={{borderRadius:"2rem"}}>
    
  
    <div id="ipadregister" class="row"><p>Register</p></div>
    
    <div id="ipadregistertext" class="row"><p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p></div>

    <div  class="row justify-content-center text-center">
<div class="col-md-9" id="ipadcardvieww" style={{backgroundColor:"#5C343C"}}>
<div id="ipadmotabahisabhal" class="row justify-content-center text-center">#Motabhaai Sambhaalega </div>

<div id="ipadcardtext" class="row justify-content-center text-center">It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</div>
</div>



    </div>

</div>


</div>





 
<div id="footertopdiv">
<div class="footercontainer" style={{backgroundColor:"#2C3D63"}}>
<div id="footernonemobile" class="row">
<div id="leftsubscribecontainer" class="col-6" >
<div class="row" >
<div id="footersubscribe" class="row">Subscribe</div>
<div id="footerfirstsubtitle" class="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
<div id="footerinput" class="row">
<form onSubmit={this.handleSubmit}> 
<div class="row">
<div class="col-md-9">
<div class="row">
<div class="col-md-9">
<input id="footeremailinput" type="email" value={this.state.email} onChange={this.handleChange}  class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
</div> 
 <div class="col-md-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
<button style={{fontFamily:"Comfortaa",backgroundColor:"#ADDCCA",border:"1px solid #fada80",borderRadius:20, width:"4rem", justifyContent:"center",marginRight:"15%"}} type="submit" value="Submit" class="btn btn-primary">
<i id="arrowforward" class="fa fa-arrow-circle-right"></i>
</button>
</div>

</div>
</div>
</div>
</form>
</div>
</div>
  </div>
  <div className="col-lg-6">
 <img  id="motabhimgnew" src={discover} className="card-img-top" alt="home img"/>
</div>

</div>
    
<div className="row justify-content-center" id="footerconsec">
  <div className="col-lg-3">
    <div className="row justify-content-center">
      <div col-lg-6 >
       <img  id="footerimg" src={Group104} className="card-img-top" alt="home img" style={{width:"12rem",}}/>
       </div>
      <div col-lg-6 >
        <p style={{color:"#5F7096"}} id="footerparam">
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable".
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="row">
    <div className="col" id="footercolsec">
  <div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Features</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Transaction</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Inventory</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Orders</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Account</p>
</div>
  </div>
<div className="col" id="footercolsec1">
<div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Resources</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Blogs</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Article</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Social</p>
</div>
</div>
<div className="col" id="footercolsec2">
<div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Company</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>About</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Privacy</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Vendor partners</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Team</p>
</div>
</div>
</div>

</div>
  <div className="col-lg-3" id="footercolsec3">
  <div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}> <ion-icon name="call" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> 7598453210</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}> <ion-icon name="pin" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> mira road, thane, maharastra 401107</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>  <ion-icon name="mail" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> Hello@motabhaai.com</p>
</div>
<div className="row justify-content-center">
  <div className="col"><ion-icon name="logo-instagram" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> </div>
  <div className="col"><ion-icon name="logo-facebook" style={{color:"#ADDCCA", fontSize:30}}></ion-icon></div>
  <div className="col"><ion-icon name="logo-twitter" style={{color:"#ADDCCA", fontSize:30}}></ion-icon></div>
</div>
  </div>
</div>



</div>
  </div>
</div>


        
        
        )
    }
}





export default Home;
