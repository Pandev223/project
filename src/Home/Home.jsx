import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="">
      <section className='homeSection'>
        <div className="imgHomeContainer">
          <img src="/src/assets/pic2.png" alt="" />
        </div>
        <h3>Beats Solo</h3>
        <h2>Wireless</h2>
        <h1>HEADPHONE</h1>
        <div className="footerHomeSection">
          <button>Shop By Catergory</button>
          <div className="textHomeContainer">
            <h4>Description</h4>
            <p> There are mainy variations passage of<br /> Lorem, ipsum aviable, but the majority <br />have suffered attaction</p>
          </div>
        </div>
      </section>
      <div className="deviceContainer">
<div className="productCardContainer">
  <div className="productCard">
    <div className="textProductContainer">
      <h4>Enjoy</h4>
      <h2>With</h2>
      <h1>EARPHONE</h1>
      <button type="button">Browse</button>
      <img src="" alt="" />
    </div>


  </div>
</div>

      </div>
    </div>

  )
}

export default Home
