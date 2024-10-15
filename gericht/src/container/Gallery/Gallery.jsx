import React from 'react';
import { BsInstagram, BsArrowRightShort,BsArrowLeftShort } from 'react-icons/bs';
import { SubHeading} from '../../components';
import { images,} from '../../constants';

import './Gallery.css';

const GalleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08,images.gallery09,images.gallery010]

const Gallery = () => {
  
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;
    if (direction === 'left'){
      current.scrollLeft -= 300 ;
    } else{
      current.scrollLeft += 300 ;
    }
    }
  return(

    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title={'instagram'}></SubHeading>
      <h1 className='headtext__cormorant app__typing'>Photo Gallery</h1>
      <p className="p__opensans" style={{color: "#aaa", marginTop:2}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum error rerum accusantium consectetur architecto dicta aspernatur quia fugit sequi quos! Doloribus possimus ut facere corporis, adipisci voluptatibus deleniti ad dolorem?</p>
      <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {GalleryImages.map((image,index) => (
            <div className="app__gallery-images_card flex__center " key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery"/>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}

        </div>

        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>

    </div>

  )
};

export default Gallery;
