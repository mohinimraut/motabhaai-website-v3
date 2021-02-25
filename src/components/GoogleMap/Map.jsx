import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
import './map.css'
import mapStyles from "./mapStyles";

const Map = ({shops, zoomLevel }) => {
    const [type, setType] = useState('');
    
    function selectShop(type) {
        setType(type)
        console.log("aaaaaaaaaaaaaaaaaaaaai"+type);
      }

    console.log("location sunday: ",shops);
        const defaultProps = {
            
        center: {
            lat: 19.28714,
            lng: 72.86884
        },
        zoom: 15
    };
    const options={
      styles:mapStyles,
      disableDefaultUI: true,
      draggable: true,
      keyboardShortcuts: false,
      scaleControl: true,
      scrollwheel: true,
  };
 
   
    return (
        <div className="map" style={{backgroundColor:"#2C3D6333",overflow:"hidden"}}>
<div id="motabahiheadtitle">
<div class="row">  <p id="mapmotabhaai" style={{color:"#2C3D63"}}>Motabhaai's</p> </div>
 <div class="row"><p id="mapmotabhaaisecond" style={{color:"#2C3D63"}}>of Mira Bhayander</p></div>
 <div class="row"> <p id="mapmotabhaaithird" style={{color:"#2C3D63"}}>The good, The best and the superstar!</p> </div>
</div>

            <div className="google-map" style={{borderRadius:"30px",overflow:"hidden"}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{key:"process.env.GOOGLE_API_KEY"}}
                    bootstrapURLKeys={{key:'AIzaSyDcxe_iN11f0cp88emtxk7RH0U-DfJx5BM'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{options}}
                >

   


                   
{shops.map(item => {
    console.log("statetypeconsole======",item.type)
    console.log("state............x",type)
    // const itemd = item.filter(item => item.type === type)
    if(item.type===type){
        return (
            <LocationPin 
            // onClick={}
           
             
                lat={item.lat}
                lng = {item.lng}
                text = {item.text}
                type={item.type}
                name={item.name}
            />
        )

    }
	
    
})}


<table style={{backgroundColor:"#556577",opacity:'2'}}  id="maptableweb">
  <thead>
    <tr style={{height:"3rem"}}>
   
      <th style={{color:"#fff"}} class="tdf" scope="col">Type</th>
      <th style={{color:"#fff"}} class="tds" scope="col">No of shop</th>
     
    </tr>
  </thead>
  <tbody>
  
    <tr class="tdwebrow">
   
    <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td style={{color:"#FFFFFF"}} class="tds">34</td>
     
    </tr>
    <tr class="tdwebrow">
  
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td style={{color:"#FFFFFF"}} class="tds">04</td>
     
    </tr>
    <tr class="tdwebrow">
     
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td style={{color:"#FFFFFF"}} class="tds">12</td>
     </tr>
     <tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td style={{color:"#FFFFFF"}} class="tds">05</td>
</tr>
<tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td style={{color:"#FFFFFF"}} class="tds">08</td>
</tr>
<tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td style={{color:"#FFFFFF"}} class="tds">20</td>
</tr>
<tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td style={{color:"#FFFFFF"}} class="tds">25</td>
     </tr> 
     <tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td style={{color:"#FFFFFF"}} class="tds">27</td>
</tr>
<tr class="tdwebrow">
      <td style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td style={{color:"#FFFFFF"}} class="tds">13</td>
    </tr>
  </tbody>
</table>



                </GoogleMapReact>
              
            </div>
            <table class="table" id="maptablemob">
  <thead>
    <tr style={{}}>
   
      <th className="tdmodulehead" scope="col">Type</th>
      <th id="mobshop" className="tdmodulehead" scope="col">No of shop</th>
     
    </tr>
  </thead>
  <tbody>
  
    <tr>
   
    <td className="tdmodule" onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td className="tdmodule">34</td>
     
    </tr>
    <tr>
  
      <td className="tdmodule" onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td className="tdmodule">04</td>
     
    </tr>
    <tr>
     
      <td className="tdmodule" onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td className="tdmodule">12</td>
     </tr>
     <tr>
      <td className="tdmodule" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td className="tdmodule">05</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td className="tdmodule">08</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td className="tdmodule">20</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td className="tdmodule">25</td>
     </tr> 
     <tr>
      <td className="tdmodule" onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td className="tdmodule">27</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td className="tdmodule">13</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Map;
