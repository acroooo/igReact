import React from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="ig">
    {/* Header */}
      <div className="ig__header">
        <img 
          className="ig__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logoIg"
        />
      </div>
    {/* Posts */}
      <Post username="persistent.dev" caption="it Works" imgUrl="https://i1.wp.com/esferacreativa.com/wp-content/uploads/2020/05/imagenes-para-redes-sociales-medidas-MadridNYC.png?resize=702%2C459&ssl=1" />
      <Post username="persistent.dev" caption="it Works" imgUrl="https://i1.wp.com/esferacreativa.com/wp-content/uploads/2020/05/imagenes-para-redes-sociales-medidas-MadridNYC.png?resize=702%2C459&ssl=1" />
      <Post username="persistent.dev" caption="it Works" imgUrl="https://i1.wp.com/esferacreativa.com/wp-content/uploads/2020/05/imagenes-para-redes-sociales-medidas-MadridNYC.png?resize=702%2C459&ssl=1" />
    </div>
  );
}

export default App;
