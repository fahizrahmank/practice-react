import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    if (url !== " ") fetchImages();
  }, [url]);

  console.log(images);

  if (loading) {
    return (
      <div>
        <h1>Loading data... please wait...</h1>
      </div>
    );
  }
  if (errorMsg !== null) {
    return (
      <div>
        <h1>Error occurred: {errorMsg}</h1>
      </div>
    );
  }

  return <div className="mnain-container">
    <BsArrowLeftCircleFill className="arrow arrow-Left"/>
  </div>;
};

export default ImageSlider;
