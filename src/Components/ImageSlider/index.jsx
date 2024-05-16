import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [image, setImage] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg,setErrorMsg] = useState(null)
  async function fetchImages(getUrl){
    try {
      
    } catch (error) {
      
    }

  }
  useEffect(() => {
    if (url !== " ") fetchImages(getUrl);
  }, [url]);

  return <div className="container">ImageSlider</div>;
};

export default ImageSlider;
