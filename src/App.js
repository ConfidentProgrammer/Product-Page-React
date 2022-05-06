import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousal from './Components/Carousal/Carousal';
import Description from './Components/Description/Description';
import React, { Component }  from 'react';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className='container-fluid'>
     <div className='row row-container'>
       <div className='c2 col-sm-12 col-xs-12 col-md-6 col-lg-6'>
       <Carousal />
       </div>
   
   <div className='c1 col-sm-12 col-xs-12 col-md-6 col-lg-6'>
   <Description />
</div>
    
    </div>
   </div>

    </div>
  );
}

export default App;
