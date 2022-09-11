import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Producto from './Producto';
import Footer from './Footer';
function Web(){
  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Producto />
      <Footer />
    </div>
  )
}
export default Web;