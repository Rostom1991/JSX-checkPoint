import React from 'react'
import './Style.css';
import imgsrc from "../imageInSrc.jpg"

function App() {
  return (
    <div>
      <div style = {{ border:"solid 1px black", maxWidth:"100vw" }}>


    

      <h1 className="title red">Rostom Mathlouthi</h1>

      <br />

      <img src={imgsrc} alt="" />

      <br />

      <img src="/imageInPublic.jpg" alt="" />

      </div>
      

          <video width={320} height={240} controls>



<source src="/MyVideo.mp4" type="video/mp4" />

   </video>        
     
 </div> 
 )}
      export default App
