import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data} from '../../constants' 

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant app__typing'>Today's Special</h1>
    </div>
    
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_soda flex__center'>
        <p className='app__specialMenu-menu_heading '>Fizz & Soda</p>
        <div className='app__specialMenu_menu_items'>
          {data.sodas.map((soda, index) => (
            <MenuItem key={soda.title +index}  title={soda.title} price={soda.price} tags={soda.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu img'/>
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title +index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
  
    <div style={{marginTop: '15px'}}>
          <button type="button" className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
