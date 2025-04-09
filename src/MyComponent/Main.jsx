// ========================
// Main.jsx - Coffee Shop Main Component
// ========================

import React from 'react';
import './CSS/Main.css'; // Main stylesheet

// ========================
// Importing Images
// ========================
import img from './IMAGE/coffee.png';
import img1 from './IMAGE/coldbrew.png';
import img2 from './IMAGE/aeropress.png';
import img3 from './IMAGE/french.png';
import img4 from './IMAGE/pourover.png';
import img5 from './IMAGE/coffee1.png';
import img6 from './IMAGE/coffee2.png';
import img7 from './IMAGE/espresso.png';
import img8 from './IMAGE/americano.png';
import img9 from './IMAGE/latte.png';
import img10 from './IMAGE/capuccino.png';
import img11 from './IMAGE/macchiato.png';
import img12 from './IMAGE/moccha.png';
import img13 from './IMAGE/flatwhite.png';
import img14 from './IMAGE/coldbrew1.png';
import img15 from './IMAGE/iced.png';
import img16 from './IMAGE/affogato.png';

// ========================
// Main Functional Component
// ========================
export default function Main() {
  return (
    <>
      {/* Bootstrap Carousel for Hero Banners */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="coffee banner" id="photo" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="coffee variant" id="photo1" />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="coffee beans" id="photo2" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Static Images (Cold Brew, AeroPress, French Press, Pour Over) */}
      <img src={img1} alt="cold brew" className="image1" />
      <img src={img2} alt="aeropress" className="image2" />
      <img src={img3} alt="french press" className="image3" />
      <img src={img4} alt="pour over" className="image4" />

      {/* Coffee Item Cards (Product List) */}
      <div className="container">
        <img src={img7} alt="espresso" className="imgbox" />
        <h3>Name: Espresso</h3>
        <h3>Description: A strong and rich coffee shot served in a small cup. The base of many coffee drinks.</h3>
        <h3>Price: $2.00</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img8} alt="americano" className="imgbox" />
        <h3>Name: Americano</h3>
        <h3>Description: Espresso diluted with hot water giving it a similar strength to drip coffee with a richer flavor.</h3>
        <h3>Price: $2.50</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img9} alt="latte" className="imgbox" />
        <h3>Name: Latte</h3>
        <h3>Description: A smooth blend of espresso and steamed milk with a light layer of foam.</h3>
        <h3>Price: $3.50</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img10} alt="cappuccino" className="imgbox" />
        <h3>Name: Cappuccino</h3>
        <h3>Description: Equal parts espresso, steamed milk, and milk foam. Creamy and bold and hot.</h3>
        <h3>Price: $3.50</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img11} alt="macchiato" className="imgbox" />
        <h3>Name: Macchiato</h3>
        <h3>Description: Espresso "stained" with a small amount of milk or foam. Strong and flavorful.</h3>
        <h3>Price: $3.00</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img12} alt="mocha" className="imgbox" />
        <h3>Name: Mocha</h3>
        <h3>Description: A delicious mix of espresso, chocolate, and steamed milk. Topped with whipped cream.</h3>
        <h3>Price: $4.00</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img13} alt="flat white" className="imgbox" />
        <h3>Name: Flat White</h3>
        <h3>Description: Espresso with velvety steamed milk, known for its smooth texture and rich flavor.</h3>
        <h3>Price: $3.75</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img14} alt="cold brew" className="imgbox" />
        <h3>Name: Cold Brew</h3>
        <h3>Description: Coffee brewed slowly with cold water over several hours. Smooth and less acidic.</h3>
        <h3>Price: $4.50</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img15} alt="iced coffee" className="imgbox" />
        <h3>Name: Iced Coffee</h3>
        <h3>Description: Regular brewed coffee served over ice. Refreshing and light with lots of ice.</h3>
        <h3>Price: $3.00</h3>
        <button className="btn" type="submit">Buy</button>
      </div>

      <div className="container">
        <img src={img16} alt="affogato" className="imgbox" />
        <h3>Name: Affogato</h3>
        <h3>Description: A dessert-style coffee: a scoop of vanilla ice cream topped with hot espresso.</h3>
        <h3>Price: $4.50</h3>
        <button className="btn" type="submit">Buy</button>
      </div>
    </>
  );
}
