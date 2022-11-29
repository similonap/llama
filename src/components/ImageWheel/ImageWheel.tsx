import React, { FC, useEffect } from 'react';
import styles from './ImageWheel.module.css';

interface ImageWheelProps {}

const ImageWheel: FC<ImageWheelProps> = () => {
  const [images, setImages] = React.useState([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  useEffect(() => {
    (async() => {
      let result = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=UNuD9UClvz6s0Y3hQnuaQ88QLeEnko-tDPP8qOApudc")
      let json = await result.json();

      let images = json.map((item: any) => {
        return item.urls.full;
      })

      setImages(images);
    })()
  },[])

  useEffect(() => {
    let handle = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(handle);
    }
  },[currentImageIndex, images])

  return (
    <div style={{width: "100%", top: 0, left:0 }}>
      <img style={{width: "100%", height: 400, objectFit: "cover"}} src={images[currentImageIndex]}/>
    </div>
  )
}

export default ImageWheel;
