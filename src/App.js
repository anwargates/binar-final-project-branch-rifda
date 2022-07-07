
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/EarlyNavbar';
import Buyer from './Pages/Buyer'
import InfoPenawaran from './Pages/InfoPenawaran';
import Seller from './Pages/Seller'

const App = ()  => {

  return (
   <div className="app_container">
    <BrowserRouter>
     <Routes>
       <Route path ="/" element={<Buyer/>}/>
       <Route path ="/infopenawaran" element={<InfoPenawaran/>}/>
       <Route path ="/seller" element={<Seller/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
