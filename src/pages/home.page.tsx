import React, { ReactElement } from 'react'

import bannerMain from '../assets/images/banner/banner-main.png'
import bannerSecondary from '../assets/images/banner/banner-secondary.png'

import card_1 from '../assets/images/icons/icon-4.svg'
import card_2 from '../assets/images/icons/icon-3.svg'
import card_3 from '../assets/images/icons/icon-2.svg'

import image1 from '../assets/images/img-card-1.png'
import image2 from '../assets/images/img-card-2.png'
import image3 from '../assets/images/img-card-3.png'
import image4 from '../assets/images/img-card-4.png'
import image5 from '../assets/images/img-card-5.png'
import image6 from '../assets/images/img-card-6.png'

import Navbar from '../components/navbar.component'
import Banner from '../components/banner.component'
import BoxContent from '../components/box-content.component'
import Card from '../components/card.component'

const HomePage: React.FC = (): ReactElement => {
   return (
      <div>
         <Navbar />
         <Banner className="banner-img" source={bannerMain}>
            <div className="banner-content">
               <h2 className='banner-title'>Tu asesor de belleza a domicilio</h2>
            </div>
            <p className='banner-description'>Sericios de peluqueria, maquillaje, unas y estetica.</p>
            <p className='banner-description'>Productos imprescindibles.</p>
            <p className='banner-description'>En cualquier lugar, en cualquier lugar momento.</p>
            <BoxContent />
         </Banner>
         <Banner className='banner-img-section' classNameLayout="l-banner-section" source={bannerSecondary}>
            <div className="content">
               <p className='title'>Tienda online</p>
               <p className='description'>Accede a los productos de belleza utilizados por los mejores profesionales.</p>

               <button className='button'>
                  comprar ahora
               </button>
            </div>
         </Banner>

         <section className='l-section'>
            <div className='section container'>
               <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque!</p>
               </div>
               <div className='section-grid'>
                  <Card source={card_1} title='Tu belleza' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nihil. Hic atque odit veritatis necessitatibus delectus est minima ad! Enim.' />
                  <Card source={card_2} title='Tu disponibilidad y ubicacion' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nihil. Hic atque odit veritatis necessitatibus delectus est minima ad! Enim.' />
                  <Card source={card_3} title='Nuestros profesionales' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nihil. Hic atque odit veritatis necessitatibus delectus est minima ad! Enim.' />
               </div>
            </div>
         </section>

         <section className='l-card'>
            <div className='section container'>
               <div className='section-card'>
                  <Card 
                     source={image1} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.' 
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header'
                  />
                  <Card 
                     source={image2} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.'
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header' 
                  />
                  <Card 
                     source={image3} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.' 
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header'
                  />
                  <Card 
                     source={image4} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.' 
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header'
                  />
                  <Card 
                     source={image5} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.' 
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header'
                  />
                  <Card 
                     source={image6} 
                     title='Peluqueria' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit eum similique et qui eligendi dolore ratione amet quaerat a.' 
                     message='Contactar'
                     classNameTitle='card-variant-title'
                     classNameDescription='card-variant-description'
                     classNameHeader='card-variant-header'
                  />
               </div>
            </div>
         </section>
      </div>
   )
}

export default HomePage
