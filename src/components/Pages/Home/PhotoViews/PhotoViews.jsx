import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import image1 from '../../../../assets/images/PhotoGallery/gallery1.jpg'
import image2 from '../../../../assets/images/PhotoGallery/gallery2.jpg'
import image3 from '../../../../assets/images/PhotoGallery/gallery3.jpg'
import image4 from '../../../../assets/images/PhotoGallery/gallery4.jpg'
import image5 from '../../../../assets/images/PhotoGallery/gallery5.jpg'
import image6 from '../../../../assets/images/PhotoGallery/gallery6.jpg'
import image7 from '../../../../assets/images/PhotoGallery/gallery7.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7,];

const PhotoViews = () => {
    return (
        <div className="photo-view-section">
            <div className="container mx-auto">
                <div className="title">
                    <h3>Gallery</h3>
                    <h2>Our activities</h2>
                </div>
                <div>
                    <PhotoProvider>
                        <div className="gallery">
                            {images.map((item, index) => (
                                <div className='items'>
                                    <PhotoView key={index} src={item}>
                                        <img src={item} alt="" />
                                    </PhotoView>
                                    <div className="zoomIn">
                                        <FaMagnifyingGlassPlus />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default PhotoViews;